"use client";

import React from 'react';

interface HighlightProps {
  text: string;
  query: string;
  className?: string;
}

export default function Highlight({ text, query, className = "bg-yellow-400 dark:bg-yellow-500 text-black rounded px-0.5 font-bold" }: HighlightProps) {
  if (!query || !query.trim()) return <>{text}</>;
  
  // split logic
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
  
  return (
    <>
      {parts.map((part, i) => 
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={i} className={className}>{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
