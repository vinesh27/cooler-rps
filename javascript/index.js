#!/usr/bin/env node
import boxen from "boxen";
import chalk from "chalk";
import clear from "clear";
import inquirer from "inquirer";
import open from "open";

const random = Math.floor(Math.random() * 3);
const choices = ["Rock", "Paper", "Scissors", "Quit", "About the author"];

// Clear the console
clear();

function aboutMe() {
  const generate = (text) => {
    const theme = {
      colors: [
        "#FFFFFF",
        "#7285B7",
        "#FF9DA4",
        "#FFC58F",
        "#FFEEAD",
        "#D1F1A9",
        "#99FFFF",
        "#BBDAFF",
        "#EBBBFF",
        "#718c00",
        "#c82829",
        "#3e999f",
        "#6796e6",
        "#cd9731",
        "#f44747",
        "#b267e6",
      ],
      background: "#002451",
      foreground: "#ffffff",
    };

    let horizontalLayout = "default";
    let verticalLayout = "default";
    let font = "ANSI Shadow";

    let coloredData = "";
    let colorsIndex = 0;
    let data;

    try {
      data = figlet.textSync(text, {
        font: font,
        horizontalLayout: horizontalLayout,
        verticalLayout: verticalLayout,
      });
    } catch (error) {
      return error;
    }
    for (let i = 0; i < data.length; i++) {
      let character = data.charAt(i);
      if (character !== "_") {
        if (
          data.charAt(i - 1) === "_" ||
          data.charAt(i - 1) === " " ||
          data.charAt(i - 1) === "."
        ) {
          colorsIndex++;
          if (colorsIndex >= theme.colors.length) colorsIndex = 0;
        }
        coloredData += chalk
          .hex(theme.colors[colorsIndex])
          .bgHex(theme.background)(data.charAt(i));
      } else {
        coloredData += chalk.hex(theme.foreground).bgHex(theme.background)(
          data.charAt(i)
        );
      }
    }
    return coloredData;
  };

  let name;
  if (process.stdout.columns >= 95) {
    name = chalk.bold(generate("                   Vinesh Rajpurohit ⬢"));
  } else {
    name = chalk.bold.cyanBright("                   Vinesh Rajpurohit ⬢");
  }

  const data = {
    name: name,
    handle: chalk.white("@vinesh27"),
    title: chalk.hex("#6495ED")("Java and JavaScript Dev"),
    fact: chalk.hex("#00FFFF")(
      "I love to work, and I like to contribute to open source!"
    ),
    email: chalk.hex("#5887FF")("mailto:vinitrajpurohit00@gmail.com"),
    discord: chalk.hex("#44BBA4")(
      "https://discord.com/users/547025590587359233"
    ),
    twitter: chalk.hex("#55C1FF")("https://twitter.com/vineshCodes"),
    github: chalk.hex("#E3DAFF")("https://github.com/vinesh27"),
    website: chalk.hex("#9FFFCB")("https://vinesh.codes [WIP]"),
    npx: chalk.hex("#06D6A0")("npx vinesh"),

    labelTitle: chalk.hex("#6a8ed2").bold("       Title:"),
    labelFact: chalk.hex("#2bfbaa").bold("    Fun Fact:"),
    labelEmail: chalk.hex("#12c2e9").bold("       Email:"),
    labelTwitter: chalk.hex("#28DCD4").bold("     Twitter:"),
    labelGitHub: chalk.hex("#C0BABC").bold("      GitHub:"),
    labelDiscord: chalk.hex("#7AE582").bold("     Discord:"),
    labelHashnode: chalk.hex("#A959FF").bold("    Hashnode:"),
    labelLinkedin: chalk.hex("#F8C537").bold("    Linkedin:"),
    labelWebsite: chalk.hex("#59FFC8").bold("     Website:"),
    labelCard: chalk.hex("#76e600").bold("        Card:"),
  };

  const me = boxen(
    [
      `${data.name}`,
      ``,
      `${data.labelTitle}  ${data.title}`,
      ``,
      `${data.labelFact}  ${data.fact}`,
      ``,
      `${data.labelEmail}  ${data.email}`,
      `${data.labelTwitter}  ${data.twitter}`,
      `${data.labelGitHub}  ${data.github}`,
      `${data.labelDiscord}  ${data.discord} || vN1t#4632`,
      `${data.labelWebsite}  ${data.website}`,
      `${data.labelCard}  ${data.npx}`,
      ``,
      `${chalk.bold("Hi there! I'm Vinesh 👨‍💻. I'm a Full Stack")}`,
      `${chalk.bold(
        "Web Developer 🌐 and a Homosapien 👨 (Shoutout to all my homosapien "
      )}`,
      `${chalk.bold(
        "friends) from India 🌏. I love to explore, learn, innovate and "
      )}`,
      `${chalk.bold(
        "build stuff! Feel free to toss me an email mail 📩, Twitter 🐦 DM or Discord 😃 DM"
      )}`,
      `${chalk.bold("if you want to get in touch or collab!")}`,
    ].join("\n"),
    {
      margin: 1,
      padding: 1,
      float: "center",
      borderStyle: "bold",
      borderColor: "blue",
    }
  );

  // Show the boxen
  console.log(me);

  // Show the tips
  const tip = [
    `Tip: ${chalk.cyanBright.bold(
      "cmd/ctrl + click"
    )} on the links above to open them in your broswer.`,
    "",
  ];

  console.log(tip.join("\n"));

  const prompt = inquirer.createPromptModule();

  const questions = [
    {
      type: "list",
      name: "action",
      message: "What do you want to do?",
      choices: [
        {
          name: `Toss me an ${chalk.blueBright.bold("email")}? 📩`,
          value: () => {
            open("mailto:vinitrajpurohit00@gmail.com");
            console.log(
              "Looking forward to hearing your message and replying to you!\n"
            );
          },
        },
        {
          name: `Visit my ${chalk.cyanBright.bold("site")}? [WIP] 🚀`,
          value: () => {
            open("https://vinesh.codes");
            console.log("Thanks for the visit to my site!\n");
          },
        },
        {
          name: "Exit 👋",
          value: () => {
            console.log("👋 Bye\n");
          },
        },
      ],
    },
  ];

  prompt(questions).then((answer) => answer.action());
}

function calculateWin(option) {
  switch (option) {
    case "Rock":
      if (random === 0) return "Tie";
      if (random === 1) return "Lose";
      if (random === 2) return "Win";
      break;
    case "Paper":
      if (random === 0) return "Win";
      if (random === 1) return "Tie";
      if (random === 2) return "Lose";
      break;
    case "Scissors":
      if (random === 0) return "Lose";
      if (random === 1) return "Win";
      if (random === 2) return "Tie";
      break;
    case "Quit":
      return "Quit";
    case "About the author":
      return "About";
  }
}

function play() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "name",
        message: "Select your move:",
        choices,
      },
    ])
    .then((answers) => {
      let result = calculateWin(answers.name);

      if (result === "Quit") {
        shouldContinue = false;
        console.log("\n👋 Bye!\n");
      } else if (result === "About") {
        aboutMe();
      } else {
        console.log(
          `You chose ${answers.name} and computer chose ${choices[random]}.\n`
        );
        console.log(`You ${result}!\n`);
        inquirer
          .prompt([
            {
              type: "confirm",
              name: "continue",
              message: "Do you want to play again?",
              default: true,
            },
          ])
          .then((answers) => {
            if (answers.continue) play();
            else console.log("\n👋 Bye!\n");
          });
      }
    });
}

play();
