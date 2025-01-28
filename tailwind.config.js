/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontSize: {
        "sTitle":"48px",
      },

    },
  },
  plugins: [
    require('flowbite/plugin')
]
,
darkMode: "selector"
}

