import React from 'react';
import axios from 'axios';

const Smurf = props => {

    const deleteSmurf = smurf => {
        axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
            .then(res => {
                console.log('smurf deleted from DB:', res)
            }).catch(err => {
                console.log('error from delete request:', err)
            })
    }

    return (
        <div key={props.id}>
            <h3>{props.name}</h3>
            <p>{props.age}</p>
            <p>{props.height}</p>
            <button onClick={() => deleteSmurf(props.smurf)}>Delete</button>
        </div>
    )
}

export default Smurf;