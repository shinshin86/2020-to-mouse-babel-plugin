module.exports = ({ types: t }, options) => {
  return {
    name: "babel-2020-to-mouse-plugin",
    visitor: {
      Literal(path, file) {
        if (path.get("literal").container.value.includes("2020")) {
          const value = path.get("literal").container.value;
          path.replaceWith(t.stringLiteral(value.replace("2020", "🐭🐭🐭🐭")));
        }
      }
    }
  };
};
