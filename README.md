# AMP Frontend

This project using Next.js, MUI, and TailwindCSS.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## CSS & Components

CSS
TailwindCSS V3: A utility-first CSS framework you can use className to create your UI as much as you can.

-   More info: https://tailwindcss.com/

Components
MUI V5: React UI framework

-   More info: https://mui.com/

## Naming convention

-   Folder components
    Pascal case ex. Layout

-   Folder Pages
    Kebab case ex. process

-   Page files
    Kebab case ex. dashboard.tsx

-   File Typescript
    Kebab case ex. endpoint.ts

-   Constant name
    Uppercase ex. RESOLVER, LANGUAGES

## Component naming

AMP(Application Message Platform) prefix use for the component that already has in MUI but you need to custom(for reuseable with the same style). The purpose is to avoid confusion when developers use or import it.
Example
Button => AMPButton

## Component customization

If you want to custom style of MUI components you can try to customize MUI by using createTheme()
src: \src\styles\theme\index.ts

More info: https://mui.com/customization/theming/

## Libraries

-   @tanstack/react-query
    React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze.

-   @tanstack/react-table
    TanStack Table is a Headless UI library for building powerful tables & datagrids.

-   formik
    Getting values in and out of form state, validation and error messages, handling form submission

-   yup
    Yup is a schema builder for runtime value parsing and validation. Define a schema, transform a value to match, assert the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformation.

### vsc extensions

To help lint your code you can use these extensions:

-   (ESLint) dbaeumer.vscode-eslint
-   (Prettier - Code formatter) esbenp.prettier-vscode

### How to set Prettier & Eslint

In VSC
Press: ctrl + shift + p
Open setting file by typing: Open Preference: Open User Setting (JSON)
Add configs below to setting file

"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true,
"source.organizeImports": true
},

### You might found problems in this project

1. ESlint not working with this project.

## How to solve:

npm i eslint

2. Line sequence problem : Files got error with CRLF because in Windows set file CRLF by default.

## How to solve:

Set autocrlf to fault in your machine.

## Steps:

1. In cmd, run
   git config --global core.autocrlf false

2. Remove this repo from your local machine, then clone again. It sets LF by default.
