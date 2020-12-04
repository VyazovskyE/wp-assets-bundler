import '../styles/main.scss'

import test from './components/export'

console.log('Hello >>>')
test.log()

async function getAsyncComponent () {
  const { default: comp } = await import('./components/acync-script')
  comp('async log')
}

setTimeout(getAsyncComponent, 3000)
