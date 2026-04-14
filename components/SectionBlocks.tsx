import type { Messages } from "@/lib/i18n/get-dictionary";
import { RichText } from "@/components/RichText";

type Block = Messages["sections"][number]["blocks"][number];

export function SectionBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-6 space-y-3 text-base leading-[1.6] text-foreground">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i}>
                <RichText text={block.text} />
              </p>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="mt-3 list-disc space-y-2 pl-5 marker:text-erni-navy"
              >
                {block.items.map((item, j) => (
                  <li key={j}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            );
          default: {
            const _exhaustive: never = block;
            return _exhaustive;
          }
        }
      })}
    </div>
  );
}
