type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return Response.json({ error: "The AI assistant is not configured yet." }, { status: 503 });
  }

  try {
    const body = await request.json() as { messages?: ChatMessage[] };
    const messages = body.messages?.filter(
      (message) => (message.role === "user" || message.role === "assistant") && typeof message.content === "string",
    ).slice(-12);

    if (!messages?.length) {
      return Response.json({ error: "Please enter a message." }, { status: 400 });
    }

    const openAiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        temperature: 0.7,
        max_tokens: 350,
        messages: [
          {
            role: "system",
            content: "You are Manoj AI, the friendly design assistant for Manoj's portfolio. Answer clearly and briefly about Manoj's design services, experience, portfolio projects, and project discovery. Ask one useful follow-up question when appropriate. Never invent specific client facts, prices, dates, or guarantees; say when Manoj should confirm details.",
          },
          ...messages,
        ],
      }),
    });

    const result = await openAiResponse.json() as { choices?: Array<{ message?: { content?: string } }>; error?: { message?: string } };
    const assistantMessage = result.choices?.[0]?.message?.content?.trim();

    if (!openAiResponse.ok || !assistantMessage) {
      return Response.json({ error: result.error?.message || "The AI assistant could not answer right now." }, { status: 502 });
    }

    return Response.json({ message: assistantMessage });
  } catch {
    return Response.json({ error: "The AI assistant could not answer right now." }, { status: 500 });
  }
}