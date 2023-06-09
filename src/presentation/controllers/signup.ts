import { MissingParamError } from '../errors/missing-param-error'
import { badrequest } from '../helpers/http-helper'
import { httpRequest, HttpResponse } from '../protocols/http'

export class  SignUpController {

  handle(httpRequest: httpRequest): HttpResponse {

    if(!httpRequest.body.name) {
      return badrequest(new MissingParamError('name'))
    }

    if(!httpRequest.body.email) {
      return badrequest(new MissingParamError('email'))
    }

  }
} 