# Blockchain Demo

Ett enkelt, pedagogiskt projekt som demonstrerar grunderna i en blockkedja med hjälp av ren JavaScript i webbläsaren. Här kan du skapa block, se hur de länkas samman via hashvärden och kontrollera om kedjan fortfarande är giltig.

## Funktioner
- Skapar automatiskt ett genesis-block vid start.
- Låter dig lägga till nya block med valfritt datafält.
- Visar varje blocks index, data, hash och föregående hash i gränssnittet.
- Validerar kedjan genom att verifiera hashvärden och länkarna mellan blocken.

## Kom igång
1. Klona eller ladda ned projektet.
2. Öppna `index.html` i en modern webbläsare (projektet kräver stöd för `crypto.subtle`).
3. Ange valfri text i fältet och klicka på `Spara` för att lägga till ett nytt block.
4. Använd knappen `Validera` för att kontrollera att kedjan är intakt.
5. Öppna webbläsarens konsol för att experimentera vidare; kedjan exponeras på `window.blockchain`, så du kan t.ex. köra `blockchain.chain[1].data = "edit"` eller ta bort ett block med `blockchain.chain.splice(1,1)` innan du validerar för att se hur integritetskontrollen reagerar.

## Struktur
- `index.html` – enkelt gränssnitt för att interagera med kedjan.
- `block.js` – definierar `Block`-klassen och hashberäkningen.
- `chain.js` – hanterar blockkedjans logik, initiering och validering.
- `script.js` – kopplar UI:t till kedjan och renderar blocken på sidan.

## Licens
Distribueras under MIT-licensen. Du får fritt använda, modifiera och distribuera projektet så länge licensinformationen inkluderas.
