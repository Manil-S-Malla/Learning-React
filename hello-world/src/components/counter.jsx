import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: this.props.count || 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['Tag 1', 'Tag 2', 'Tag 3']
    };

    handleIncrement = (id) => {
        console.log(id);
        this.setState({count: this.state.count + 1});
    }

    handleDecrement = (id) => {
        if (this.state.count > 0) {
            console.log(id);
            this.setState({count: this.state.count - 1});
        }
        else {
            alert("Can't go lower than 0.")
        }
    }

    render() { 
        const {count, imageUrl, tags} = this.state;

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
                            onClick= {() => {this.handleIncrement('Increment')}} 
                            style= {btnStyle} 
                            className= "btn btn-outline-secondary btn-sm rounded m-2"
                        >+</button>
                        <button 
                            onClick= {() => {this.handleDecrement('Decrement')}} 
                            style= {btnStyle} 
                            className= "btn btn-outline-secondary btn-sm rounded m-2"
                        >-</button>
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

    getCounterClasses(count) {
        let counterClasses = "badge m-2 badge-";
        counterClasses += count === 0 ? "warning" : "primary";
        return counterClasses;
    }
}
 
export default Counter;