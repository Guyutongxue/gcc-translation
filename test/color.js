import * as fs from "node:fs";
import { replaceGccDiagnostics } from "../dist/index.js";

const diag = fs.readFileSync("./color.txt", "utf8");

console.log(await replaceGccDiagnostics(diag, { color: true }));