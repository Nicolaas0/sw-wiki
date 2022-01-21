import React from 'react'
import { Flex} from '@chakra-ui/react'
import Links from '../UI/NavLink'


const Navigation = ({setType, setURL, type}) =>{
    const URL_LIST ={
        people: 'https://swapi.dev/api/people',
        starships:'https://swapi.dev/api/starships',
        vehicles:'https://swapi.dev/api/vehicles',
        planets:'https://swapi.dev/api/planets',
        species:'https://swapi.dev/api/species',
        films:'https://swapi.dev/api/films'
    }

    return(
        <Flex flexDir='row' justifyContent='space-around' h={'10%'}>
            <Links type={type} setType={setType} setURL={setURL} url={URL_LIST.people}>People</Links>
            <Links type={type} setType={setType} setURL={setURL} url={URL_LIST.starships}>Starships</Links>
            <Links type={type} setType={setType} setURL={setURL} url={URL_LIST.planets}>Planets</Links>
            <Links type={type} setType={setType} setURL={setURL} url={URL_LIST.vehicles}>Vehicles</Links>
            <Links type={type} setType={setType} setURL={setURL} url={URL_LIST.species}>Species</Links>
            <Links type={type} setType={setType} setURL={setURL} url={URL_LIST.films}>Films</Links>
        </Flex>
    )    
}

export default Navigation