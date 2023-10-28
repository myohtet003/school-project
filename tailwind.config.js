/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1537px',
        // => @media (min-width: 1537px) { ... }
      },
      
      colors: {
        'primary': '#f37335',
        'yellow': '#fda12c',
        'orange': '#fdc12a',
        'blue': '#C9E2F8',
        'violent': '#8561CE',
        'secondary': '#135e9e',
        'header-text-color': '#494949',
        'para-text-color': '#54595F',
        'background' : '#f5fcff',
        'gray': '#495057',
      },
      fontFamily: {
        'poppin': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '-3px -5px 5px 2px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'bubble-1-gradient': "linear-gradient(135deg, rgb(245, 132, 66) 0%,rgba(245, 197, 66,1) 100%)",
        'btn-gradient': "linear-gradient(180deg,#f37335 ,#fda12c)",
        'form-gradient': "linear-gradient(220deg,#f37335 ,#fda12c)",

      },
       
    },
  },
  plugins: [],
}

