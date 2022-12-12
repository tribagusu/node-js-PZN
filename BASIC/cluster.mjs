import cluster from "cluster"
import os from "os"
import process from "process"
import http from "http"

if (cluster.isPrimary) {
  console.info(`primary ${process.pid}`)
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork()
  }
  cluster.addListener("exit", (worker) => {
    console.info(`worker-${worker.id} is exit`)
    cluster.fork()
  })
}

if (cluster.isWorker) {
  console.info(`worker ${process.pid}`)

  const server = http.createServer((request, response) => {
    response.write(`response from process ${process.pid}`)
    response.end()
    process.exit()
  })

  // server.listen(3000)
}
