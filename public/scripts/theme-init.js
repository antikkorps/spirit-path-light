// Script d'initialisation immédiate du thème pour éviter le flash
;(function () {
  const THEME_KEY = "theme"

  function getTheme() {
    if (typeof localStorage !== "undefined") {
      const stored = localStorage.getItem(THEME_KEY)
      if (stored) return stored
    }

    // Détection du thème système
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    }

    return "light"
  }

  // Appliquer le thème immédiatement
  const theme = getTheme()
  document.documentElement.setAttribute("data-theme", theme)
})()
