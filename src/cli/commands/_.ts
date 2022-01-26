import { CliCommand } from '../models.ts';
import { StatusCommand } from './status.cmd.ts';

export const commandMap: CliCommand[] = [
  StatusCommand,
];
