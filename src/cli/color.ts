export const TerminalColors = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  gray: '\x1b[37m',
};

export const TerminalBackgroundColors = {
  black: '\x1b[40m',
  red: '\x1b[41m',
  green: '\x1b[42m',
  yellow: '\x1b[43m',
  blue: '\x1b[44m',
  magenta: '\x1b[45m',
  cyan: '\x1b[46m',
};

export type Color = keyof typeof TerminalColors;
export type BackColor = keyof typeof TerminalBackgroundColors;

export function color(color: Color, text: string): string {
  return `${TerminalColors[color]}${text}\x1b[0m`;
}

export function back(color: BackColor, text: string): string {
  return `${TerminalBackgroundColors[color]}${text}\x1b[0m`;
}
