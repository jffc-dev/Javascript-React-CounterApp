import { shallow } from "enzyme"
import CounterApp from "../CounterApp"

// describe('Pruebas para el componente CounterApp', () => {
    
//     const valor = 10
//     let valorVariable = valor
//     const wrapper = shallow(<CounterApp value={valor}/>)
    
//     test('debe reenderizar el componente CounterApp', () => {
//         expect(wrapper).toMatchSnapshot()
//     })

//     test('debe incluir el parametro enviado como valor inicial', () => {
//         const valorRenderizado = wrapper.find('h2').text()
//         expect(valor).toBe(parseInt(valorRenderizado))
//     })
    
//     test('debe de incrementar con el botón +1', () => {
//         wrapper.find('button').at(0).simulate('click')
//         const valorRenderizado = wrapper.find('h2').text()
//         expect(parseInt(valorRenderizado)).toBe(valorVariable+1)
//         valorVariable++
//     })

//     test('debe de reducir con el botón -1', () => {
//         wrapper.find('button').at(2).simulate('click')
//         const valorRenderizado = wrapper.find('h2').text()
//         expect(parseInt(valorRenderizado)).toBe(valorVariable-1)
//         valorVariable--
//     })

//     test('debe de resetear con el botón reset', () => {
//         wrapper.find('button').at(1).simulate('click')
//         const valorRenderizado = wrapper.find('h2').text()
//         expect(parseInt(valorRenderizado)).toBe(valor)

//     })
    
// })

describe('Pruebas para el componente CounterApp', () => {
    
    const valor = 10
    let wrapper = shallow(<CounterApp value={valor}/>)

    beforeEach( ()=>{
        wrapper = shallow(<CounterApp value={valor}/>)
    })
    
    test('debe reenderizar el componente CounterApp', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe incluir el parametro enviado como valor inicial', () => {
        const valorRenderizado = wrapper.find('h2').text()
        expect(valor).toBe(parseInt(valorRenderizado))
    })
    
    test('debe de incrementar con el botón +1', () => {
        wrapper.find('button').at(0).simulate('click')
        const valorRenderizado = wrapper.find('h2').text()
        expect(parseInt(valorRenderizado)).toBe(valor+1)
    })

    test('debe de reducir con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click')
        const valorRenderizado = wrapper.find('h2').text()
        expect(parseInt(valorRenderizado)).toBe(valor-1)
    })

    test('debe de resetear con el botón reset', () => {
        // simulación de 5 clicks
        for (let index = 0; index < 5; index++) {
            wrapper.find('button').at(0).simulate('click')
            
        }
        wrapper.find('button').at(1).simulate('click')
        const valorRenderizado = wrapper.find('h2').text()
        expect(parseInt(valorRenderizado)).toBe(valor)

    })
    
})