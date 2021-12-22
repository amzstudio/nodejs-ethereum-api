const AWS = require('aws-sdk');
const WebSocket = require('ws')
const region = 'ap-northeast-2';
const host = 'nd-loxtadwh7fhc5gwrsk3d3itmqq.wss.ethereum.managedblockchain.ap-northeast-2.amazonaws.com';
const payload = {
  jsonrpc: '2.0',
  method: 'eth_subscribe',
  params: ["newHeads"],
  id: 67
}
const credentials = new AWS.EnvironmentCredentials('AWS');
const endpoint = new AWS.Endpoint(`https://${host}`);
const request = new AWS.HttpRequest(endpoint, region);
request.method = 'GET';
request.body = '';
request.headers['host'] = host;

console.log(request)
const signer = new AWS.Signers.V4(request, 'managedblockchain');
signer.addAuthorization(credentials, new Date());
console.log(request)
const ws = new WebSocket(`wss://${host}`, {headers: request.headers});
ws.onopen = async () => {
  ws.send(JSON.stringify(payload));
  console.log('Sent request');
}
ws.onerror = (error) => {
  console.error(`WebSocket error: ${error.message}`)
}
ws.onmessage = (e) => {
  console.log(e.data)
}