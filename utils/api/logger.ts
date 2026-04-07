import { LogLevel } from "../../types";

const COLORS = {
    info: "\x1b[32m", // Green
    warn: "\x1b[33m", // Yellow
    error: "\x1b[31m", // Red
    debug: "\x1b[36m", // Cyan
    reset: "\x1b[0m" // Reset color
};

function log(message: string, level: LogLevel) {
  const timestamp = new Date().toISOString();
  const color = COLORS[level];
  console.log(`${color}[${timestamp}][${level.toUpperCase()}] ${message}${COLORS.reset}`);
}

export const logger = {
   info: (message: string) => log(message, 'info'),
   warn: (message: string) => log(message, 'warn'),
   error: (message: string) => log(message, 'error'),
   debug: (message: string) => log(message, 'debug')
};