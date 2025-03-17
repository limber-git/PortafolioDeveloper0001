module.exports = {
    i18n: {
      locales: ['en', 'es'], // Idiomas que soportarás (inglés y español en tu caso)
      defaultLocale: 'es',    // Idioma por defecto
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development', // Recarga en modo desarrollo
  };
  