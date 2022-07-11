import { EmailValidatorAdapter } from '../utils/email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
    isEmail (): boolean {
        return true
    }
}))

const makeSut = (): EmailValidatorAdapter => {
    return new EmailValidatorAdapter()
}

describe('EmailValidator Adapter', () => {

    test('01 - Should return false if validator returns false', () => {
        
        const sut = makeSut()
        
        jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)

        const isValid = sut.isValid('invalid_email@mail.com')

        expect(isValid).toBe(false)
    })

    test('02 - Should return true if validator returns true', () => {
        
        const sut = makeSut()
        const isValid = sut.isValid('invalid_email@mail.com')

        expect(isValid).toBe(true)
    })

    test('03 - Should call validator with correct email', () => {
        
        const sut = makeSut()
        const isEmailSpy = jest.spyOn(validator, 'isEmail')
        
        sut.isValid('any_email@mail.com')

        expect(isEmailSpy).toHaveBeenCalledWith('any_email@mail.com')
    })
})