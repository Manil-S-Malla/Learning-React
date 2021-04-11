import {React, useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckboxComponent = (props) => {
    const [checked, setChecked] = useState(false);

    return (
        <FormControlLabel 
            control= {
                <Checkbox
                    checked= {checked}
                    onChange= {e => setChecked(e.target.checked)}
                    color= "primary"
                />
            }
            label= {props.label}
        />
    
  );
}

export default CheckboxComponent;
