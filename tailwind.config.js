/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "earthy" :{
          DEFAULT :"#ded9d6",
          "dark":"#ccc3ba"
        },
        "green":"#2cba57",
        "border":"#bab0a7",
        "blue":"#232359",
        "paper":{
          1:"#689368",
          2:"#9e96a5",
          3:"#b7bac0",
          4:"#c6beb4",
          5:"#FFF",
        }
      }
    },
  },
  plugins: [],
}

