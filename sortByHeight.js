function sortByHeight(a) {
  const filterSortPeople = a.filter((ppl) => ppl !== -1).sort((a, b) => a - b);
  return a.map((ele) => (ele !== -1 ? filterSortPeople.shift() : -1));
}

/* Input:  [-1, 150, 190, 170, -1, -1, 160, 180]
Expected Output: [-1, 150, 160, 170, -1, -1, 180, 190] */
