import React, { Component } from 'react';
import { connect } from 'react-redux';

class KoalaTableItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready_to_transfer: false,
        }
    }

    updateKoala = (event) => {
            console.log('update koala');
            const action = {
              type: 'UPDATE_KOALA',
              payload:{
                ready_to_transfer: true, id: this.props.koala._id
              }
            };
            this.props.dispatch(action);
          }

    render(){
        return (
                <tr>
                    <td>
                        {this.props.koala.name}
                    </td>
                    <td>
                        {this.props.koala.gender}
                    </td>
                    <td>
                        {this.props.koala.age}
                    </td>
                    <td>
                        {this.props.koala.ready_to_transfer}
                    </td>
                    <td>
                        {this.props.koala.notes}
                    </td>
                    <td>
                        {
                        this.state.ready_to_transfer ?
                        <button disable>
                        Transfered
                        </button>
                        :
                        <button onClick={this.updateKoala}>
                            Ready to Transfer
                        </button>
                    }
                    </td>
                </tr>
        )
    }
}


export default connect()(KoalaTableItems);