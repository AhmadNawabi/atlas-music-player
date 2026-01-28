
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Backgrounds 
        appBg: '#f8f8f8',
        panelBg: '#ffffff',
        controlBg: '#ffffff',

        // Text 
        text: '#000000',
        textMuted: '#6b7280',

        // Borders
        panelBorder: '#e2e8f0',

        // Dark overrides
        'appBg-dark': '#121212',
        'panelBg-dark': '#1e1e1e',
        'controlBg-dark': '#2a2a2a',
        'text-dark': '#f0f0f0',
        'textMuted-dark': '#9ca3af',
        'panelBorder-dark': '#333333',
      },
    },
  },
  plugins: [],
}
