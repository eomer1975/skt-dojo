import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const vendorRoot = path.join(projectRoot, "dist", "vendor");

const packagesToCopy = [
  "lit",
  "lit-html",
  "lit-element",
  path.join("@lit", "reactive-element"),
  path.join("@lit-labs", "ssr-dom-shim")
];

rmSync(vendorRoot, { recursive: true, force: true });
mkdirSync(vendorRoot, { recursive: true });

for (const packageName of packagesToCopy) {
  const sourcePath = path.join(projectRoot, "node_modules", packageName);
  if (!existsSync(sourcePath)) {
    throw new Error(`Pacchetto non trovato: ${packageName}`);
  }

  const destinationPath = path.join(vendorRoot, packageName);
  mkdirSync(path.dirname(destinationPath), { recursive: true });
  cpSync(sourcePath, destinationPath, { recursive: true });
}
