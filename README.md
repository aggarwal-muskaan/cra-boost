<p align='center'>
  <img src="https://github.com/aggarwal-muskaan/cra-boost/assets/54470292/2cecd94c-2550-4c1d-894d-893f79af9ce2" alt="React & Vite Starter">
</p>

<div align="center"><strong>A starter for React project</strong></div>
<div align="center">Provides a good developer experience, and boosts productivity. All the tools you need to build your next project.</div>

<br />

## Features

- ⚛️ React 18
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🖌 Renovate — To keep your dependencies up to date
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix
- 🚓 Axios - Interceptor configured
- 🐫 Lodash - cameliseCase() to convert any key of any data type into camel case
- ⛑ Tanstack Query - QueryClient instance with overridden default options

Please read <a href='https://medium.com/@aggarwal-muskaan/boost-productivity-in-a-react-project-a299a267c482'>Medium Blog</a> for more

## Quick Start

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

The best way to start with this template is using [degit](https://www.npmjs.com/package/degit?activeTab=readme#wait-isnt-this-just-git-clone---depth-1-).

```
npx degit https://github.com/aggarwal-muskaan/cra-boost your-project-name
cd your-project-name
npm install
```

### Development

To start the project locally, run:

```bash
npm run dev
```

Open `http://localhost:5173` with your browser to see the result.

## Documentation

### Requirements

- Node.js >= 16
- npm 8

### Directory Structure

- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, and favicon.<br>
- [`src`](./src) — Application source code, including components, lib, utilities, and styles.

### Scripts

- `npm run dev` — Starts the application in development mode at `http://localhost:5173`.
- `npm run build:dev` — Creates an optimized build of your application using `.env` file.
- `npm serve:dev` — Starts the application in development mode with `NODE_ENV = production`.
- `npm build` - Creates an optimized build of your application using `.env.production` file
- `npm serve` — Starts the application in production mode with `NODE_ENV = production`.
- `npm lint` — Runs ESLint for all files in the `src` directory.
- `npm run format` — Runs Prettier for all files in the directory including `json` config files.
- `npm run preview` - Previewing the build locally.

### Path Mapping

To import components or files, use the `@` prefix.

```jsx
import { MyButton } from '@/components/MyButton';
// js files
import { HttpErrorResponse } from '@/constants/HTTPErrorResponse';
import { getQueryClientInstance } from '@/lib/queryClient';
```
