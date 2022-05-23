var winston = require('winston');
const { format } = winston;

const logger = winston.createLogger({
    levels: winston.config.syslog.levels,
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'warning.log', level: 'warn' }),
        new winston.transports.File({ filename: 'info.log', level: 'info' })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exceptions.log' })
    ],
    format: format.combine(
        format.splat(),
        format.timestamp(),
        format.colorize(),
        format.prettyPrint(),
        format.json()
    ),
})

module.exports = logger;