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
        header: "#191C20",
        signbg: "#151515",
        dropBg: "#1D2A35",
        navbg: "#2E2E2E",
        clrPrimaryBlack: "hsl(var(--color-primary-black) / <alpha-value>)",
        clrSecondaryGrey: "hsl(var(--clr-secondary-grey) / <alpha-value>)",
        clrFont: "hsl(var(--clr-font) / <alpha-value>)",
        clrLayoutGreen: "hsl(var(--clr-layout-green) / <alpha-value>)",
      },
      fontSize: {
        largeFnt: "2.875rem", //for landing/main page section headings,
        bigFnt: "2rem", //for page title, subtitles, players names,blogs titles
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
        cardDrop: "4px 4px 100px 10px rgba(0, 0, 0, 0.25)",
        navDrop: "0px 0px 6px 2px rgba(117, 225, 41, 1)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
