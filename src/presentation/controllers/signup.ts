import { MissingParamError } from '../errors/missing-param-error'
import { badrequest } from '../helpers/http-helper'
import { httpRequest, HttpResponse } from '../protocols/http'

export class  SignUpController {

  handle(httpRequest: httpRequest): HttpResponse {

    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {    
      if(!httpRequest.body[field]) {
        return badrequest(new MissingParamError(field))
      }
    }

  }
} 