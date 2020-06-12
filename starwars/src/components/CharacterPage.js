// Write your Character component here
import React, {useState, useEffect} from 'react';
import Character from './Character';
import axios from 'axios';

const CharacterPage = props => {
    const [rmData, updateRM] = useState(props);
    
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/1,2,3,7,8,14,24,26,40,47,150,244,265,372')
            .then(portalGun => {
                debugger
                updateRM(portalGun.data);
                debugger
                console.log(portalGun.data.name);
                //console.log(rmData);
                debugger
                //console.log(rmData.location.name);
            })
            .catch(badPortal => {
                console.log('Oops! We just teleported in to the Galactic Federation');
            })
    }, []);

    debugger;
    const rmHolder = rmData;
    console.log(rmData);
    /*
        rmData now returns:
        0: {id: 1, name: "Rick Sanchez", status: "Alive", etc}
        .
        .
        .
        13 {id, name, status, species, episode{}, location{}, origin{}, etc}
    */
    debugger;
    // After trying to create the return elements though, I'm getting errors


    return (
        <div>
            {
                rmData.map(function(rmObj, rmIndex) {
                    return <Character key={rmIndex} rmPost={rmObj} />;
                })
            }
        </div>
    );

    /* //The code below kept failing
    rmData.map(function(rmObj, rmIndex) {
        return (
            // Create character info cards here using .map
            <div>
                <div>
                    <img src={rmObj.image} />
                    <h3>{rmObj.name}</h3>
                </div>
                <p>Species: {rmObj.species}</p>
            </div>
        );
    })
    */
};

export default CharacterPage;