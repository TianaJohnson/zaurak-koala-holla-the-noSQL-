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
                        {this.props.koala.map((koalas) => {
                            return (
                            <tr>
                                <td>
                                    {this.props.koalas.name}
                                </td>
                                <td>
                                    {this.props.koalas.gender}
                                </td>
                                <td>
                                    {this.props.koalas.age}
                                </td>
                                <td>
                                    {this.props.koalas.ready_to_transfer}
                                </td>
                                <td>
                                    {this.props.koalas.notes}
                                </td>
                            </tr>
                            )
                        })}

                    </tbody>

                </table>

            </div>

        );
    }
}

const mapStateToProps = state => {
    koala: state.koalas
}

export default connect(mapStateToProps)(KoalaTable);