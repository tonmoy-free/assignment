// filter ja search kora hobe sob ane dibe....


const users = [
    { id: 1, name: 'Alice' , star:5},
    { id: 2, name: 'Bob', star:3 },
    { id: 3, name: 'Charlie', star:5 },
    { id: 4, name: 'kharlie', star:4 },
    { id: 5, name: 'Mharlie', star:5 },
    { id: 6, name: 'Pharlie', star:2 },
    { id: 7, name: 'Ghharlie', star:3 },
];

// const starData = users.filter((user)=> user.star === 5 && user.name == 'Alice' );

const starData = users.filter((user)=> user.star === 5 );

console.log(starData);

