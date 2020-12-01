console.log('Hello >>>')

async function test () {
  const res = await fetch('/')
  return await res.json()
}

test().then(console.log)