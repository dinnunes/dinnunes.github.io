import { useEffect } from 'react';

export default function AtmosphereManager() {
  useEffect(() => {
    const updateAtmosphere = () => {
      const hours = new Date().getHours();
      const root = document.documentElement;

      let config = {
        bg: '#111111',
        font: '"Inter", sans-serif',
        opacity: '0.9'
      };

      // Manhã (06:00 - 11:59) - Claridade Sutil
      if (hours >= 6 && hours < 12) {
        config = {
          bg: '#111111',
          font: '"Inter", sans-serif',
          opacity: '0.85'
        };
      } 
      // Tarde (12:00 - 17:59) - Foco Editorial
      else if (hours >= 12 && hours < 18) {
        config = {
          bg: '#080808',
          font: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          opacity: '0.9'
        };
      } 
      // Noite (18:00 - 05:59) - Enigma Absoluto
      else {
        config = {
          bg: '#000000',
          font: '-apple-system, BlinkMacSystemFont, "San Francisco", sans-serif',
          opacity: '1'
        };
      }

      // Aplica as variáveis ao :root
      root.style.setProperty('--pitore-bg', config.bg);
      root.style.setProperty('--pitore-font', config.font);
      root.style.setProperty('--pitore-text-opacity', config.opacity);
    };

    updateAtmosphere();
    // Verifica a cada minuto se a hora mudou para atualizar o clima
    const interval = setInterval(updateAtmosphere, 60000);
    return () => clearInterval(interval);
  }, []);

  return null; // Este componente não renderiza nada visualmente
}
