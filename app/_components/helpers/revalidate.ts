export default async function revalidate(path?: string) {
  return await fetch(path ? `/revalidate?path=${path}` : `/revalidate`).then(
    (result) => {
      if (!result.ok) console.error(`Failed to revalidate ${path || "/"}`);
    },
  );
}
