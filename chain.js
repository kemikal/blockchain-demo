import { Block } from "./block.js";

export class Chain {
constructor() {
this.chain = []
}

async initialize() {
const genesis = new Block(0, new Date().toISOString(), "GenesisBlock", "");
// USE MINE BLOCK NOW, NOT CALCULATEHASH
genesis.hash = await genesis.mineBlock();
this.chain.push(genesis);
console.log("Genesis block skapat");
}

async addBlock(data) {
const prevBlock = this.chain[this.chain.length -1];
const newBlock = new Block(this.chain.length, new Date().toISOString(), data, prevBlock.hash )
// USE MINE BLOCK NOW, NOT CALCULATEHASH
newBlock.hash = await newBlock.mineBlock();
this.chain.push(newBlock);
console.log("new block skapad", newBlock);

}

async isValid() {
for (let i = 1; i < this.chain.length; i++) {
const current = this.chain[i];
const previous = this.chain[i-1];

// KOLLA HASH
const recalculateHash = await current.calculateHash();
if (this.chain[i].hash !== recalculateHash) return false;

// KOLLA KEDJAN
if (current.previousHash !== previous.hash) return false;
}
return true;
}
}