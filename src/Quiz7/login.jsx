import React from 'react' 
import { Grid,Paper,Avatar,TextField,Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Login = (props)=>
{
    const paperStyle={padding:20,height:'70vh',width:280,margin:"20px auto"}
    const avatarStyle={backgroundColor:'blue'}
    const btnStyle={margin:'8px 0', color:'primary'}
    return(
      <Grid>
          <Paper elevation={10} style={paperStyle}>
              <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign in</h2> 
            </Grid>
            <TextField label='Username' placeholder='Enter username' fullWidth required/>
            <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
            <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember Me"
      />
      <Button onClick={props.onLogin} variant="contained"  style={btnStyle}fullWidth>Sign in </Button>
          </Paper>
      </Grid>
    )
} 

export default Login