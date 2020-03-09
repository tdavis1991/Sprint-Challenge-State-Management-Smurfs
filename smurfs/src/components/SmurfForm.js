import React, { useState } from 'react';
import axios from 'axios';
import SmurfList from './SmurfList';

const newSmurf = {name:'', age: [], height:''}

function SmurfForm() {
    const [smurf, setSmurf] = useState(newSmurf);
    const [addedSmurf, setAddedSmurf] = useState(false)

    const handleChange = e => {

        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then(res => {
                console.log('data being posted to DB:', res)
            }).catch(err => {
                console.log('error from post request:', err)
            })
        setAddedSmurf(!addedSmurf);
        setSmurf(newSmurf);
    }

    return (
        <div className='smurf-form'>
            <form onSubmit={handleSubmit}>
                <input
                    name='name'
                    type='text'
                    placeholder='Name'
                    value={smurf.name}
                    onChange={handleChange}
                />
                <input
                    name='age'
                    type='text'
                    placeholder='Age'
                    value={smurf.age}
                    onChange={handleChange}
                />
                <input
                    name='height'
                    type='text'
                    placeholder='Height'
                    value={smurf.height}
                    onChange={handleChange}
                />
                <button type='submit'>Add Smurf</button>
            </form>
            <SmurfList addedSmurf={addedSmurf} />
        </div>
    )
}

export default SmurfForm;