import { MissingParamError } from '../errors/missing-param-error'
import { badrequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { httpRequest, HttpResponse } from '../protocols/http'

export class  SignUpController implements Controller{

  handle(httpRequest: httpRequest): HttpResponse {

    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {    
      if(!httpRequest.body[field]) {
        return badrequest(new MissingParamError(field))
      }
    }

  }
} 