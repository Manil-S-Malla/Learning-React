import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const AppBarComponent = () => {
    return(
        <AppBar>
            <ToolBar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant= 'h6'
                >
                    Material UI Themeing
                </Typography>
            </ToolBar>
        </AppBar>
    )
}

export default AppBarComponent;
