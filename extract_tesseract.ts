import Tesseract from "tesseract.js";

async function extract() {
  for (let i = 1; i <= 2; i++) {
    console.log(`--- Page ${i} ---`);
    const { data: { text } } = await Tesseract.recognize(
      `./public/sayfa${i}.png`,
      'tur', // Turkish language
      { logger: m => console.log(m) }
    );
    console.log(text);
  }
}

extract().catch(console.error);
