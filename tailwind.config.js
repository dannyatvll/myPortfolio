/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  safelist: [
    'bg-gradient-to-tr',
    'from-cielo',
    'via-amanecerRosa',
    'to-sol',
    'from-bosque',
    'via-noche',
    'to-lava'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cal Sans', 'sans-serif']
      },
      colors: {
        //titulos dias
        tituloDia: '#57534E',
        subtituloDia: '#94A3B8', // slate-500
        //textoDia: '#475569',

        // titulos noche
        tituloNoche: '#D6D3D1',
        subtituloNoche: '#94A3B8',
        //textoNoche: '#475569',

        // Modo claro - naturaleza viva
        cielo: '#83C7F4',
        amanecerRosa: '#F4B4CF',
        sol: '#FFDF97',
        // Modo oscuro - bosque profundo
        bosque: '#022C22',
        barro: '#57534E',
        noche: '#1E1B4B',
        niebla: '#CBD5E1',
        fuego: '#881337',
        lava: '#7F1D1D',

        nocheBase: '#0f172a', // fondo bajo gradiente en modo oscuro
        diaBase: '#f4b4cf' // fondo bajo gradiente en modo claro
      }
    }
  },
  plugins: []
}
