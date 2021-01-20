"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslog_1 = require("tslog");
var log = new tslog_1.Logger({ colorizePrettyLogs: false });
log.error(new Error("my error message"));
