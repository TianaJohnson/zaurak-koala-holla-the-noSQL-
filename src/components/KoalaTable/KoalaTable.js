import React, { Component } from 'react';

import { connect } from 'react-redux';
import koalas from '../../Redux/koalaReducer';

class KoalaTable extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <th>
                            Name
                        </th>
                        <th>
                            Gender
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Ready to Transfer
                        </th>
                        <th>
                            Notes
                        </th>
                    </thead>
                    <tbody>
                        {this.props.koalas.map(koala => (
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
                            ))}

                    </tbody>

                </table>

            </div>

        );
    }
}

const mapStateToProps = state => ({
    koalas: state.koala,
})

export default connect(mapStateToProps)(KoalaTable);