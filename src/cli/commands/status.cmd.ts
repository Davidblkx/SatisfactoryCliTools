import {
  CliArgument,
  CliCommand,
} from '../models.ts';
import { printStatus } from '../modules/status.ts';

const nameArg: CliArgument = {
  name: 'name',
  description: 'The name of the complex to print',
  required: false,
};

export const StatusCommand: CliCommand = {
  name: 'status',
  args: [nameArg],
  options: [],
  description: 'Show factories production status',
  action: async (args, __) => {
    const name = args[0] ?? '';
    return await printStatus(name.toString());
  }
};
