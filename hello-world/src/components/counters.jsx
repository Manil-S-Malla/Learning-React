import React, { Component } from 'react';
import Counter from './controlled counter';

class Counters extends Component {

    render() { 
        console.log('Mount > Counters - Render.');
        const {onAdd, onDelete, onReset, onIncrement, onDecrement, counters} = this.props;
        return (
            <React.Fragment>
                <button 
                    onClick= {onAdd}
                    style= {{margin: 5,}} 
                    className="btn btn-success btn-sm m-2"
                >Add</button>
                <button 
                    onClick= {onReset}
                    style= {{margin: 5,}} 
                    className="btn btn-danger btn-sm m-2"
                >Reset</button>
                {
                    counters.map((counter, index) => 
                        <Counter 
                            key= {index} 
                            onDelete= {onDelete} 
                            onIncrement = {onIncrement}
                            onDecrement = {onDecrement}
                            counter= {counter} 
                        >
                            <h3>Counter #{counter.id}</h3>
                        </Counter>)
                }
            </React.Fragment>
        );
    }
}
 
export default Counters;