import React from 'react';

// Article data uses paired asterisks for emphasis; render them as text, never HTML.
export const ArticleText: React.FC<{ text: string }> = ({ text }) => (
  <>{text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part
  )}</>
);
