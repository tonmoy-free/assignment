const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

userNames = users.map((user)=>user.name+" "+'khan'+" "+user.id);
console.log(userNames);