import type { ICodeErrorHandling } from '@src/types'

export class AppError extends Error {
  public status: number

  constructor(objectError: ICodeErrorHandling) {
    super(objectError.message)
    this.status = objectError.status
  }
}
