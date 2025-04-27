/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cal Sans', 'sans-serif'],
      },
      colors: {
        // Modo claro - naturaleza viva
        cielo: '#E0F2FE', // azul clarito (sky-100)
        rio: '#CFFAFE', // turquesa pastel (cyan-100)
        pino: '#A7F3D0', // verde suave (emerald-200)

        // Modo oscuro - bosque profundo
        bosque: '#022C22', // verde pino profundo (green-950)
        barro: '#57534E', // marrón barro (stone-700)
        noche: '#1E1B4B', // azul estrellado oscuro (indigo-950)
        niebla: '#CBD5E1', // gris niebla suave (slate-400)
        fuego: '#881337', // rojo fuego profundo
        lava: '#7F1D1D', // rojo lava oscuro
      },
    },
  },
  plugins: [],
};
