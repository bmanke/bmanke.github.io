// Utility to conditionally join classNames together
export function cn(...args: any[]): string {
  return args.filter(Boolean).join(" ");
}
