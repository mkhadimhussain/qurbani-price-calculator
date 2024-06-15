#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.bgBlueBright.bold("                   WELCOME TO                  "));
console.log(chalk.bgBlueBright.bold("            Qurbani Price Calculator           "));

console.log();
console.log("      ",chalk.bgMagenta.bold("Goat"), chalk.bgGreen.bold("Sheep"), chalk.bgMagentaBright.bold("Cow"),
chalk.bgRedBright.bold("Buffalo") ,chalk.bgYellow.bold("Camel"));


let condition: boolean = true;
while(condition) {

    let selectdQurbani = await inquirer.prompt([
        {
            name: "qurbani",
            message: chalk.bgBlue("\nSelect your Qurbani Animal"),
            type: "list",
            choices: ["Goat", "Sheep", "Cow", "Buffalo", "Camel"]
        }
    ])
    
    if (selectdQurbani.qurbani === "Goat") {
        console.log("\n", chalk.bgMagenta.bold(selectdQurbani.qurbani));
        
        let goatPrice = await inquirer.prompt(
            [
                // Goat 1Kg Price
                {
                    name: "goat1Kg",
                    message: chalk.bgGray("\nWhat is the Price for 1Kg of Goat?"),
                    type: "input",
                    validate: (input) => {
                        // Convert the input to a number
                        const numberInput = Number(input);

                        // Check if the converted input is not a number (NaN) or if it is zero or less then zero
                        if (isNaN(input) || numberInput <= 0) {
                            // If the input is invalid, return an error message
                            return chalk.bgRed("Goat Price must be a number and cannot be zero or negative");
                        }
                        // If the input is valid, return true to indicate validation passed
                        return true;
                    },
                },
                // Weight of a Goat
                {
                    name: "goatWeight",
                    message: chalk.bgGray("\nEnter the whole weight of your Goat in Kg:"),
                    type: "input",
                    validate: (input) => {
                        const numberInput1 = Number(input);
                        if (isNaN(input) || numberInput1 <= 0 || numberInput1 > 50) {
                            return chalk.bgRed("Invalid Weight");
                        }
                        return true;
                    },
                },
            ]
        );
    
        const calculatedGoatPrice = goatPrice.goat1Kg * goatPrice.goatWeight;
        console.log(chalk.bgGreen.bold.underline(`\nYour ${goatPrice.goatWeight}Kg Goat Price is: Rs.${calculatedGoatPrice}`));
    
    } else if (selectdQurbani.qurbani === "Sheep") {
        console.log("\n", chalk.bgGreen.bold(selectdQurbani.qurbani));
        
        let sheepPrice = await inquirer.prompt(
            [
                // Sheep 1kg Price
                {
                    name: "sheep1Kg",
                    message: chalk.bgGray("\nWhat is the Price for 1Kg of Sheep?"),
                    type: "input",
                    validate: (input) => {
                        const numberInput2 = Number(input);
                        if (isNaN(input) || numberInput2 <= 0) {
                            return chalk.bgRed("Sheep Price must be a number and cannot be zero or negative");
                        }
                        return true;
                    },
                },
                // Weight of a Sheep
                {
                    name: "sheepWeight",
                    message: chalk.bgGray("\nEnter the whole weight of your Sheep in Kg:"),
                    type: "input",
                    validate: (input) => {
                        const numberInput3 = Number(input);
                        if (isNaN(input) || numberInput3 <= 0 || numberInput3 > 50) {
                            return chalk.bgRed("Invalid Weight");
                        }
                        return true;
                    },
                },
            ]
        );
        const calculatedSheepPrice = sheepPrice.sheep1Kg * sheepPrice.sheepWeight;
        console.log(chalk.bgGreen.bold.underline(`\nYour ${sheepPrice.sheepWeight}Kg Sheep Price is: Rs.${calculatedSheepPrice}`));
    
    } else if (selectdQurbani.qurbani === "Cow") {
        console.log("\n", chalk.bgMagentaBright.bold(selectdQurbani.qurbani));
    
        let cowPrice = await inquirer.prompt(
            [
                // Cow 1Kg Price
                {
                    name: "cow1Kg",
                    message: chalk.bgGray("\nWhat is the Price for 1Kg of Cow?"),
                    type: "input",
                    validate: (input) => {
                        const numberInput4 = Number(input);
                        if (isNaN(input) || numberInput4 <= 0) {
                            return chalk.bgRed("Cow Price must be a number and cannot be zero or negative");
                        }
                        return true;
                    },
                },
                // Weight of a Cow
                {
                    name: "cowWeight",
                    message: chalk.bgGray("\nEnter the whole weight of your Cow in Kg:"),
                    type: "input",
                    validate: (input) => {
                        const numberInput5 = Number(input);
                        if (isNaN(input) || numberInput5 <= 0 || numberInput5 > 300) {
                            return chalk.bgRed("Invalid Weight");
                        }
                        return true;
                    },
                },
            ]
        );
    
        const calculatedCowPrice = cowPrice.cow1Kg * cowPrice.cowWeight;
        console.log(chalk.bgGreen.bold.underline(`\nYour ${cowPrice.cowWeight}Kg Cow Price is: Rs.${calculatedCowPrice}`));
    
    } else if (selectdQurbani.qurbani === "Buffalo") {
        console.log("\n", chalk.bgRedBright.bold(selectdQurbani.qurbani));
        
        let buffaloPrice = await inquirer.prompt(
            [
                // Buffalo 1Kg Price
                {
                    name: "buffalo1Kg",
                    message: chalk.bgGray("\nWhat is the Price for 1Kg of Buffalo?"),
                    type: "input",
                    validate: (input) => {
                        const numberInput6 = Number(input);
                        if (isNaN(input) || numberInput6 <= 0) {
                            return chalk.bgRed("Buffalo Price must be a number and cannot be zero or negative");
                        }
                        return true;
                    },
                },
                // Weight of a Buffalo
                {
                    name: "buffaloWeight",
                    message: chalk.bgGray("\nEnter the whole weight of your Buffalo in Kg:"),
                    type: "input",
                    validate: (input) => {
                        const numberInput7 = Number(input);
                        if (isNaN(input) || numberInput7 <= 0 || numberInput7 > 300) {
                            return chalk.bgRed("Invalid Weight");
                        }
                        return true;
                    },
                },
            ]
        );
    
        const calculatedBuffaloPrice = buffaloPrice.buffalo1Kg * buffaloPrice.buffaloWeight;
        console.log(chalk.bgGreen.bold.underline(`\nYour ${buffaloPrice.buffaloWeight}Kg Buffalo Price is: Rs.${calculatedBuffaloPrice}`));
    
    } else if (selectdQurbani.qurbani === "Camel") {
        console.log("\n", chalk.bgYellow.bold(selectdQurbani.qurbani));
        
        let camelPrice = await inquirer.prompt(
            [
                // Camel 1Kg Price
                {
                    name: "camel1Kg",
                    message: chalk.bgGray("\nWhat is the Price for 1Kg of Camel?"),
                    type: "input",
                    validate: (input) => {
                        const numberInput8 = Number(input);
                        if (isNaN(input) || numberInput8 <= 0) {
                            return chalk.bgRed("Camel Price must be a number and cannot be zero or negative");
                        }
                        return true;
                    },
                },
                // Weight of a Camel
                {
                    name: "camelWeight",
                    message: chalk.bgGray("\nEnter the whole weight of your Camel in Kg:"),
                    type: "input",
                    validate: (input) => {
                        const numberInput9 = Number(input);
                        if (isNaN(input) || numberInput9 <= 0 || numberInput9 > 400) {
                            return chalk.bgRed("Invalid Weight");
                        }
                        return true;
                    },
                },
            ]
        );
        const calculatedCamelPrice = camelPrice.camel1Kg * camelPrice.camelWeight;
        console.log(chalk.bgGreen.bold.underline(`\nYour ${camelPrice.camelWeight}Kg Camel Price is: Rs.${calculatedCamelPrice}`));
    
    } else {
        console.log(chalk.bgRed("Invalid Selection"));
    };

    let wantExit = await inquirer.prompt(
        [
            {
                name: "exit",
                message: chalk.bgYellow("\nAre you want to Calculate more Prices of Qurbani Animals?"),
                type: "confirm",
                default: "false",
            },
        ]
    );

    // Loop condition
    condition = wantExit.exit;
} // While Loop ends here

console.log(chalk.bgRed.bold("\nExit"));
