export const TerminalColors = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

export type Color = keyof typeof TerminalColors;

export function color(color: Color, text: string): string {
  return `${TerminalColors[color]}${text}\x1b[0m`;
}
