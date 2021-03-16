import React, { Component } from 'react';
import Counter from './counter';

class Components extends Component {
    state = { counters: [
        {id: 0, count: 0},
        {id: 1, count: 0},
        {id: 2, count: 0},
        {id: 3, count: 0},
        {id: 4, count: 0},
        {id: 5, count: 0},
    ] }
    render() { 
        return (
            <React.Fragment>
                {
                    this.state.counters.map((counter, index) => 
                        <Counter key= {index} count= {counter.count} selected= {true}>
                            <h3>Counter #{counter.id}</h3>
                        </Counter>)
                }
            </React.Fragment>
        );
    }
}
 
export default Components;