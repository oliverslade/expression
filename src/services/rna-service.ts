import { InvalidDnaError } from '../models/errors/InvalidDnaError';

export function toRna(sequence: string): string {
  if (!sequence.match(/^[GCTA]+$/))
    throw new InvalidDnaError("Invalid input DNA.");
  const dnaToRnaMap: Record<string, string> = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };
  return sequence
    .split("")
    .map((letter) => dnaToRnaMap[letter])
    .join("");
}
