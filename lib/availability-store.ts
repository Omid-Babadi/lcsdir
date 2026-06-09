import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { isLondonBusinessHours } from "@/lib/london-availability";

export const availabilityModes = ["automatic", "available", "unavailable"] as const;

export type AvailabilityMode = (typeof availabilityModes)[number];

const availabilityFilePath = path.join(process.cwd(), "data", "availability.json");

export function isAvailabilityMode(value: unknown): value is AvailabilityMode {
  return typeof value === "string" && availabilityModes.includes(value as AvailabilityMode);
}

export async function getAvailabilityMode(): Promise<AvailabilityMode> {
  try {
    const file = await readFile(availabilityFilePath, "utf8");
    const data = JSON.parse(file);

    if (isAvailabilityMode(data.mode)) {
      return data.mode;
    }
  } catch {
    return "automatic";
  }

  return "automatic";
}

export async function setAvailabilityMode(mode: AvailabilityMode) {
  await mkdir(path.dirname(availabilityFilePath), { recursive: true });
  await writeFile(
    availabilityFilePath,
    JSON.stringify({ mode, updatedAt: new Date().toISOString() }, null, 2),
  );
}

export function getEffectiveAvailability(mode: AvailabilityMode) {
  if (mode === "available") return true;
  if (mode === "unavailable") return false;

  return isLondonBusinessHours();
}
