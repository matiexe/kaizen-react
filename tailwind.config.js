module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Lato','sans-serif'],
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace"]
      },
      colors:{
        "blue-kai": "#5267DF",
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
        "gradientfondo": "#e69f3c",
        "fondokaizenoscuro":"#f59e0b",
        "gradientfondo2": "#4473b3",
        "gradientfondo3": "#528345",
        "greenMonochromatic": "#009874",
        "redNaphtol": "#DE4343",
        "classicBlue": "#0F4C81",
        "illuminatingYellow": "#F5DF4D",
        "ultimateGray": "#939597",
      }

    },
  },
  plugins: [],
}