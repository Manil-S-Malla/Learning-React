import './App.css';
import Button from './components/Button.component';
import ButtonGroup from './components/ButtonGroup.component';
import CheckBox from './components/CheckBox.component';
import TextField from './components/TextField.component';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import { textTheme, twoButtonTheme } from './components/Themes';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from './components/AppBar.component';

function App() {
  return (
    <Container maxWidth= 'sm'>
      <div className="App">
        <br/>
        <AppBar /><br/>
        <ThemeProvider theme= {textTheme}>
          <Typography
            variant= 'h3'
          >
            Welcome to Material UI
          </Typography><br/>
          <Typography
            variant= 'subtitle1'
          >
            Learn how to use Material UI
          </Typography><br/>
          <Typography
            variant= 'body1'
            component= 'p'
          >
            The login elements below are created using Material UI.
          </Typography><br/>
        </ThemeProvider>

        <Grid container spacing= {4} justify= 'center'>
          <Grid item>
            <Paper 
              style= {{height: 75, width: 50, marginLeft: 5}}
            >
              P1
            </Paper>
          </Grid>
          <Grid item>
            <Paper 
              style= {{height: 75, width: 50, marginLeft: 5}}
              >
              P2
            </Paper>
          </Grid>
          <Grid item>
            <Paper 
              style= {{height: 75, width: 50, marginLeft: 5}}
              >
              P3
            </Paper>
          </Grid>
        </Grid><br/>

        <TextField /> <br/>
        <Button text= "Login" /><br/>
        <CheckBox label= "Remember me"/><br/>    
        
        <ThemeProvider theme= {twoButtonTheme}>
          <ButtonGroup /><br/>
        </ThemeProvider>

      </div>
    </Container>
  );
}

export default App;
