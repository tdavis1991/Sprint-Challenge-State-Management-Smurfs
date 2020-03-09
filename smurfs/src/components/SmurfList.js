import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../store/actions';
import Smurf from './Smurf';

const SmurfList = (props) => {

    useEffect(() => {
        props.getSmurf()
    }, [props.addedSmurf])

    

    if(props.isLoading) {
        return <h1>Searching for the village:)</h1>
    }

    return (
        <div className='smurf-list'>
            <h1>Smurfs</h1>
            {props.smurfs.map((list, index) => (
                <Smurf
                    id={index}
                    name={list.name}
                    age={list.age}
                    height={list.height}
                    smurf={list}
                />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    console.log('state from store:', state)

    return {
       smurfs: state.allSmurfs,
       isLoading: state.isLoading 
    }
}

export default connect(
    mapStateToProps,
    { getSmurf }
)(SmurfList)