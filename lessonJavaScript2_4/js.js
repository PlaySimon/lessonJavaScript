let soldire = {
    health: 400,
    armor: 100
};

let simonSoldire = {
    health: 100
};

simonSoldire.__proto__ = soldire;

console.log(simonSoldire);
console.log(simonSoldire.armor)