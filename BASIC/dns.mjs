import dns from "dns/promises"

const address = await dns.lookup("www.tribagus.xyz")
console.info(address.address)
console.info(address.family)
