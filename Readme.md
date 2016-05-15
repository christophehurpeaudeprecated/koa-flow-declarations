# koa-flow-declarations

## How to install

First, install and configure babel.

```bash
npm install --save-dev koa-flow-declarations
```

## How to use

```js
import Koa from 'koa';
import type { KoaContext } from 'koa-flow-declarations/KoaContext';

const app = new Koa();

app.use(async (ctx: KoaContext) => {

});
```
