# WebClient

SvelteKit Client

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
git clone https://github.com/croissantbit/WebClient.git
git submodule update --init --recursive

# Generate protbuf type definitions
# Use the command based on your enviroment
npm run gen_win
npm run gen_linux

npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
# Generate protbuf type definitions
# Use the command based on your enviroment
npm run gen_win
npm run gen_linux

npm run build
```

You can preview the production build with `npm run preview`.
