import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import logo from './logo.png'; // Tell webpack this JS file uses this image
import { FaGithub } from 'react-icons/fa';
import { FaEthereum } from 'react-icons/fa';
import { FaBtc } from 'react-icons/fa';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: "#7BDCB5"
    },
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  middleText:{
    textAlign:'center',
    marginTop: 100
  },
  middleText:{
    textAlign:'center',
    marginTop: 100
  },
  title:{
    marginLeft:60,
    marginTop:70,
  },
  textfield:{
    marginTop:100
  },

  button:{
    marginTop:50,
    width: 460,
    backgroundColor:"#7BDCB5"
  },

  logo:{
    width:150,
    height:150,
    marginLeft:60,
    marginTop:30,
  },
  input:{
    marginLeft:350,
    marginTop:200,
  },
  social:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  github:{
    size:"9em"
  },
  eth:{

  },
  bitcoin:{

  },
  social_buttons:{
    backgroundColor:"#7BDCB5",
    border: "none",
  }

}));




const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
  },});


  const donate = () => {



    if (typeof window.ethereum !== 'undefined') {

      const transactionParameters = {
        nonce: '0x00', // ignored by MetaMask
        gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
        gas: '0x2710', // customizable by user during MetaMask confirmation.
        to: '0x4a75380912153727811032dA600D5325B2b7de5B', // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        value: '0x00', // Only required to send ether to the recipient from the initiating external account.
        data:
          '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
        chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
      };



      window.ethereum.request({ method: 'eth_requestAccounts' })

      console.log('MetaMask is installed!');
      window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      })
    }
    else{
      window.alert("MetaMask nicht installiert");
    }
  };

function App() {
  const classes = useStyles();

  const [number, setNumber] = React.useState("");

  const sendToWa = () => {
      const n = number.replace(/\s+/g, '')
      var url = "http://wa.me/";
      window.open(url+n)
    };

    const opengithub = () => {
      var url = "http://google.ch/";
      window.console.log(url);
      window.open(url);
    };



  return (
<div className={classes.root}>
      <Grid container spacing={3} 
      direction="row"
      justify="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}>
        <Grid item xs={3}>
        <img className={classes.logo} src={logo} alt="Logo" />
        </Grid>
        <Grid item xs={9}>
        <ThemeProvider theme={theme}>
        <div className={classes.title}>
        <Typography  variant="h3" component="h3" fontStyle="poppins" >
          Whatsapp unsaved 
        </Typography>
        </div>

        </ThemeProvider>

        </Grid>
        <Grid item xs={12}>
          <div className={classes.middleText}>
        <Typography variant="h4" component="h4">
          Just send Whatsapp messages without saving a contact on your phone
        </Typography> 
        <br></br>

        <br></br>
        <TextField 
        label="Paste Phone number with country code" 
        multiline InputProps={{ style: { fontSize: 50 } }} 
        className={classes.textfield}
        onChange={(e) => setNumber(e.target.value)}
        >

         </TextField>
        <br></br>
        <AwesomeButton className={classes.button} 
         onPress={sendToWa}>
         Open WhatsApp
       </AwesomeButton>
       
       </div>

      </Grid>
        <Grid item xs={12} >
         
          <div className={classes.social}>
          <button className={classes.social_buttons}
          onClick={opengithub}
          >
            <FaGithub size="5em" />
          </button>
          <button className={classes.social_buttons}
          onClick={donate}
          >
            <FaEthereum size="5em" />
          </button>
{/*           <button className={classes.social_buttons}
          onClick={showbtc}
          >
           <FaBtc size="5em" />
          </button> */}
          </div>
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
