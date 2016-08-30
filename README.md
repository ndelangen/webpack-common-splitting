# A demo of webpack's ability to code-split using the CommonsChunkPlugin

To install & run:
```
npm install
npm run build
npm run start

```

You can run this, but the interesting bits are in `webpack.config.js`.

A CommonsChunkPlugin can be provided with a minChunks callback function.
This function is called for every module require in every chunk, with a module (object) and a count (int) as parameters.
You should return a boolean which determins if this module should become part of the commons-chunk or not.

An example filtering all node_modules into a 'vendor' commons-chunk:
```js
new CommonsChunkPlugin({
  name: 'vendor',
  minChunks: (module, count) => (
    module.userRequest.match(/node_modules/)
  )
}),
```

An example filtering common UI components into 'ui-lib' commons-chunk:
```js
new CommonsChunkPlugin({
  name: 'vendor',
  minChunks: (module, count) => (
    module.userRequest.match(/src\/.*\/common-ui/)
  )
}),
```

You can create multiple 'commons'-chunks this way.

## Why would you want to create chunks this way?

There a few reasons:

1. Long term caching works best if the resources loaded, rarely change. If the code changes very often, it can be a performance problem if you bundle a lot of 'static/vendor' code with the code that changed.
2. Conditional loading (AMD)
