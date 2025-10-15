/** postcss.config.mjs */
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    // you *do not* need to explicitly include autoprefixer; Tailwind v4 handles that internally
  },
};
