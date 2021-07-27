describe('Primeras pruebas',()=>{
    test('debe de ser true',()=>{
        const isTrue = false;
        if(isTrue){
            throw new Error('La prueba dió falso')
        }
    })
    
    test('deben ser iguales ambos string', () => {
        const mensaje = 'Hola mundo';
        const mensaje2 = `Hola mundo`;
        expect(mensaje).toBe(mensaje2);
    })
});