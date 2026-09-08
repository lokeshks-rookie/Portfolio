import React from 'react';

interface HoverTextProps {
  text: string;
}

export function HoverText({ text }: HoverTextProps) {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split('').map((char, charIndex) => (
              <span key={charIndex} className="hover-char" style={{ display: 'inline-block' }}>
                {char}
              </span>
            ))}
          </span>
          {wordIndex < words.length - 1 && (
            <span className="hover-char" style={{ display: 'inline-block', whiteSpace: 'pre' }}>
              {' '}
            </span>
          )}
        </React.Fragment>
      ))}
    </>
  );
}
