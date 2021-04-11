import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/Styles';

const style = makeStyles({
    main: {
        background: '#123456',
        color: '#ffffff',
        padding: '5px 10px',
    }
})

const ButtonComponent = (props) => {
    const classes = style();
    return (
        <Button 
            className= {classes.main}
            startIcon= {props.icon} 
            variant= "contained" 
            //color= {props.color} 
            size= "small" 
            style= {{
                fontSize: 14,
            }}    
        >
            {props.text}
        </Button>
    )
}

export default ButtonComponent;
