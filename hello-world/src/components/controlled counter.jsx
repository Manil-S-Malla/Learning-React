import React, { Component } from 'react';


class Counter extends Component {
    state = {
        imageUrl: 'https://picsum.photos/200',
        tags: ['Tag 1', 'Tag 2', 'Tag 3']
    };

    componentDidUpdate(prevProps, prevState) {
        console.log(`Update > Counter - componentDidUpdate.\n\tPrevious Props : ${prevProps}\n\tPrevious State : ${prevState}`);
    }

    componentWillUnmount() {
        console.log('UnMount > Counter - componentDidUnmount.');
    }

    getCounterClasses(count) {
        let counterClasses = "badge m-2 badge-";
        counterClasses += count === 0 ? "warning" : "primary";
        return counterClasses;
    }

    render() { 
        console.log('Mount > Counter - Render.');

        const {imageUrl, tags} = this.state;
        
        const {count, id} = this.props.counter
        const {onIncrement, onDecrement, onDelete} = this.props;
        
        const mainContainerStyle= {
            display: 'flex',
            flexDirection: 'row',
            margin: 5
        }

        const containerStyle= {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            //alignItems: 'center',
        }

        const subContainerStyle= {
            flexDirection: 'row',
        }

        const counterStyle= {
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
            padding: 5,
        }

        const btnStyle= {
            fontSize: 10,
            fontWeight: 'bold',
            width: 25,
            textAlign: 'center',
            padding: 5,
        }

        return (
            <div style= {mainContainerStyle}>
                <img src= {imageUrl} alt= "" />
                
                <div style= {containerStyle}>
                    <div style= {{marginLeft: 5,}}>
                        {this.props.children}
                    </div>

                    <div style= {subContainerStyle}>
                        <span style= {counterStyle} className= {this.getCounterClasses(count)}>{ count === 0 ? 'Zero' : count}</span>
                        <button 
                            onClick= {() => onIncrement(id)} 
                            style= {btnStyle} 
                            className= "btn btn-outline-secondary btn-sm rounded m-2"
                        >+</button>
                        <button 
                            onClick= {() => onDecrement(id)} 
                            style= {btnStyle} 
                            className= "btn btn-outline-secondary btn-sm rounded m-2"
                        >-</button>
                        <button 
                            onClick= {() => onDelete(id)} 
                            className="btn btn-danger btn-sm m-2"
                        >
                            Delete
                        </button>
                    </div>
                   
                    {
                        tags.length > 0 ? 
                        <ul>
                            {
                                tags.map( (tag, index) => <li key= {index}>
                                        {tag}
                                    </li>)
                            }
                        </ul>:
                        'No tags in the list.'
                    }
                </div>

            </div>
        );
    }

}
 
export default Counter;