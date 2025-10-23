# Blockchain Demo

A simple, instructional project that demonstrates blockchain fundamentals using plain JavaScript in the browser. You can create blocks, inspect how they link together through hash values, and verify that the chain is still valid.

The first version, without mining, was coded live at Borås Tech Days 2025 in 45 minutes; the `mineBlock` logic was added afterward.

## Features
- Auto-generates a genesis block at startup.
- Lets you add new blocks with any data payload.
- Displays each block’s index, data, hash, and previous hash in the UI.
- Validates the chain by re-checking hashes and the links between blocks.

## Getting Started
1. Clone or download the project.
2. Open `index.html` in a modern browser (the project depends on `crypto.subtle` support).
3. Enter any text in the input field and click `Spara` to create a new block.
4. Use the `Validera` button to confirm that the chain is still intact.
5. Open the browser console to experiment further; the chain is exposed on `window.blockchain`, so you can run `blockchain.chain[1].data = "edit"` or remove a block with `blockchain.chain.splice(1, 1)` before validating to see how the integrity check reacts.

## Structure
- `index.html` – minimal UI for interacting with the chain.
- `block.js` – defines the `Block` class and hash calculation.
- `chain.js` – handles blockchain logic, initialization, and validation.
- `script.js` – wires the UI to the chain and renders blocks on the page.

## License
Distributed under the MIT License. You may use, modify, and distribute this project freely as long as the license notice is preserved.
