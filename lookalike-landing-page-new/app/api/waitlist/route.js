export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      redirect: "follow", // ← is this there?
      headers: {
        "Content-Type": "text/plain;charset=utf-8", // ← is this there?
      },
      body: JSON.stringify(body),
    });

    const text = await response.text(); // safer than .json()

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { success: true, raw: text };
    }

    return Response.json(data);
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}
