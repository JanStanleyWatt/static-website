import { getCollection } from "astro:content";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import aozora from "marked-aozora";
import markedAlert from "marked-alert";
import hljs from "highlight.js";
import markedFootnote from "marked-footnote";

export interface Article {
  title: string;
  date: string;
  slug: string;
  body: string;
}

export async function getNinetyArticles(): Promise<Article[]> {
  const articles = await getCollection("ninety");
  return articles
    .map((article) => {
      return {
        ...article.data,
        slug: article.slug,
        body: article.body,
      };
    })
    .sort(
      (a: Article, z: Article) =>
        new Date(z.date).getTime() - new Date(a.date).getTime()
    );
}

export const marked = new Marked(
  markedHighlight({
    emptyLangClass: "hljs",
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  }),
  markedAlert(),
  markedFootnote()
).use({ extensions: [aozora()], breaks: true });
