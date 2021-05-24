// classe a ser criada
import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeather3HoursFixture from '@test/fixtures/stormglass_weather_3_hours.json';
import stormGlassNoemalized3HoursFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';
jest.mock('axios');

describe('StormGlass client', () =>{
    it('should return the normalized forecast from the stormGlass service', async () =>{
        const lat = -33.792726;
        const lng = 151.289824;
        //mock retorna objeto extraidos manualmente da resposta da API
        axios.get = jest.fn().mockResolvedValue(stormGlassWeather3HoursFixture);
        //criando instancia de stormGlass (a ser criado)
        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fetchPoints(lat, lng);
        expect(response).toEqual(stormGlassNoemalized3HoursFixture)

    })
})