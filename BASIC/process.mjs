import process, { exitCode } from "process"

process.addListener("exit", (exitCode) => {
  console.info(`NodeJS exit with code ${exitCode}`)
})

console.info(process.report)
