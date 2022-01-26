import { CliCommand } from '../models.ts';
import { printStatus } from '../modules/status.ts';

export const StatusCommand: CliCommand = {
  name: 'status',
  args: [],
  options: [],
  description: 'Show factories production status',
  action: (_, __) => printStatus(),
};
