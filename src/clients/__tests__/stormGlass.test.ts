// classe a ser criada
import { StormGlass } from '@src/clients/stormGlass';

describe('StormGlass client', () =>{
    it('should return the normalized forecast from the stormGlass service', async () =>{
        const lat = -33.792726;
        const lng = 151.289824;
        
        //criando instancia de stormGlass (a ser criado)
        const stormGlass = new StormGlass();
        const response = await stormGlass.fetchPoints(lat, lng);
        expect(response).toEqual({})

    })
})