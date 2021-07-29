import { getImagen } from "../../base/11-async-await"

describe('Pruebas en async y await', () => {
    test('debe retornar el url del gif', async() => {
        const url = await getImagen()
        expect(url.includes("https://")).toBe(true)
    })
    
})
