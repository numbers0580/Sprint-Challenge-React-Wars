// Write your Character component here
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Character = props => {
    const [getCharacter, changeCharacter] = useState(props.rmPost);

    return (
        <div>
            <div>
                <img src="" />
                <h3>CharacterName</h3>
            </div>
            <p>Species</p>
        </div>
    );
}

export default Character;