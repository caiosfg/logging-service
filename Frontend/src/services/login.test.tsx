import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    const mockEmail = 'teste@log.com'
    window.alert = mockAlert

    it('Deve retornar um alert de boas vindas', () => {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
    })

    it('Nao deve exibir mensagem vem vindo sem email', () => {
        login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
    })
})