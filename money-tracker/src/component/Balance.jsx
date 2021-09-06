import {Box,Typography,makeStyles} from "@material-ui/core";

const useStyles=makeStyles({
balance:{
    fontSize:20,
    marginBottom:20,
}
})

const Balance=({transaction})=>{
    const classes=useStyles();
    const amount=transaction.map(transaction=>transaction.amount);
    const total=amount.reduce((amount,item)=>(amount+=item),0).toFixed(2);
return(
    <Box>
<Typography className={classes.balance}>Balance  ₹{total}</Typography>
    </Box>
)
}
export default Balance;