const BASE_URL = "https://raw.githubusercontent.com/Cyrexart/shrimps-cn/main";

async function fetchRegistry() {
  const res = await fetch(`${BASE_URL}/registry.json`);
  if (!res.ok) throw new Error("Could not fetch registry");
  return res.json();
}

export async function fetchComponent(name) {
  const registry = await fetchRegistry();
  const item = registry.items.find((i) => i.name === name);
  if (!item) throw new Error(`Component "${name}" not found`);

  const files = await Promise.all(
    item.files.map(async (filePath) => {
      const res = await fetch(`${BASE_URL}/${filePath}`);
      if (!res.ok) throw new Error(`Could not fetch ${filePath}`);
      return { path: filePath, content: await res.text() };
    }),
  );

  return { ...item, files };
}

export async function fetchGlobals() {
  const res = await fetch(`${BASE_URL}/src/app/globals.css`);
  if (!res.ok) throw new Error("Could not fetch globals.css");
  return res.text();
}
