import log4js from 'log4js'
import log4jsjson from '@configs/logger/log4js.json'

log4js.configure(log4jsjson)

const logger = {
  access: log4js.getLogger('access'),
  debug: log4js.getLogger('debug'),
  express: log4js.connectLogger(log4js.getLogger('access'), {
    level: 'info'
  })
}

export default logger
