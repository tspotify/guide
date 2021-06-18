# Getting Started

## Prerequisites

- [Node.js v14+](https://nodejs.org)
- [Yarn 1](https://classic.yarnpkg.com) (optional)

:::tip
If you are using [Yarn 2](https://yarnpkg.com/), you must set `nodeLinker: 'node-modules'` in your `.yarnrc.yml` file
:::

## Installation

**Step 1**: Create a new directory
```shell:no-line-numbers
mkdir spotify-bot
```

We named the new directory as `spotify-bot` but you can name it anything you want.

**Step 2**: Move into the new directory
```shell:no-line-numbers
cd spotify-bot
```

**Step 3**: Initialize your project
<CodeGroup>
  <CodeGroupItem title="NPM" active>

```shell:no-line-numbers
npm init -y
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```shell:no-line-numbers
yarn init -y
```

  </CodeGroupItem>
</CodeGroup>

The above command will create a new `package.json` file in the current directory. Open this file, it should look something like this:
```json:no-line-numbers
{
  "name": "spotify-bot",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Since, this guide will be using es6 js, you will have to define the `type` of your project. Add the below higlighted line to this `package.json` file:
```json:no-line-numbers:{11}
{
    "name": "spotify-bot",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "type": "module"
}
```

Before going forward, there is one more thing that you need to change. Remove the `test` script from the `scripts` and add the following highlighted line to it:
```json:no-line-numbers:{7}
{
    "name": "spotify-bot",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "start": "node index.js"
    },
    "author": "",
    "license": "ISC",
    "type": "module"
}
```

**Step 4**: Install TSpotify on your machine
<CodeGroup>
  <CodeGroupItem title="NPM" active>

```shell:no-line-numbers
npm install tspotify
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```shell:no-line-numbers
yarn add tspotify
```

  </CodeGroupItem>
</CodeGroup>

**Step 5**: Create a new file named `index.js` in the current directory and copy the following code into it
```js
import { Client } from 'tspotify';

const client = new Client();

client.on('ready', async () => {
    console.log(`Logged in at ${client.readyAt}`);
});

client.login({
    clientID: 'your-client-id',
    clientSecret: 'your-client-secret'
});
```

You must provide your `clientID` and `clientSecret` in the above programe.

**Step 6**: Run your bot programe
<CodeGroup>
  <CodeGroupItem title="NPM" active>

```shell:no-line-numbers
npm run start
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```shell:no-line-numbers
yarn start
```

  </CodeGroupItem>
</CodeGroup>

It should log something like this in your machine's console:
```:no-line-numbers
Logged in at Fri Jun 18 2021 17:29:13 GMT+0530 (India Standard Time)
```

Congratulations, you just created your first Spotify bot. There is a lot you can do using TSpotify other than just logging the time your bot became online and we will learn how to do all of that in this guide. Happy reading! :tada: