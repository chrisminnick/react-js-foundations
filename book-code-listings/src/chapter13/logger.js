import { LogglyTracker } from 'loggly-jslogger';

const logger = new LogglyTracker();

logger.push({ 'logglyKey': '70e82677-41a6-4ab8-9261-bb012becc709' });

export default logger;
