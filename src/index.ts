import chalk from "chalk";
import fs from "fs";
import { Flow3Referral } from "./classes/flow3";
import { getRandomProxy, loadProxies } from "./classes/proxy";
import { logMessage, prompt, rl } from "./utils/logger";

async function main(): Promise<void> {
  console.log(
    chalk.cyan(`

    ██████╗ ██████╗  ██████╗    ██╗  ██╗██╗   ██╗██████╗ ███████╗
    ██╔══██╗██╔══██╗██╔════╝    ██║  ██║██║   ██║██╔══██╗██╔════╝
    ██████╔╝██████╔╝██║         ███████║██║   ██║██████╔╝███████╗
    ██╔══██╗██╔═══╝ ██║         ██╔══██║██║   ██║██╔══██╗╚════██║
    ██║  ██║██║     ╚██████╗    ██║  ██║╚██████╔╝██████╔╝███████║
    ╚═╝  ╚═╝╚═╝      ╚═════╝    ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝
                                                             

                   ${chalk.yellow("FLOW3 - REGISTRATION 📝")}                
     📢  ${chalk.blue("EDS LANG SAKALAM")}`)
  );

  console.log(
    chalk.yellow("\n════════════════════════════════════════════════════════")
  );
  console.log(chalk.white(`Started at: ${new Date().toLocaleString()}`));
  console.log(
    chalk.yellow("════════════════════════════════════════════════════════\n")
  );

  const refCode = await prompt(chalk.yellow("Enter Referral Code: "));
  const count = parseInt(await prompt(chalk.yellow("How many do you want? ")));
  const proxiesLoaded = loadProxies();
  if (!proxiesLoaded) {
    console.log(chalk.yellow("No proxy available. Using default IP."));
  }
  let successful = 0;
  const accountsFlow = fs.createWriteStream("accounts.txt", { flags: "a" });

  try {
    while (successful < count) {
      console.log(chalk.white("-".repeat(85)));
      const currentProxy = await getRandomProxy(successful + 1, count);
      const flow = new Flow3Referral(refCode, currentProxy, successful + 1, count);

      try {
        await flow.login();
        const wallet = flow.getWallet();
        logMessage(successful + 1, count, `Wallet Address: ${wallet.publicKey}`, "success");
        logMessage(successful + 1, count, `Private Key: ${wallet.secretKey}`, "success");
        accountsFlow.write(`Wallet Address : ${wallet.publicKey}\nPrivate Key : ${wallet.secretKey}\n`);
        accountsFlow.write(`===================================================================\n`);
        successful++;
      } catch (error) {
        logMessage(successful + 1, count, `Error: ${(error as Error).message}, retrying...`, "error");
      }
    }
  } finally {
    accountsFlow.end();
    console.log(chalk.magenta("\n[*] Done!"));
    rl.close();
  }
}

main().catch((err) => {
  console.error(chalk.red("Error occurred:"), err);
  process.exit(1);
});
