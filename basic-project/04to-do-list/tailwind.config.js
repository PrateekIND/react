/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

            backgroundImage: {
              'hero-pattern': "url('https://media.istockphoto.com/id/1011182136/photo/check-off-completed-tasks-on-a-to-do-list.jpg?s=612x612&w=is&k=20&c=9PNSDRDXgZGYtEcy8RiZG89XvLAoiqW4AETktN-0DvY=')",
              'footer-texture': "url('/img/footer-texture.png')",

      }
      
    },
  },
  plugins: [],
}

