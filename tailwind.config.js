/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
  darkMode: 'class',
};

// /**
//  * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
//  */
// module.exports = {
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./public/**/*.html",
//   ],
//   plugins: [
//     require("flowbite/plugin")
//   ],
//   theme: {},
// };

// /**
//  * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
//  */
// module.exports = {
//   content: [
//     "./node_modules/flowbite-react/**/*.js",
//     "./pages/**/*.{ts,tsx}",
//     "./public/**/*.html",
//   ],
//   plugins: [
//     require("flowbite/plugin")
//   ],
//   theme: {},
// };