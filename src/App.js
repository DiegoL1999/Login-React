import React, { UseState } from 'react'
import { Grid, Container , Paper, Avatar, Typography, TextField, Button, CssBaseline} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fondo from './assets-image/fondo.png'
import { LockOutlined as LockOutlined } from '@material-ui/icons'
import { useState } from 'react'

const useStyles = makeStyles(theme =>({
  root: {
    backgroundImage : `url(${fondo})`,
    backgroundSize : 'cover',
    backgroundPosition: 'center',
    height: '100vh'
   
  },
  container: {
    opacity: '0.8',
    height: '60%',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down(400 + theme.spacing(2)+2)] : {
      marginTop: 0,
      with: '100%',
      height: '100%'
    }
  },
  div: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column', 
    height: 'center',
    alignItems: 'center'
  },
  
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(2, 0, 1)
  }
}))
  
const App = () => {

  const [body, setBody] = useState({Nombre: '', contraseña: ''})

  const classes = useStyles()
 
  const handlechange = e => {
      setBody({
        ...body,
        [e.target.name]: e.target.value
      })
  }

  const onSummit = () => {
    console.log(body)
  }
  return (
    <>
    <Grid container component = 'main' className = {classes.root}>
    <CssBaseline/>
        <Container component = {Paper} elevation={5} maxWidth='xs' className={classes.container}>
            <div  className={classes.div}>
              <Avatar className={classes.avatar}>
                  <LockOutlined/>
              </Avatar>
              <Typography component='h1' variant='h5'>Sing in</Typography>
              <form className={classes.form}>
                <TextField
                    fullWidth
                    autoFocus
                    color='primary'
                    margin='normal'
                    variant='outlined'
                    label='Nombre de Usuario'
                    name='Nombre'
                    value={body.Nombre}
                    onChange={handlechange}
                />
                <TextField
                    fullWidth
                    type='password'
                    color='primary'
                    margin='normal'
                    variant='outlined'
                    label='Contraseña'
                    name='contraseña'
                    value={body.contraseña}
                    onChange={handlechange}
                />
                <Button
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.button}
                    onClick={onSummit}
                >Sing In</Button>
              </form>
            </div>
        </Container>
    </Grid>
    </>
  )
}

export default App


