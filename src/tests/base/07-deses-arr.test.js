import { retornaArreglo, useState } from "../../base/07-deses-arr"

describe('Pruebas en 07-deses-arr',()=>{
    test('retornaArreglo debe de retornar un string y un número', () => {
        const [ letras, numeros] = retornaArreglo() //['ABC', 123];
        //expect(arr).toEqual(['ABC', 123])
        expect(letras).toEqual('ABC')
        expect(typeof letras).toEqual('string')
        expect(numeros).toEqual(123)
        expect(typeof numeros).toEqual('number')
    })
    
    test('usestate debe retornar un valor igual al parámetro y una funcion', () => {
        const value = "Javier Flores"
        const [ valor, funcion] = useState(value)
        expect(value).toBe(valor)
        expect(typeof funcion).toBe('function')
    })
})