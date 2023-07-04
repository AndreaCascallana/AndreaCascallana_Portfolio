/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,cjs,jsx,sass}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Inter'", "sans-serif"],
      },
      transitionProperty: {
        'border': 'border',
      }
    },
  },
  daisyui: {
    themes: [
      {
        myTheme: {
          "base-100": "#f8fafc",
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}

