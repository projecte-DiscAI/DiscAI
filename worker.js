export default {
  async fetch(request, env, ctx) {
    // Permetre peticions CORS per al frontend
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Envial-ho amb POST", { status: 405 });
    }

    try {
      const data = await request.json();
      const userMessage = data.message || "";

      // Ací pots connectar amb la teua lògica o model d'IA
      const respostaText = `Gràcies per la teua consulta sobre "${userMessage}". L'agent de DiscAI ha processat la informació basant-se en la legislació vigent.`;

      return new Response(JSON.stringify({ response: respostaText }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  },
};
