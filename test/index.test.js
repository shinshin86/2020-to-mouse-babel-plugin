const plugin = require("../lib/index");
const pluginTester = require("babel-plugin-tester").default;

pluginTester({
  plugin,
  snapshot: true,
  tests: [
    {
      title: "2020-to-mouse-babel-plugin",
      code: 'console.log("Hello 2020!");',
    },
  ],
});
