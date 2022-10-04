let firstName = `Morgan`,
    lastName = `Evans`;

let age = 23,
    currentYear = new Date().getFullYear();

let birthYear = currentYear - age;

const homework = () => {
    console.log(`Hello, my name is ${firstName} ${lastName}.`);
    console.log(`I was born in ${birthYear}.`);
};

if (typeof window === "undefined") {
    //if running in node
    homework();
}
