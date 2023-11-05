// Module imports
import pino from "pino";

/**
 * Defining logger configuration for better logging options
 */
const logger = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_ID || "info",
});

export default logger;
