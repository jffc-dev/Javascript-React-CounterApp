import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    test('debe retornar un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id)

        const heroeData = heroes.find(heroe => heroe.id === id)

        expect(heroe).toEqual(heroeData)
    })
    
    test('debe retornar undefined si el ID no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id)

        expect(heroe).toBe(undefined)
    })

    test('debe retornar uno o varios heroes por owner - usando toEqual - DC', () => {
        const owner = "DC"
        const heroes = getHeroesByOwner(owner)

        const heroesData = heroes.filter(heroe => heroe.owner === owner)

        expect(heroes).toEqual(heroesData)
    })

    test('debe retornar uno o varios heroes por owner - usando toBe - Marvel', () => {
        const owner = "Marvel"
        const heroes = getHeroesByOwner(owner)

        const heroesData = heroes.filter(heroe => heroe.owner === owner)

        expect(heroes.length).toBe(heroesData.length)
    })
    
})
