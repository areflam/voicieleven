const apiKey = process.env.ELEVENLABS_API_KEY;

async function postVoices(req, res) {
  try {
    const text = req.body.text || "Hello world";
    const response = await fetch("https://api.elevenlabs.io/v1/text-to-speech/JBFqnCBsd6RMkjVDRZzb?output_format=mp3_44100_128", {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2"
      })
    });

    if (!response.ok) {
      throw new Error(`ElevenLabs API request failed with status ${response.status}`);
    }

    const audioBuffer = await response.arrayBuffer();
    res.set("Content-Type", "audio/mpeg");
    res.send(Buffer.from(audioBuffer));
  } catch (error) {
    console.error("Error generating voice:", error);
    res.status(500).json({ error: "Failed to generate voice" });
  }
}

module.exports = { postVoices };
