import arg from 'arg';
import inquirer from 'inquirer';


// Take raw arguments and make them more accessible:
function parseArgumentsIntoOptions(rawArgs) {

    // Arguments:
    const args = arg(
        {

            '--install': Boolean,
            '-i': '--install',

        },
        {
            argv: rawArgs.slice(2),
        }
    );

    // Return options:
    return {

        template: args._[0] || false,
        runInstall: args['--install'] || false,

    };

};


// Make user select missing options:
async function promptForMissingOptions(options) {


    // Define questions:
    const questions = [];


    // Selection template:
    if (!options.template) {

        questions.push({

            type: 'list',
            name: 'template',
            message: 'Please input the number of the script you want to run.',
            choices: ['01', '02', '03', '04', '05'],

        });

    };


    // Select program to run:
    const answers = await inquirer.prompt(questions);
    return {

        ...options,
        template: options.template || answers.template

    }

};

export async function cli(args) {

    // Make arguments readable:
    let options = parseArgumentsIntoOptions(args);

    // Make the user select missing options:
    options = await promptForMissingOptions(options);

}