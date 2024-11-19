// Define the file path
const fileLocation = './nmap-datenfiles';
try {
    const dirEntries = await Deno.readDir(fileLocation);
    for await (const dirEntry of dirEntries) {
        //console.log(dirEntry.name);
        const data = await Deno.readTextFile(dirEntry.name);
        const lines = data.split('\n');
        console.log(lines);
    }
    
} catch (err) {
    console.error('Error reading the file:', err);
}

if (!dirEntry.isFile){
    continue;
}
let date;
try{
    date = parseDatei(dirEntry.name);
}

if (line.trim() )

if (line.startsWith ('Nmap scan report for')){
    host = line.split(' ')[4];
    continue;
}
