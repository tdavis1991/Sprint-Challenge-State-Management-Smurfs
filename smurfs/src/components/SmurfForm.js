import React, { useState, useReducer } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { reducer } from '../reducers/smurfReducer';
import { SMURF_NAME, SMURF_AGE, SMURF_HEIGHT } from '../reducers/actions';


function SmurfForm(props) {
    const smurfState = {name: "", age: 1, height: 3}
    const [state, dispatch] = useReducer(reducer)
    const [smurf, setSmurf] = useState(smurfState)

    const handleSubmit = event => {
        event.preventDefault();

        dispatch({type: SMURF_NAME, payload: smurf.name || props.name})
        dispatch({type: SMURF_AGE, payload: smurf.age || props.age})
        dispatch({type: SMURF_HEIGHT, payload: smurf.height || props.height})
        axios.post("http://localhost:3333/smurfs", state)
            .then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    const handleChange = event => {
        setSmurf({
            ...smurf,
            [event.target.name]: event.target.value
        })
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
            {console.log(smurf)}
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
        name: state.name,
        age: state.age,
        height: state.height
    }
}

export default connect(mapStateToProps)(SmurfForm);

