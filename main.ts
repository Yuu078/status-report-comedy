import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I completed your task in four seconds, then spent the rest of the week refreshing this report in case you changed your mind.";

// Self-gate: the entry must be a single valid line, 1-200 characters
// (counted per code point), not only whitespace. Never write an invalid entry.
const length = [...ENTRY].length;
if (length < 1 || length > 200) {
  throw new Error(`entry length ${length} is outside 1-200 characters`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
