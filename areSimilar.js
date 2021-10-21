function areSimilar(a, b) {
  const ad = a.filter((number, index) => number != b[index]);
  const bd = b.filter((number, index) => number != a[index]);
  return ad.length > 2 ||
    bd.length > 2 ||
    ad.sort().join("") !== bd.sort().join("")
    ? false
    : true;
}
