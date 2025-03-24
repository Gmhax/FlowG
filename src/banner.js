import chalk from "chalk";

export default function displayBanner() {
  console.log(
    chalk.cyan(`

		██╗  ██╗ █████╗ ██╗     ██╗
                ██║  ██║██╔══██╗ ██║   ██╔╝
                ███████║███████║    ███╔╝ 
		██╔══██║██╔══██║  ██╔═ ██╗ 
		██║  ██║██║  ██║ ██║    ██╗
		╚═╝  ╚═╝╚═╝  ╚═╝ ╚═╝    ╚═╝
                                                             

                   ${chalk.yellow("FLOWG UNLI REF 📝")}                
     📢  ${chalk.blue("EDS LANG SAKALAM")}`)
  );

  console.log(
    chalk.yellow("\n════════════════════════════════════════════════════════")
  );
  console.log(chalk.white(`Started at: ${new Date().toLocaleString()}`));
  console.log(
    chalk.yellow("════════════════════════════════════════════════════════\n")
  );
}
