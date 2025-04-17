import { getCollection } from "astro:content";

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
            return ({
                ...article.data,
                slug: article.slug,
                body: article.body
            });
        })
        .sort(
            (a: Article, z: Article) => new Date(z.date).getMilliseconds() - new Date(a.date).getMilliseconds()
        );
}
