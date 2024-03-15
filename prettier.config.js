/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  // indent using tabs instead of spaces
  useTabs: true,
  // tab size
  tabWidth: 4,
};

export default config;
