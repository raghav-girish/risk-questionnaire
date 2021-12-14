import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  toolBar: {
    borderRadius: 15,
    //margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    background: '#1976D2',
  },
  toolBar1: {
   borderRadius: 15,
   //margin: '10px',
   display: 'flex',
   flexDirection: 'row',
   //justifyContent: 'center',
   alignItems: 'center',
   background: '#1976D2',
   height:'18px'
 },
  card:{
     width:"70%",
     marginLeft:"15%",
     marginRight:"15%",
     marginTop:"5px",
     marginBottom:"5px"
  },
  questionTypography:{
     fontSize:'18px',
     fontWeight:'bold'
  },
  radio:{
     color:'#1976D2'
  }
}));