import React, { Component } from 'react';

class KoalaTableItems extends Component {


    updateKoala=(event)=>{
            console.log('update koala');
            const action = {
              type: 'UPDATE_KOALA',
              payload: this.state,
            };
            this.props.dispatch(action);
            this.props.history.push('/home');
          }
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
                        <button onClick={this.updateKoala}>
                            Ready to Transfer
                        </button>
                    </td>
                </tr>
        )
    }
}

export default KoalaTableItems;