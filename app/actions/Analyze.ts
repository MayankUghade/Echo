import { GoogleGenerativeAI } from "@google/generative-ai";

export async function Summarize(article: string) {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY as string);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `Convert the following text into a well structured format, maintain original article's tone and style. Include appropriate pauses and emphasis where necessary. Make sure to keep the structure format in the same length of the origna text this is the article: \n\n${article}\n\n`;

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}
