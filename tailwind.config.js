/** @type {import('tailwindcss').Config} */
// Use module.exports = {...} for CommonJS, which is common in Node.js/Parcel setups
// if you're not using ES modules explicitly. If you are using "type": "module" in package.json,
// then 'export default' is fine. Assuming a standard Parcel setup, module.exports is safer.
module.exports = {
  content: [
    // 1. Scan your main HTML file in the root
    "./index.html",

    // 2. Scan your main App.js file in the root (if it contains Tailwind classes)
    "./App.js",

    // 3. Scan all HTML, JS, JSX, TS, TSX files within the 'components' folder and its subdirectories
    "./components/**/*.{html,js,jsx,ts,tsx}",

    // 4. Scan all HTML, JS, JSX, TS, TSX files within the 'utils' folder and its subdirectories
    "./utils/**/*.{html,js,jsx,ts,tsx}",

    // Add any other specific files or folders where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}