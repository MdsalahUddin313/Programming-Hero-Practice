/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"], // Adjust path if HTML files are in subfolders
    theme: {
      extend: {},
      screens: {
        xs: '320px',
        sm: '375px',
        lsm: '425px',  
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        },
    },
    plugins: [],
  };
  