import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini lazily/safely
let genAI: GoogleGenAI | null = null;
function getGeminiClient() {
  if (!genAI && process.env.GEMINI_API_KEY) {
    genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return genAI;
}

// API Health
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", gym: "GYM SOUTH BEACH GARRUCHA" });
});

// Marketing Copy & Content Generator Endpoint using Gemini
app.post("/api/generate-copy", async (req, res) => {
  try {
    const { contentType, topic, targetAudience, platform } = req.body;

    const systemPrompt = `Eres el Director de Marketing, Copywriter Senior, Community Manager y Estratega de Marca de GYM SOUTH BEACH GARRUCHA, un gimnasio ubicado en Garrucha (Almería, España).
Misión: Crear contenido auténtico, cercano, motivador y persuasivo.
Público Objetivo: Vecinos de Garrucha, Vera, Mojácar, Puerto Rey, principiantes, mayores, jóvenes, gente que quiere perder peso, turistas.
Valores y Diferenciadores:
- Ambiente familiar y acogedor, trato humano y personalizado ("Aquí no eres un número").
- 5.0 Estrellas y más de 147 reseñas en Google.
- Dueños implicados que te ayudan en cada entrenamiento.
- Maquinaria completa y renovada continuamente.
- Climatización (Aire acondicionado/Ventilación excelente) para entrenar cómodo todo el año.
- Sin aglomeraciones ni masificaciones.
- Palabras clave SEO local: gimnasio en Garrucha, gimnasio Garrucha, gimnasio Almería, gimnasio cerca de Vera, gimnasio cerca de Mojácar.

Instrucciones para este contenido:
Tipo de contenido: ${contentType || 'Publicación para Instagram/Facebook'}
Plataforma: ${platform || 'Instagram'}
Tema / Enfoque: ${topic || 'Invitación a probar el gimnasio'}
Público específico: ${targetAudience || 'General'}

Formato de respuesta:
Devuelve un texto listo para publicar con:
1. Gancho llamativo (Headline)
2. Cuerpo de texto emotivo, claro y cercano (Storytelling / PAS / AIDA)
3. Llamada a la acción (CTA) natural como "Ven a conocernos" o "Escríbenos por WhatsApp"
4. Selección de hasta 10-12 hashtags relevantes locales y fitness.`;

    const client = getGeminiClient();
    if (client) {
      const response = await client.models.generateContent({
        model: "gemini-2.5-flash",
        contents: systemPrompt,
      });
      const generatedText = response.text;
      return res.json({ success: true, text: generatedText });
    } else {
      // Fallback copy generator if GEMINI_API_KEY is not set yet
      const fallbackText = `💪 ¡En GYM SOUTH BEACH GARRUCHA no eres un número!

¿Sabías que el mayor secreto para no abandonar tus objetivos es entrenar en un sitio donde te sientas como en casa? 🏠✨

En Garrucha tenemos el espacio perfecto para ti:
✅ Ambiente familiar y trato 100% personalizado.
✅ Maquinaria completa y renovada para todos los niveles.
✅ Aire acondicionado y la mejor ventilación para entrenar cómodo todo el año.
✅ Sin aglomeraciones: entrena a tu ritmo y con ayuda constante.

Tengas la edad que tengas, o si jamás has pisado un gimnasio, aquí estamos los dueños para guiarte desde el primer día. Y si vienes de vacaciones por Garrucha, Mojácar o Vera, ¡tenemos pases especiales para ti!

👉 ¡Prueba tu primera clase GRATIS y sin compromiso!
📲 Escríbenos un WhatsApp al instante o ven a vernos. ¡Te esperamos con los brazos abiertos!

#GimnasioGarrucha #FitnessGarrucha #Garrucha #GimnasioFamiliar #Mojacar #VeraPlaya #PuertoRey #AlmeriaFitness #EntrenamientoGarrucha #SaludYBienestar`;

      return res.json({ success: true, text: fallbackText, isFallback: true });
    }
  } catch (error: any) {
    console.error("Error generating marketing copy:", error);
    res.status(500).json({ error: "No se pudo generar el contenido.", details: error.message });
  }
});

// Lead / Trial Class endpoint
app.post("/api/free-trial", (req, res) => {
  const { name, phone, email, preferredTime, message } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: "Nombre y teléfono son obligatorios." });
  }

  // Pre-formatted WhatsApp text link
  const text = encodeURIComponent(
    `Hola GYM SOUTH BEACH GARRUCHA! Soy ${name}. Me gustaría reservar mi primera clase de prueba gratuita. Mi teléfono es ${phone}. ${preferredTime ? 'Horario preferido: ' + preferredTime : ''}`
  );
  const whatsappUrl = `https://wa.me/34600000000?text=${text}`;

  res.json({
    success: true,
    message: "¡Solicitud registrada correctamente! Te redirigimos a WhatsApp para confirmar al instante.",
    whatsappUrl
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
