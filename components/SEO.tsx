import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  dir?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, lang, dir }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }
  }, [description]);

  useEffect(() => {
    if (lang) {
      document.documentElement.lang = lang;
    }
    if (dir) {
      document.documentElement.dir = dir;
    }
  }, [lang, dir]);

  return null;
};