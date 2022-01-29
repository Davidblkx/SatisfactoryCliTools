import {
  CliArgument,
  CliCommand,
  CliOption,
  getOptionValue,
} from '../models.ts';
import { printStatus } from '../modules/status.ts';

const nameArg: CliArgument = {
  name: 'name',
  description: 'The name of the complex to print',
  required: false,
};

const inttOption: CliOption<boolean> = {
  name: 'interactive',
  description: 'Interactive mode',
  required: false,
  hasValue: false,
  shortName: 'i',
  defaultValue: false,
};

export const StatusCommand: CliCommand = {
  name: 'status',
  args: [nameArg],
  options: [inttOption],
  description: 'Show factories production status',
  action: async (args, opt) => {
    const name = args[0] ?? 'Heavy Mod';
    const ittMode = getOptionValue(opt, inttOption, false);
    return await printStatus(name.toString(), ittMode);
  }
};
