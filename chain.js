import { Block } from "./block.js";

export class Chain {
constructor() {
this.chain = []
}

async initialize() {
const genesis = new Block(0, new Date().toISOString(), "GenesisBlock", "");
genesis.hash = await genesis.calculateHash();
this.chain.push(genesis);
console.log("Genesis block skapat");
}

async addBlock(data) {
const prevBlock = this.chain[this.chain.length -1];
const newBlock = new Block(this.chain.length, new Date().toISOString(), data, prevBlock.hash )
newBlock.hash = await newBlock.calculateHash();
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