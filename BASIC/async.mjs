function samplePromise() {
  return Promise.resolve("Tama")
}

const name = await samplePromise()
console.info(name)
