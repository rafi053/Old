const Mission3 = (array) => {
    const filterArray = [...new Set(array.flat())];
    return filterArray;
}
const array =  [[3, 6, 8],[1, 4, 2]];

console.log(Mission3(array));
