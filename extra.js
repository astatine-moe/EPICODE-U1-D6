const type = "grams";

const gramsPerYolk = 18;

let spaghetti = 400,
    guanciale = 250,
    eggYolks = 6,
    pecorinoRomano = 50,
    blackPepper = 4;

const yolkWeight = eggYolks * gramsPerYolk;
const eggAndPercorinoWeight = yolkWeight + pecorinoRomano;

const homeworkExtra = () => {
    //cutting guanciale
    console.log(
        `Cut up ${guanciale} ${type} Guanciale into 1cm layers, and then into long trips`
    );

    //add yolk to cheese
    console.log(
        `Combine ${eggYolks} egg yolks and ${pecorinoRomano} grams of pecorino romano together yields ${eggAndPercorinoWeight} ${type}.`
    );

    //roast raw black pepper
    console.log(
        `Roast the ${blackPepper} ${type} of raw black pepper on a pan`
    );

    //combine some black pepper and leave some aside
    const oneFourthBlackPepper = blackPepper / 4;
    console.log(
        `Combine ${oneFourthBlackPepper} ${type} of black pepper with the egg and cheese mixture`
    );

    console.log(`Browning the ${guanciale} ${type} of guanciale in a pan`);

    //water weight soaked into spaghetti
    const waterWeight = spaghetti * 1.5;
    console.log(`Boil the ${spaghetti} ${type} of spaghetti in a pot `);

    console.log(
        `Spaghetti is now ${waterWeight} ${type} after cooking in water till al dente`
    );

    console.log(`Set aside a ladeful of pasta water before draining`);

    console.log(
        `Pour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guaciale and turn on the heat`
    );

    console.log(
        `This will create a creamy sauce with pasta starch contained in that water`
    );

    const cheeseYolkAndPasta = eggAndPercorinoWeight + waterWeight;

    console.log(
        `Add the yolk and cheese mixture (${eggAndPercorinoWeight} ${type}), stirring rapidly. In a warm pan with the hot pasta, the eggs will cook gently and become creamy`
    );

    console.log(
        `Do this step quickly to avoid the yolks from congealing and becoming similar to scrambled eggs`
    );

    const mixtureWithBlackPepper =
        cheeseYolkAndPasta + oneFourthBlackPepper * 3;

    console.log(
        `Add the remaining black pepper (${
            oneFourthBlackPepper * 3
        } ${type}) and stir\n`
    );

    const carbonara = mixtureWithBlackPepper;

    console.log(`Carbonara: ${carbonara} ${type}`);
};

if (typeof window === "undefined") {
    //if running in node
    homeworkExtra();
}
