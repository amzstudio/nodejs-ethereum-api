# [Nodejs] WS Ethereum API

This is an NPM package that takes care of Signature Version 4 authentication
for websocket connections to Ethereum nodes on
[Amazon Managed Blockchain](https://aws.amazon.com/managed-blockchain/).

## Installing

Install and save as a dependency using NPM:
```
npm install @aws/web3-ws-provider --save 
npm install ws --save 
```

Prerequisite
```
export AWS_ACCESS_KEY_ID=...
export AWS_SECRET_ACCESS_KEY=...

export AWS_DEFAULT_REGION=ap-northeast-2
export AMB_HTTP_ENDPOINT=https://nd-zzz.ethereum.managedblockchain.ap-northeast-2.amazonaws.com
export AMB_WS_ENDPOINT=wss://nd-zzz.wss.ethereum.managedblockchain.ap-northeast-2.amazonaws.com
```

Run
```
node main.js
```


## Reference 
Using the Ethereum JSON-RPC API with Amazon Managed Blockchain
https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/ethereum-json-rpc.html
