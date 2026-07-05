import fs from "fs/promises";
import path from "path";

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function getComponentDir() {
  const cwd = process.cwd();
  const hasSrc = await exists(path.join(cwd, "src"));
  return hasSrc
    ? path.join(cwd, "src", "components", "ui")
    : path.join(cwd, "components", "ui");
}

export async function writeComponent(name, content) {
  const dir = await getComponentDir();
  await fs.mkdir(dir, { recursive: true });
  const filePath = path.join(dir, `${name}.tsx`);
  await fs.writeFile(filePath, content, "utf-8");
  return filePath;
}

export async function writeGlobals(content) {
  const cwd = process.cwd();
  const candidates = [
    path.join(cwd, "src", "app", "globals.css"),
    path.join(cwd, "app", "globals.css"),
  ];
  for (const filePath of candidates) {
    if (await exists(filePath)) {
      await fs.writeFile(filePath, content, "utf-8");
      return filePath;
    }
  }
  const fallback = candidates[0];
  await fs.mkdir(path.dirname(fallback), { recursive: true });
  await fs.writeFile(fallback, content, "utf-8");
  return fallback;
}
