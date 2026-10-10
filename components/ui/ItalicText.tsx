import React from "react";

/** Renders strings with _underscored_ phrases as <em>, so italic emphasis stays in content. */
export function ItalicText({ children }: { children: string }) {
  const parts = children.split(/_([^_]+)_/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <em key={i}>{part}</em> : <React.Fragment key={i}>{part}</React.Fragment>
      )}
    </>
  );
}

export default ItalicText;
