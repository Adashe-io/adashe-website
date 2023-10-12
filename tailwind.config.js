/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xms': '0.69rem',
        'xs': '0.75rem',   // Custom font size for 'xs'
        'sm': '0.875rem',  // Custom font size for 'sm'
        'ssm': '0.93rem',
        'base': '1.35rem',    // Custom font size for 'base'
        'lg': '1.225rem',  // Custom font size for 'lg'
        'xxl': '2rem',
        'xl': '2.45rem',   // Custom font size for 'xl'
      },
    },
  },
  plugins: [],
}
