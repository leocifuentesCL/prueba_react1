import { useEffect, useState } from "react";
import Card from './Card'
import Buscador from './Buscador'

const MiApi = () => {
    const [people, setPeople] = useState([]);
    const [endSearch, setEndSearch] = useState('');

    const getData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    const getPersonajes = async () => {
        try {
            const {results: personajes} = await getData('https://lotrapi.co/api/v1/characters');
            personajes.sort((a, b) => a.name > b.name);
            setPeople(personajes);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getPersonajes();
    }, []);

    const handleEndSearch =  (e) => {
        setEndSearch(e.target.value)
      }

      const filteredCharacters = people.filter(
        (characater) =>
        characater.name.toLowerCase().includes(endSearch.toLowerCase())
      )
      filteredCharacters.sort((a, b) => a.name.localeCompare(b.name))

    return (
        <>
        <div className="container">
        <Buscador handleEndSearch={endSearch} onChange={handleEndSearch}/>
        </div>
        <div className="cards">
            <Card people={filteredCharacters} />
        </div>
        </>
    )
};

export default MiApi;
