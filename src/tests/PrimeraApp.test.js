import React from 'react';
// import { render } from "@testing-library/react"
import { shallow } from 'enzyme';

import PrimeraApp from "../PrimeraApp"

describe('Pruebas en el componente PrimeraApp', () => {
    // test('debe mostrar el mensaje "Javier Flores"', () => {
        
    //     //Usando test por defecto
    //     // const saludo = "Javier Flores"
    //     // const { getByText } = render( <PrimeraApp saludo={saludo}/>)

    //     // expect(getByText(saludo)).toBeInTheDocument()

        
        
    // })

    test('debe mostrar PrimeraApp, correctamente', () => {
        const saludo = "Javier Flores"
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = "Javier Flores"
        const subtitulo = "Desde subtitulos"

        const wrapper = shallow(
        <PrimeraApp 
            saludo={saludo}
            subtitulo={subtitulo}
        />)

        const textParrafo = wrapper.find('p').text()

        expect(textParrafo).toBe(subtitulo)

    })
    
})
