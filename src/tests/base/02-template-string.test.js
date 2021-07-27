import {getSaludo} from '../../base/02-template-string'
describe('Pruebas en 02-template-string',()=>{
    test('prueba en getsaludo con argumento', () => {
        const nombre = 'Javier'
        const saludo = getSaludo(nombre)
        expect(saludo).toBe(`Hola ${nombre}`)
    })
    test('prueba en get saludo sin argumento', () => {
        console.log(getSaludo())
        expect(getSaludo()).toBe('Hola Fernando');
    })
    
})