
import { Database } from "https://deno.land/x/sqlite3/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
const dataPath = './nmap-datenfiles';
const db = new Database("nmap_data.db");

const outputFilePath = './outfile.csv';

async function createTable() {
    //    await db.query(`
    //  CREATE TABLE IF NOT EXISTS scans (
    //    id INTEGER PRIMARY KEY AUTOINCREMENT,
    //    date DATETIME,
    //    host TEXT,
    //    mac TEXT
    //  )
    //`);
}
function parseDate(dateStr: string): Date {
    const p = dateStr.split('_');
    return new Date(`${p[0]}:${p[1]}:${p[2]}+${p[3]}:${p[4]}`);
}

async function main() {
    await createTable();
    let outputData = '';
    try {
        const dirEntries = await Deno.readDir(dataPath);
        //const promiseArray = [];
        for await (const dirEntry of dirEntries) {
            if (!dirEntry.isFile) {
                continue;
            }
            let date;
            try {
                date = parseDate(dirEntry.name);
            } catch (err) {
                assert(err instanceof Error);
                console.error('Error parsing date:', dirEntry.name, err.message);
                continue;
            }
            const filePath = `${dataPath}/${dirEntry.name}`;
            let host = undefined;
            let mac = undefined;
            for (const line of (await Deno.readTextFile(filePath)).split('\n')) {
                const cleanLine = line.replace(/\r/g, '');
                if (cleanLine.trim() === '' || cleanLine.startsWith('Starting Nmap')
                    || cleanLine.startsWith('Nmap done') || cleanLine.startsWith('Host is up')) {
                    continue;
                }
                if (cleanLine.startsWith('Nmap scan report for ')) {
                    host = cleanLine.split(' ')[4];
                    continue;
                }
                if (cleanLine.startsWith('MAC Address: ')) {
                    mac = cleanLine.split(' ')[2].toLowerCase();
                    //console.log(`${date.toISOString()};${host};${mac}`);
                    /* promiseArray.push(db.query("INSERT INTO scans (date, host, mac) VALUES (?, ?, ?)", [
                         date.toISOString(),
                         host,
                         mac,
                     ]));
                     promiseArray.length === 7 && console.log(promiseArray);*/
                    //console.log(`${date.toISOString()};${host};${mac}`);
                    outputData += `${date.toISOString()};${host};${mac}\n`;
                }
            }
        }
        await Deno.writeTextFile(outputFilePath, outputData);
        //console.log(`waiting for Insertion ${promiseArray.length} rows`);
        //await Promise.all(promiseArray);
        //console.log(`Inserted ${promiseArray.length} rows`);
    } catch (err) {
        console.error('Error reading the file:', err);
    }
}
await main();;