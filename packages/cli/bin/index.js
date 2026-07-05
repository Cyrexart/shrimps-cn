#!/usr/bin/env node
import { program } from "commander";
import chalk from "chalk";
import { fetchGlobals } from "../src/fetch.js";
import { writeGlobals } from "../src/write.js";
import { addComponent, detectPackageManager } from "../src/add.js";

program
  .name("shrimps")
  .description("Shrimps component library CLI")
  .version("0.1.0");

program
  .command("add <component>")
  .description("Add a component to your project")
  .action(async (component) => {
    try {
      const pm = detectPackageManager();
      console.log(chalk.cyan(`Adding ${component}...`));
      const paths = await addComponent(component, pm);
      paths.forEach((p) => console.log(chalk.green(`✓ ${component} → ${p}`)));
    } catch (err) {
      console.error(chalk.red(`✗ ${err.message}`));
      process.exit(1);
    }
  });

program
  .command("init")
  .description("Set up globals.css")
  .action(async () => {
    try {
      console.log(chalk.cyan("Fetching globals.css..."));
      const content = await fetchGlobals();
      const filePath = await writeGlobals(content);
      console.log(chalk.green(`✓ globals.css → ${filePath}`));
    } catch (err) {
      console.error(chalk.red(`✗ ${err.message}`));
      process.exit(1);
    }
  });

program.parse();
