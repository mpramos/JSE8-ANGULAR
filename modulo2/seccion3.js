let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
console.log(user1.name)
console.log(user1.phone); // -> undefined
user1.phone = "904-399-7557";
console.log(user1)
console.log(user1.phone);
let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
};
let user3 = {
    name: "Maria",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
};


let numerosEmojis =[1,2,2,2,2,2,'😒','🙌',true, false]
console.log(numerosEmojis);


let animals = [];
console.log(animals[0]); // -> undefined

animals[0] = "dog";
animals[2] = "cat";
console.log(animals)
console.log(animals[0]); // -> dog
console.log(animals[1]); // -> undefined
console.log(animals[2]); // -> cat
    

let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][0])
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James

let femaleNames = names[0];
console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia


let users =[ 
    {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
    },
    {
        name: "Mateus",
        surname: "Pinto",
        age: 21,
        email: "MateusPinto@dayrep.com"
    }
];
console.log(users[1].name)



console.log(users[0].name); // -> Calvin
console.log(users[1].age); // -> 21
    

// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(typeof days); // -> object




let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";

console.log(typeof days); // -> object
console.log(typeof day); // -> string

console.log(days instanceof Array); // -> true
console.log(day instanceof Array); // -> false


let names1  = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names1.length); // -> 4

names1[5] = "Amelia";

console.log(names1);

console.log(names1.length); // -> 6

console.log(names1); // -> ["Olivia", "Emma", "Mateo", "Samuel", undefined, "Amelia"]
console.log(names1[3]); // -> Samuel
console.log(names1[4]); // -> undefined
console.log(names1[5]); // -> Amelia


//! Métodos

//?IndexOf
let names2 = ["Olivia", "Emma", "Mateo","Mateo", "Samuel"];
console.log(names2.indexOf("Mateo")); // -> 2
console.log(names2.indexOf("Victor")); // -> -1

//!PUSH
let names4 = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names4.length); // -> 4

names4.push("Amelia");
console.log(names4.length); // -> 5
console.log(names4); // - > ["Olivia", "Emma", "Mateo","Samuel", "Amelia"]

//! UNSHIFT
let names5 = ["Olivia", "Emma", "Mateo", "Samuel", "Mateo"];
console.log(names5);
console.log(names5.lastIndexOf("Mateo")); // -> 2
console.log(names5.indexOf("Victor")); // -> -1 -> No existe
names5.unshift("Amelia");
console.log(names5.indexOf("Amelia")); // -> 0
console.log(names5.length);
//!pop
let names6= ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names6.length); // -> 4

let name = names6.pop();
console.log(names6.length); // -> 3
console.log('name ',name); // -> Samuel
console.log('name6',names6); // -> ["Olivia", "Emma", "Mateo"]
//!shift
let names7 = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names7.length); // -> 4

let name2 = names7.shift();
console.log(names7.length); // -> 3
console.log(name2); // -> Olivia
console.log(names7); // -> ["Emma", "Mateo", "Samuel"]
//!reverse
let names3 = ["Olivia", "Emma", "Mateo", "Samuel"];

names3.reverse();
console.log(names3); // -> ["Samuel", "Mateo", "Emma", "Olivia"]
//!slice

let names8 = ["Olivia", "Emma", "Mateo", "Samuel"];

let n1 = names8.slice(2);
console.log(n1); // -> ["Mateo", "Samuel"]
console.log(names8);

let n2 = names8.slice(1,3);
console.log(n2); // -> ["Emma", "Mateo"]

let n3 = names8.slice(0, -2);
console.log(n3); // -> ["Olivia", "Emma", "Mateo"]

let n4 = names8.slice(-1);
console.log(n4); // -> ["Samuel"]

console.log(names8); // -> ["Olivia", "Emma", "Mateo","Samuel"]

//!CONCAT
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
let otherNames = ["William", "Jane"];
let allNames = names.concat( otherNames);

console.log(names); // -> ["Olivia", "Emma", "Mateo", "Samuel"]
console.log(otherNames); // -> ["William", "Jane"]
console.log(allNames); // -> ["Olivia", "Emma", "Mateo","Samuel", "William", "Jane"]
    


    



    





    














