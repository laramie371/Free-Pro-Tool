export function formatJson(input: string, spaces = 2): string {
  const parsed = JSON.parse(input);
  return JSON.stringify(parsed, null, spaces);
}
