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
        signbg: "#151515",
        navbg: "#2E2E2E",
        clrPrimaryBlack: "hsl(var(--color-primary-black) / <alpha-value>)",
        clrSecondaryGrey: "hsl(var(--clr-secondary-grey) / <alpha-value>)",
        clrFont: "hsl(var(--clr-font) / <alpha-value>)",
        clrLayoutGreen: "hsl(var(--clr-layout-green) / <alpha-value>)",
      },
      fontSize: {
        largeFnt: "3.4375rem", //for landing/main page section headings,
        bigFnt: "2.25rem", //for page title, subtitles, players names,blogs titles
        mediumF: "1.71875rem", //labels, buttons, some discriptions
        mediumFnt: "1.21875rem", //labels, buttons, some discriptions
        smallFnt: "1.1rem", // blog body, header/footer links, placeholders
      },
      fontWeight: {
        lightFnt: 400, // header/footer links,placeholders
        midFnt: 500, // buttons, page title, subdiscription ,players names,labels,
        boldFnt: 600, //for landing/main page section headings,blogs
      },
      borderRadius: {
        regBtn: " 2.125rem",
        form: "1.875rem",
        formInput: "0.9375rem",
      },
      boxShadow: {
        btnDrop: "2px 2px 100px 10px rgba(76, 76, 76, 0.60)",
        navDrop: "0px 0px 6px 2px rgba(117, 225, 41, 1)",
      },
    },
  },
  plugins: [],
};
