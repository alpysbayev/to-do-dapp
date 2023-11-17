# to-do-dapp

This is a simple To-Do project, that can add task, mark tasks, and check history of user's tasks.

Technologies that was used in this project:
* backend, smart contract: Solidity, hardhat, ethers.js
* frontend: React.js

##  How to Install and Run the Project

1. Create .env with following variables
```
    NETWORK=(which network).
    INFURA_URL="https://sepolia.infura.io/v3/(YOUR-API-KEY)".
    PRIVATE_KEY=(PRIVATE KEY OF YOUR METAMASK ACCOUNT).
    ETHERSCAN_API=(API that you can get from etherscan.io).
    OWNER=(YOUR METAMASK WALLET HASH).
```

2. Install dependencies
```zsh
npm i
```
3. Compile contract using
```zsh
npx hardhat compile
```
4. Deploy hardhat to blockchain
```zsh
npx hardhat run --network sepolia scripts/deploy.js
```
5. Verify contract
```zsh
npx hardhat verify --network sepolia {your contract address} 
```
6. Run server
```zsh
npm start
```

Don't forget to add your contract address to contractAddress variable in __Form.js__ and **HistoryPage.js**
