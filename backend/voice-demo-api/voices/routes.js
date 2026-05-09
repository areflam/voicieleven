// List voices (GET /v2/voices)
// const router = require("express").Router();
// // ajouter la clé api ici en tant que variable d'environnement ? 
// // si oui comment faire pour que le code puisse accéder à cette variable d'environnement ?

// const apiKey = process.env.ELEVEN_LABS_API_KEY;
// router.get("/voices", async (req, res) => {
//   try {
//     const response = await fetch("https://api.elevenlabs.io/v1/text-to-speech/JBFqnCBsd6RMkjVDRZzb?output_format=mp3_44100_128", {
//     method: "POST",
//     headers: {
//       "xi-api-key": apiKey,
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     "text": "The first move is what sets everything in motion.",
//     "model_id": "eleven_multilingual_v2"
//   }),
// });
// const body = await response.json();
// console.log(body);
//     res.json(body);
//   } catch (error) {
//     console.error("Error fetching voices:", error);
//     res.status(500).json({ error: "Failed to fetch voices" });
//   }
// });
// module.exports = router;

const router = require("express").Router();
const { postVoices } = require("./controller");

router.post("/voices", postVoices);

module.exports = router;
