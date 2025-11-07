// Script d'initialisation simple du thème
;(function () {
  // Charger le thème sauvegardé ou utiliser la préférence système
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light')
  
  // Appliquer le thème immédiatement
  document.documentElement.setAttribute('data-theme', currentTheme)
})()
