"use client";
import { createHighlighter } from 'shiki';
import { useLanguage } from '../../components/LanguageContext';
import { useEffect, useState } from 'react';

export default function Experience() {
  const { t } = useLanguage();
  const [html, setHtml] = useState('');

  useEffect(() => {
    const initHighlighter = async () => {
      const highlighter = await createHighlighter({
        themes: ['tokyo-night'],
        langs: ['typescript'],
      });

      const code = t('experienceCode');

      const generatedHtml = highlighter.codeToHtml(code, {
        lang: 'typescript',
        theme: 'tokyo-night',
      });

      setHtml(generatedHtml);
      highlighter.dispose();
    };

    initHighlighter();
  }, [t]);

  return (
    <div className="h-full bg-[#1a1b26] p-8">
      <div
        className="font-mono text-sm leading-relaxed"
        style={{
          fontFamily: 'Fira Code, JetBrains Mono, monospace',
          lineHeight: '1.5',
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}