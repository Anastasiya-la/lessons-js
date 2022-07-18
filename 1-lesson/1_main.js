const user = {
    name: 'Alex',
    age: 30,
    isOnline: false
} //123

const user2 = user; //123
// {}, new Object()

console.log(user2 === user); // true

user2.name = 'Bob';
console.log(user);

console.log({} === {}); //false

const arr = [];
const arr2 = arr;

const propName = 'friends';

const copyUser = {
    ...user,
    isOnline: true,
    isStudent: true,
    [propName]: []
}; //spread

console.log(user);
console.log(copyUser);

const copy2user = {...copyUser, friends: [...copyUser.friends]}
copy2user.friends.push('Anna');
console.log(copy2user.friends === copyUser.friends);
console.log(copyUser);