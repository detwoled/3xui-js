import { XuiApi } from '../src'
const xui = new XuiApi('http://admin:admin@37.252.21.196:15243/qjSU7BO6SwwGsVmn4s')
xui.debug = true


const client = await xui.updateClient('5c34ad5d-15c0-480b-9c12-371def9ae7e5', {totalGB: 152000})
console.log(client)
