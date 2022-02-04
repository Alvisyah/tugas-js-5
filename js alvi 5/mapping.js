const nama="Alvisyah";
const map=Array.prototype.map;

const newName=map.call(nama, nm => {
    return `${nm}om`;
})

console.log(newName[0]);