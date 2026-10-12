export const documentCategories = ["biopsy", "imaging", "pathology", "genetics", "blood", "treatment", "medication", "other"] as const;
export type DocumentCategory = typeof documentCategories[number];
export const maxFileBytes = 10 * 1024 * 1024;
export const maxDocuments = 20;
export const maxTotalBytes = 200 * 1024 * 1024;

export async function validatedFileExtension(file: File): Promise<"pdf" | "jpg" | "png" | null> {
  if (!file.size || file.size > maxFileBytes || file.name.length > 180) return null;
  const bytes = new Uint8Array(await file.slice(0, 8).arrayBuffer());
  if (file.type === "application/pdf" && bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46 && /\.pdf$/i.test(file.name)) return "pdf";
  if (file.type === "image/jpeg" && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff && /\.jpe?g$/i.test(file.name)) return "jpg";
  if (file.type === "image/png" && [137, 80, 78, 71, 13, 10, 26, 10].every((value, index) => bytes[index] === value) && /\.png$/i.test(file.name)) return "png";
  return null;
}

export function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
}

export function authCallbackOrigin(requestOrigin: string, canonicalOrigin: string, deploymentHost?: string) {
  if (deploymentHost?.endsWith(".vercel.app") && requestOrigin === `https://${deploymentHost}`) return requestOrigin;
  return canonicalOrigin;
}
