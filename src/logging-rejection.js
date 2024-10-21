import winston from "winston";

async function callAsync() {
  return Promise.reject("Ops");
}

const logger = winston.createLogger({
  level: "info",
  //   handleExceptions: true,
  //   handleRejections: true,
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      filename: "exception.log",
      handleExceptions: true,
      handleRejections: true,
    }),
  ],
});

callAsync();
