# 2020-to-mouse-babel-plugin

Happy new year🎉

This is a babel plugin that converts "2020" to "🐭🐭🐭🐭".

```bash
console.log("Hello 2020!");

      ↓ ↓ ↓ ↓ ↓ ↓

console.log("Hello \\uD83D\\uDC2D\\uD83D\\uDC2D\\uD83D\\uDC2D\\uD83D\\uDC2D!");
```

This is joke repository! Do not use in development and production.

## Usage(WIP)

**This is WIP. Because not publish to npm yet.**

Setup `.babelrc`

```
{
  "plugins": [
    [ "2020-to-mouse-babel-plugin"]
  ]
}
```

## Command for development

```bash
# development command
yarn dev

# test
yarn test

# code format
yarn fmt
```
