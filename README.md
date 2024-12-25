# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
"src": "/api/auth/(.*)",
      "dest": "api/routes/index.js"

      "src": "/api/categories/(.*)",
      "dest": "api/routes/index.js"

// GET /api/categories/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Logic to get a specific category by id
  res.json({ message: `Get category with id ${id}` });
});

      app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
"routes": [
    { "src": "/api/categories", "dest": "api/index.js" },
    { "src": "/api/categories/(.*)", "dest": "api/index.js" },
    { "src": "/api/auth/sign-in", "dest": "api/index.js" },
    { "src": "/api/auth/sign-up", "dest": "api/index.js" },
    { "src": "/api/auth/sign-out", "dest": "api/index.js" },
    { "src": "/api/auth/forgot-password", "dest": "api/index.js" },
    { "src": "/api/brands", "dest": "api/index.js" },
    { "src": "/api/brands/(.*)", "dest": "api/index.js" },
    { "src": "/api/products", "dest": "api/index.js" },
    { "src": "/api/products/(.*)", "dest": "api/index.js" },
    { "src": "/api/sub-categories", "dest": "api/index.js" },
    { "src": "/api/sub-categories/(.*)", "dest": "api/index.js" },
    { "src": "/api/categories/(.*)/sub-categories", "dest": "api/index.js" },
    { "src": "/api/users", "dest": "api/index.js" },
    { "src": "/api/users/(.*)", "dest": "api/index.js" },
    { "src": "/api/cart", "dest": "api/index.js" },
    { "src": "/api/cart/(.*)", "dest": "api/index.js" },
    { "src": "/api/orders", "dest": "api/index.js" },
    { "src": "/api/orders/(.*)", "dest": "api/index.js" },
    { "src": "/api/payment", "dest": "api/index.js" },
    { "src": "/api/(.*)", "dest": "api/index.js" }
  ]
```
