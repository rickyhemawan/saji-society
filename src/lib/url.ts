function basePath(): string {
  return import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
}

export function withBase(path = ""): string {
  const base = basePath();
  if (path.startsWith("#")) return `${base}${path}`;
  return `${base}${path.replace(/^\//, "")}`;
}

export function photoSrc(filename: string): string {
  return withBase(`images/${filename}`);
}
