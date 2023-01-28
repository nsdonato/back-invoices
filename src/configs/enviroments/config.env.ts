import dotenv from 'dotenv'

import { ENV, SanitizedEnv } from '@configs/types/types'

dotenv.config()

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT !== undefined ? Number(process.env.PORT) : 55298,
    PKG_VERSION: process.env.npm_package_version,
  }
}

const getSanitizedConfig = (config: ENV): SanitizedEnv => {
  return config as SanitizedEnv
}

const config = getConfig()

const ConfigEnv = getSanitizedConfig(config)

export default ConfigEnv
