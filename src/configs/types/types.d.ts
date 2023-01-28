export interface ENV {
  PKG_VERSION: string | undefined
  NODE_ENV: string | undefined
  PORT: number | undefined
}

export interface SanitizedEnv {
  PKG_VERSION: string
  NODE_ENV: string
  PORT: number
}
