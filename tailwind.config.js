/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'primary1': '#FFBE34',
      'primary2': '#091242',
      'secondary1': '#F4F4F4',
      'heading': '#1C1F35',
      'paragraph': '#666C89',
      'gradient1': '#FFB629',
      'gradient2': '#FFDA56',
      'gradient3': '#FFD7A6'
    },
    fontFamily: {
      'myRubic': ['Rubik'],
      'myKrub': ['Krub']
    },

    extend: {
    },
  },
  plugins: [require("daisyui")],
};
