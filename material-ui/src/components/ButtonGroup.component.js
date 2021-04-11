import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { Save, Delete } from '@material-ui/icons';

const ButtonGroupComponent = (props) => {
    return (
            <ButtonGroup>
                <Button 
                    startIcon= {<Save />}
                    variant= "contained" 
                    color= "primary"
                    size= "small" 
                    style= {{
                        fontSize: 14, 
                    }}    
                >
                    Save
                </Button>
                <Button 
                    startIcon= {<Delete />}
                    variant= "contained" 
                    color= "secondary"
                    size= "small" 
                    style= {{
                        fontSize: 14,
                    }}    
                >
                    Discard
                </Button>
            </ButtonGroup>
  );
}

export default ButtonGroupComponent;
