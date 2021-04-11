import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextFieldComponent = (props) => {
    return (
        <React.Fragment>
            <TextField 
                variant= 'outlined'
                color= 'primary'
                type= 'email'
                label= 'Email'
                placeholder= "manilsmalla@gmail.com"
            />
            
            <br/>

        </React.Fragment>
    );
}

export default TextFieldComponent;
