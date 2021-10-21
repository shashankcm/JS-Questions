function isIPv4Address(inputString) {
  let ipvArr = inputString.split(".");
  if (ipvArr.length !== 4) return false;

  for (let val of ipvArr) {
    let matchedValues = val.match("d*[a-z]+d*");
    if (matchedValues !== null) if (matchedValues[0].length > 0) return false;
    if (val.length === 0) return false;
    if (val.length > 1 && (val.charAt(0) === "0" || parseInt(val) > 255)) {
      return false;
    }
  }
  return true;
}

function isIPv4Address(s) {
  var r = s.split(".");
  return (
    r.length === 4 && r.every((x) => x != "" && !isNaN(x) && x >= 0 && x < 256)
  );
}

// inputString: "172.16.254.1"
