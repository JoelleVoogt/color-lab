export default async function CopyButton({ text }: { text: string }) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error("error.message");
  }
}
