const plugin = require("../lib/index");
const pluginTester = require("babel-plugin-tester").default;

pluginTester({
  plugin,
  pluginName: "2020-to-mouse-babel-plugin",
  snapshot: true,
  tests: [
    {
      title: "2020-to-mouse-babel-plugin",
      code: 'console.log("Hello 2020!");',
    },
  ],
});
