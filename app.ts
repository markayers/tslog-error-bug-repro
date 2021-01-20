import { Logger } from "tslog";
const log: Logger = new Logger({colorizePrettyLogs : false});
log.error(new Error("my error message"));