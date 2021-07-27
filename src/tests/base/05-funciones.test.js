import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('pruebas en 05-funciones',()=>{
    test('getUser() debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()
        expect(userTest).toEqual(user)
    })
    test('getUserActivo() debe retornarn un objeto',()=>{
        const nombre = 'Javier';
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }
        const user = getUsuarioActivo(nombre)
        expect(userTest).toEqual(user)
    })
})