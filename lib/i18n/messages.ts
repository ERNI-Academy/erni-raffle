export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Messages = {
  meta: { title: string; description: string };
  header: {
    logoAlt: string;
    switchToEnglish: string;
    switchToSpanish: string;
  };
  hero: { alt: string; titleLine1: string; titleLine2: string };
  intro: string;
  sections: Array<{
    id: string;
    title: string;
    blocks: ContentBlock[];
  }>;
  footer: string;
};
