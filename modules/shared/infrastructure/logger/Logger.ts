export interface Logger {
  info(message: string): void;
  error(message: string): void;
}

class ConsoleLogger implements Logger {
  info(message: string) {
    console.info(message);
  }
  error(message: string) {
    console.error(message);
  }
}

const consoleLogger = new ConsoleLogger();

export default consoleLogger;
