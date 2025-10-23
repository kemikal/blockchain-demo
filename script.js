import { Chain } from "./chain.js";

const kedja = document.getElementById("kedja");
const newBlock = document.getElementById("newBlock");
const newBlockBtn = document.getElementById("newBlockBtn");
const validate = document.getElementById("validate")

const blockchain = new Chain();
window.blockchain = blockchain;

async function renderChain() {
kedja.innerHTML = "";

blockchain.chain.forEach(block => {
    console.log("block", block);
    let div = document.createElement("div");
    div.innerHTML = block.index + "<br>" + block.data + "<br>" + block.hash + "<br>" + block.previousHash + "<hr>"
    kedja.appendChild(div);
    
});
}

async function init() {
await blockchain.initialize();
await renderChain();
}

init();

newBlockBtn.addEventListener("click", async () => {
const data = newBlock.value;
blockchain.addBlock(data);
await renderChain();
})

validate.addEventListener("click", async () => {
const isValid = await blockchain.isValid();

if (isValid) {
console.log("OK");

} else {
console.log("INTE OK");
document.body.style.backgroundColor = "red"
}

})