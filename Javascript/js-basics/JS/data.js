/*
// arrays

// data type
const box0 = '"lang" tekst'; //string
const box1 = "dette er en string";
const box2 = `en tekst $(box0)`;
console.log(box2);

const age = 34; // nummer

const isLogIn = true // false, boolean

let firstName;
console.log(firstName); //undefined

let secondName = null;
console.log(secondName);

// arrays
const names = [
    'Thomas', 
    'Lise', 
    'Maria', 
    'Mario', 
    'Tom',
    true,
    76,
    [
        'football',
        'swimming'
    ]
];
// names.push('Eivind');
// names.pop();
// names.reverse();
// console.log(names.slice(1, 3));
console.log(names.length);
console.log(names);
console.log(names[6]);
console.log(names.includes('Paula'));

//_______________________________//
// OBJECTS //

const person = {
    firstName: 'Thomas',
    lastName: 'Johansen',
    age: 23,
    hobbies:['sport', 'gaming,', 'travel'], // en array inne i object
    gender: 'male',
    isWorking: true
}

console.log(person.firstName);
person.firstName = 'Harry';  // endrer navn i const
person.age = 28; // endrer alder i const
console.log(person);

const persons = [
    {
        firstName: 'Mario',
        age: 12,
        hobbies: ['gaming', 'tiktok', 'sport']
    },
    {
        firstName: 'Ada',
        age: 15,
        hobbies: ['volleyball', 'ski']
    },
    {
        firstName: 'Tom',
        age: 13,
        hobbies: ['gaming', 'chess']
    }
]
console.log(persons);
// console.log(persons[1].hobbies[0]);
console.log(`Ada main hobby is: ${persons[1].hobbies[0]}`);
console.log(persons[0].hobbies[1]);
*/

// lage en ansattliste
// navn
// alder
// fødselsdato
// addresse
// nasjonalitet
// email
// avdeling

const employees = [
    {
        person: {
            firstName: 'Lisa',
            lastName: 'Andersson',
            age: 32,
            dob: 1991-06-07,
            nat: 'SWE'
        },
        adress: {
            street: 'Vegenveien 2',
            areaCode: 3333,
            city: 'Oslo'
        },
        contact: {
            email: 'lisa@mail.com',
            phone: '123456789',
        },
        department: [
            'sales', 'shipping'
        ]
    },

    {
        person: {
            firstName: 'Magnus',
            lastName: 'Karlsen',
            age: 29,
            dob: 1994-03-28,
            nat: 'NOR'
        },
        adress: {
            street: 'Vegveien 9',
            areaCode: 4444,
            city: 'Oslo'
        },
        contact: {
            email: 'magnus@mail.com',
            phone: 987654321
        },
        department: [
            'HR', 'salary'
        ]
    },

    {
        person: {
            firstName: 'Daniel',
            lastName: 'Danielson',
            age: 30,
            dob: 1993-10-19,
            nat: 'NOR'
        },
        adress: {
            street: 'Uppnedveien 70',
            areaCode: 6666,
            city: 'Oslo'
        },
        contact: {
            email: 'daniel@mail.com',
            phone: 10101010
        },
        department: [
            'sales', 'marketing'
        ]
    },

    {
        person: {
            firstName: 'Johanna',
            lastName: 'Johansen',
            age: 35,
            dob: 1988-08-03,
            nat: 'NOR'
        },
        adress: {
            street: 'Frampåveien 10',
            areaCode: 1010,
            city: 'Oslo'
        },
        contact: {
            email: 'johanna@mail.com',
            phone: 12121212
        },
        department: [
            'social media'
        ]
    },

    {
        person: {
            firstName: 'Lina',
            lastName: 'Pålsen',
            age: 34,
            dob: 1989-05-09,
            nat: 'NOR'
        },
        adress: {
            street: 'Himmelveien 124',
            areaCode: 9999,
            city: 'Oslo'
        },
        contact: {
            email: 'lina@mail.com',
            phone: 89898989
        },
        department: [
            'CEO'
        ]
    }
    
]

const bodyElement = document.querySelector('body');
const ulElement = document.createElement('ul');

employees.forEach(employee => {
    //console.log(employee.person.firstName);
    const liElement = document.createElement('li');
    //liElement.textContent = employee.person.firstName;
    liElement.textContent = `
    ${employee.person.firstName}
    ${employee.person.lastName}
    (${employee.department[0]} ${employee.contact.email})
    `;
    ulElement.appendChild(liElement);
});

bodyElement.appendChild(ulElement);
//console.log(employees.person[0].department[0]);

// map
const employeeContacts = employees.map(person => {
    return {
        contact: person.contact
    }
});

console.log(employeeContacts);

// filter
const nationalityEmployees = employees.filter(person => {
    return person.nat === 'Nor';
});

console.log(nationalityEmployees);




