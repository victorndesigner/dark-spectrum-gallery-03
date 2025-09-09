import { useState, useEffect, useMemo } from 'react';

type Language = 'br' | 'us';

interface Translations {
  br: Record<string, string>;
  us: Record<string, string>;
}

const translations: Translations = {
  br: {
    // Navigation
    home: 'Início',
    revive: 'Reviver',
    stumbleCups: 'StumbleCups',
    aboutMe: 'Sobre Mim',
    posts: 'Postagens',
    tutorials: 'Tutoriais',
    
    // Common
    searchPlaceholder: 'Pesquisar tutoriais...',
    watchOnYoutube: 'Ver no YouTube',
    subscribe: 'Inscreva-se',
    latestPosts: 'Últimas Postagens',
    
    // Home
    exploreCollection: 'Explore Nossa Coleção',
    homeDescription: 'Descubra os melhores jogos disponíveis para Steam e Mobile. Cada jogo oferece uma experiência única com gráficos impressionantes e gameplay envolvente.',
    
    // About Me
    aboutTitle: 'Sobre Mim',
    aboutDescription: 'Sou um criador de conteúdo apaixonado por jogos, sempre em busca de compartilhar as melhores experiências gaming com vocês.',
    
    // Footer
    allRightsReserved: 'Todos os direitos reservados.',
  },
  us: {
    // Navigation
    home: 'Home',
    revive: 'Revive',
    stumbleCups: 'StumbleCups',
    aboutMe: 'About Me',
    posts: 'Posts',
    tutorials: 'Tutorials',
    
    // Common
    searchPlaceholder: 'Search tutorials...',
    watchOnYoutube: 'Watch on YouTube',
    subscribe: 'Subscribe',
    latestPosts: 'Latest Posts',
    
    // Home
    exploreCollection: 'Explore Our Collection',
    homeDescription: 'Discover the best games available for Steam and Mobile. Each game offers a unique experience with stunning graphics and engaging gameplay.',
    
    // About Me
    aboutTitle: 'About Me',
    aboutDescription: 'I am a content creator passionate about games, always looking to share the best gaming experiences with you.',
    
    // Footer
    allRightsReserved: 'All rights reserved.',
  },
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'br';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    // Force re-render by dispatching a custom event
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: language }));
  }, [language]);

  const t = useMemo(() => (key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return { t, language, changeLanguage };
};