import { getHighlighter } from "shiki";

let highlighter: any;

export async function highlight(code: string, lang = "ts") {
  if (!highlighter) {
    highlighter = await getHighlighter({
      themes: ["github-dark", "github-light"],
      langs: ["ts", "js", "html", "css", "bash"],
    });
  }

  return highlighter.codeToHtml(code, {
    lang,
    theme: "github-dark",
  });
}
