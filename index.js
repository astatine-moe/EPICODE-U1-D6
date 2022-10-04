let firstName = `Morgan`,
    middleName = ``,
    lastName = `Evans`;

let age = 23,
    currentYear = new Date().getFullYear();

let birthYear = currentYear - age;

const homework = () => {
    console.log(
        `Hello, my name is ${firstName}${
            middleName ? ` ${middleName} ` : " " //if middleName exists, output it, else ignore it
        }${lastName}.`
    );
    console.log(`I was born in ${birthYear}.`);
};

if (typeof window === "undefined") {
    //if running in node
    homework();
}
