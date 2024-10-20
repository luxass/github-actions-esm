import { readFile } from "node:fs/promises"

async function run() {
  console.log("Hello, World!");

  const data = await readFile("README.md", "utf-8");

  console.log(data);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
})
