// import { ReadLine } from "readline/promises"
import { URL } from "url"

const web = new URL("https://www.tribagus.xyz/belajar/one?kelas=nodejs")

web.host = "www.tribagus.com"
web.searchParams.append("status", "premium")

console.info(web.toString())
console.info(web.href)
console.info(web.protocol)
console.info(web.pathname)
console.info(web.host)
console.info(web.searchParams)
