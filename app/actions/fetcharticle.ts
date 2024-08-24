"use server";
import axios from "axios";
import * as cheerio from "cheerio";

export async function FetchArticle(url: string) {
  try {
    const response = await axios.get(url);
    const html = response.data;

    // Load the HTML into Cheerio
    const $ = cheerio.load(html);

    // Extract text content from common article tags
    const articleText = $("h1, h2, h3, p")
      .map((i, el) => {
        return $(el).text();
      })
      .get()
      .join(" ");

    // Clean and return the text
    const cleanText = articleText.replace(/\s+/g, " ").trim();
    return cleanText;
  } catch (error) {
    console.error("Error fetching or processing article:", error);
    throw new Error("Failed to fetch or process the article.");
  }
}
