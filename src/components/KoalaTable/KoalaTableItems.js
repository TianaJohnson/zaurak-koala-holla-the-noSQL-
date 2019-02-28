import React, { Component } from 'react';

class KoalaTableItems extends Component {
    render(){
        return (
            <div>
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
                </tr>
            </div>
        )
    }
}

export default KoalaTableItems;