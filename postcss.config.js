
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npx next build
```
npm i -D tailwindcss postcss autoprefixer
@'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
