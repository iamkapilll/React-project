import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/React-project/',  // <-- add this line, replace with your repo name
  plugins: [
    react(),
    tailwindcss(),
  ],
})



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'  
// import tailwindcss from '@tailwindcss/vite'


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),
//         tailwindcss(),

//   ],
// })
