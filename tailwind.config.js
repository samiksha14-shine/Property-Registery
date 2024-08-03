/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    // Add other content paths as needed
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1d4ed8', // Example primary color for your gradient
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
