# Features:

* Express.js as the web framework.
* ES2017 support (Node 8.9.4 and TypeScript)
* Configuration file with dotenv
* Easy documentation with apidocjs
* Error reporting with bugsnag

# Getting Started

```bash
# Clone the project
git clone https://github.com/ianldgs/express-typescript-starter-kit.git my-project
cd my-project

# Configuration file
cp .env.example .env
vim .env

# Make it your own
rm -rf .git && git init && npm init
```

## Developing
`npm run dev` - Automatically watch typescript changes and restart the server

## Generate DOCs
`npm run gen-docs` - Then visit http://localhost:8080/docs