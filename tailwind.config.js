/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clrPrimaryBlack: "hsl(var(--color-primary-black) / <alpha-value>)",
        clrSecondaryGrey: "hsl(var(--clr-secondary-grey) / <alpha-value>)",
        clrFont: "hsl(var(--clr-font) / <alpha-value>)",
        clrLayoutGreen: "hsl(var(--clr-layout-green) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
