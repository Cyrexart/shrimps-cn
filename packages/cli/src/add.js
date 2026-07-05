import { execSync } from "child_process";
import { fetchComponent } from "./fetch.js";
import { writeComponent } from "./write.js";

export function detectPackageManager() {
  try {
    execSync("pnpm --version", { stdio: "ignore" });
    return "pnpm";
  } catch {}
  try {
    execSync("yarn --version", { stdio: "ignore" });
    return "yarn";
  } catch {}
  return "npm";
}

function installDependencies(deps, pm) {
  if (!deps.length) return;
  const cmd = {
    pnpm: `pnpm add ${deps.join(" ")}`,
    yarn: `yarn add ${deps.join(" ")}`,
    npm: `npm install ${deps.join(" ")}`,
  }[pm];
  execSync(cmd, { stdio: "inherit" });
}

export async function addComponent(name, pm) {
  const item = await fetchComponent(name);

  for (const dep of item.registryDependencies ?? []) {
    await addComponent(dep, pm);
  }

  installDependencies(item.dependencies ?? [], pm);

  const paths = await Promise.all(
    item.files.map((file) => writeComponent(name, file.content)),
  );

  return paths;
}
