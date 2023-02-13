import { ServerError } from '../errors'
import { HttpResponse } from '../protocols/http'

export const ok = (data: any): HttpResponse => {
  return {
    body: data,
    statusCode: 200
  }
}

export const badRequest = (error: Error): HttpResponse => {
  return {
    body: error,
    statusCode: 400
  }
}

export const serverError = (): HttpResponse => {
  return {
    body: new ServerError(),
    statusCode: 500
  }
}