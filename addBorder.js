//Solution -1
function addBorder(picture) {
  let border = [],
    borderLen = picture[0].length + 2;

  for (let i = 0; i < borderLen; i++) {
    border.push("*");
  }

  border = border.join("");

  const addStarAtTheStartAndEndOfString = (str) => {
    const tempStr = [...str],
      symbol = "*";
    tempStr.unshift(symbol);
    tempStr.push(symbol);
    return tempStr.join("");
  };
  picture = picture.map((pic) => addStarAtTheStartAndEndOfString(pic));

  picture.unshift(border);
  picture.push(border);
  return picture;
}
// Solution - 2

function addBorder(picture) {
  var width = picture[0].length + 2;
  return [
    "*".repeat(width),
    ...picture.map((line) => `*${line}*`),
    "*".repeat(width),
  ];
}
