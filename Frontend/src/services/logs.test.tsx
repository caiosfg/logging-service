import { logs } from "./logs"

describe('logs', () => {

    it('Deve retornar pelo menos um log', () => {
        const value = logs(2)
        expect(value).toBe(2)
    })
} )