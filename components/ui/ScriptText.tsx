import React from "react";

export interface ScriptTextProps {
  children: string;
}

/**
 * Renders plain content strings that mark accent words with *asterisks*,
 * e.g. "begin to *thrive*." -> script-styled accent span. Keeps copy plain-text in /content/site.ts.
 */
export function ScriptText({ children }: ScriptTextProps) {
  const parts = children.split(/\*([^*]+)\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span
            key={i}
            className="font-script text-accent text-[1.35em] leading-none font-normal px-[0.08em]"
          >
            {part}
          </span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

export default ScriptText;
