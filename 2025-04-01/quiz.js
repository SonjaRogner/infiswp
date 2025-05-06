const decoder = new TextDecoder("utf-8");
const data = Deno.readFileSync("fragen.json");
const jsonString = decoder.decode(data);
const jsonData = JSON.parse(jsonString);
console.log(jsonData[0]);

jsonData.forEach(() => {

    console.log(_.frage);
});

console.log(`Es gibt ${jsonData.length} Fragen.`);

document.getElementById("nächsteFrage").addEventListener("click", () => { 
    document.getElementById("frage").innerHTML = fragenArray[0].frage;
});