import { XuiApi } from '../src'
const xui = new XuiApi('http://login:pass@ip:port/path')

xui.debug = true
// const health = await Promise.race([
//   xui.checkHealth(),  // No await here
//   new Promise(resolve => setTimeout(() => resolve(null), 3000))  // No await here
// ]);
const health = await xui.getClientById('4GIQE3BS',1000)
console.log(health)
