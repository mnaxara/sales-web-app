## Getting started

Install dependencies

```shell
yarn
```

Run the server:

```shell
yarn dev
```

Develop your feature.

Test it !

```shell
yarn test
```

Commit your changes:

```shell
yarn commit
```

## Design

### HomePage

![sales-homepage](.\docs\sales-homepage.drawio.svg)

### Product Slug

![sales-homepage](.\docs\sales-product.drawio.svg)

### Favorites

![sales-homepage](.\docs\sales-favorites.drawio.svg)

### Folder Structure

```
/src
    /home
        index.js        #Use as an index file
        HomePage.jsx
        styles.css
        HomePage.test.jsx
        HomePage.stories.jsx
    /product
        index.js
        Product.jsx
        ...
    /hooks
        index.js        #Use as an index file
        useCounter.js
```

Thanks for your service

# Powered by React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
