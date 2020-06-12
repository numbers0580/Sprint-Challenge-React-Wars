// Write your Character component here
import React, {useState, useEffect} from 'react';
//import Character from './Character';


const CharacterPage = props => {

    //const [rmData, updateRM] = useState(props);
    const {rmData, rmKey} = props; //The above commented-out line didn't work, but found this method worked well
    
    /*
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/1,2,3,7,8,14,24,26,40,47,150,244,265,372')
            .then(portalGun => {
                debugger
                let fetchedPortal = portalGun.data;
                updateRM(fetchedPortal); //rmData should now hold 14 elements from the above API
                debugger
                console.log(fetchedPortal.name);
                //console.log(rmData);
                debugger
                //console.log(rmData.location.name);
            })
            .catch(badPortal => {
                console.log('Oops! We just teleported in to the Galactic Federation');
            })
    }, []);
    */

    let rmHolder = rmData;
    let keyHolder = rmKey;
    console.log('rmHolder is ', rmHolder); //Testing. Found rmData returned undefined, but rmHolder held the object
    console.log('Current key is ', keyHolder); //Testing. See notes in the above line
    console.log('Current Character Name: ', rmHolder.name); //Testing: Just to be sure.

    /*
        rmData now returns:
        0: {id: 1, name: "Rick Sanchez", status: "Alive", etc}
        .
        .
        .
        13 {id, name, status, species, episode{}, location{}, origin{}, etc}

        Update: I had to store everything from axios into new variables: rmHolder & key Holder, but making progress again
    */

    //This took a while, but I had originally tried using axios above and using .map in the return below, but I was getting errors that I couldn't fix
    //Ultimately, I used axios in App.js, stored the fetched array into a new variable declared outside of the axios function and mapped over that new variable
    //with the return statement in App.js to send each one to this page. Thus, there was no longer any need to use .map here


    //Styling
    const citadelOfRicks = function() {
        return {
            mainDiv: {
                width: '1000px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: '#97C12F',
                boxShadow: '0 5px 30px -10px yellow',
                marginBottom: '20px'
            },

            nestedDiv: {
                display: 'flex',
                alignItems: 'center'
            },

            img: {
                width: '100px',
                height: '100px',
                marginRight: '20px'
            },

            h2: {
                color: '298B38'
            },

            p: {
                color: 'black'
            },

            span: {
                fontWeight: 'bold',
                color: 'red'
            }
        }
    };



    return (
        <div style={citadelOfRicks().mainDiv}>
            <div style={citadelOfRicks().nestedDiv}>
                <img src={rmHolder.image} style={citadelOfRicks().img} />
                <h2 style={citadelOfRicks().h2}>{rmHolder.name}</h2>
            </div>
            <p style={citadelOfRicks().p}>Location: <span style={citadelOfRicks().span}>{rmHolder.location.name}</span></p>
        </div>
    );
};

export default CharacterPage;