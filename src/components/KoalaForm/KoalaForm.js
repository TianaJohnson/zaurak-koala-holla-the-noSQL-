import React, { Component } from 'react';
import { connect } from 'react-redux';

class KoalaForm extends Component {

    handleAddKoala = () => {
        this.props.dispatch({ type: 'ADD_KOALAS' });
    }

    render() {
        return (
            <div>
                <h3>Add a Koala!</h3>
                <form>
                    <input placeholder="name"></input>
                    <input placeholder="gender"></input>
                    <input placeholder="age"></input>
                    <input placeholder="notes"></input>
                    <button onClick={this.handleAddKoala}>Add Koala</button>
                </form>
            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(KoalaForm);