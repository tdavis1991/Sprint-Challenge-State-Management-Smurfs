import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { SMURF_NAME, SMURF_AGE, SMURF_HEIGHT } from '../reducers/actions';

function SmurfForm() {
    const [state, dispatch] = useReducer(reducer)
    const [smurf, setSmurf] = useState({
        name: "",
        age: 1,
        height: 3
    })

    const handleSubmit = event => {
        event.preventDefault();

        dispatch({type: SMURF_NAME, payload: smurf.name || state.name})
        dispatch({type: SMURF_AGE, payload: smurf.age || state.age})
        dispatch({type: SMURF_NAME, payload: smurf.age || state.age})
    }

    const handleChange = event => {
        setSmurf(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={smurf.name}
                placeholder="Name"
                onChange={handleChange}
            />
             <input
                type="number"
                name="age"
                value={smurf.age}
                placeholder="Age"
                onChange={handleChange}
            />
             <input
                type="number"
                name="height"
                value={smurf.height}
                placeholder="Height"
                onChange={handleChange}
            />
            <button type="submit">Add Smurf</button>
        </form>
    )
    
};
    
function mapStateToProps(state) {
    return {
        
    }
}

export default SmurfForm;

