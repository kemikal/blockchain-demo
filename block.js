export class Block {
constructor(index, timestamp, data, previousHash) {
this.index = index;
this.timestamp = timestamp;
this.data = data;
this.previousHash = previousHash;
this.hash = "";
this.nonce = 0;
}

async calculateHash() {
const encoder = new TextEncoder();
const input = encoder.encode(
this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce
)
const hashBuffer = await crypto.subtle.digest("SHA-256", input);
const hashArray = Array.from(new Uint8Array(hashBuffer))
return hashArray.map(b => b.toString(16).padEnd(2, "0")).join("");

}
}