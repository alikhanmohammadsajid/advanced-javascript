const students = [
    {id:21, name:'sajid'},
    {id:31, name:'mannna'},
    {id:41, name:'dipjol'},
    {id:51, name:'omorsani'}
];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 30);

console.log(bigger);


// const output = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.name;
//     output.push(result)
// }
// const result = students.map(function (array) {
//     console.log(result.array)
// })