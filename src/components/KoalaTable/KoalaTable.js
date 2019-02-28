import React, { Component } from 'react';
import KoalaTableItems from './KoalaTableItems';
import { connect } from 'react-redux';

class KoalaTable extends Component {

    componentDidMount() {
        const action = { type: 'FETCH_KOALAS'};
        this.props.dispatch(action);
    }

    render() {
        console.log('Reduxstore', this.props.reduxStore);
        
        return (
            <div>
                {JSON.stringify(this.props.reduxStore)}
                <table>
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

                    <tbody>
                        {/* {this.props.reduxStore.koalas.map((koala, i) => {
                            return (
                                <KoalaTableItems koala={koala} key={i}/>
                            )
                        })} */}


                    </tbody>

                </table>

            </div>

        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore: reduxStore,
})

export default connect(mapStateToProps)(KoalaTable);