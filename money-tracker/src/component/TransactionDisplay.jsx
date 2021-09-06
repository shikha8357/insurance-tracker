import {ListItem, ListItemText,ListItemIcon,makeStyles} from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles=makeStyles({
   list:{
       marginTop:10,
       border:"1px solid lightgray "

    }
    })

const TransactionDisplay=({transaction,deleteTransaction})=>{
    const classes = useStyles();
const color= transaction.amount >=0? "blue":"red";
const sign= transaction.amount >=0? " ₹":"- ₹";
const amount=sign+ Math.abs(transaction.amount);
return(
    <ListItem className={classes. list} style={{background:`${color}` ,color:"white"}}>
        <ListItemIcon>
        <DeleteForeverIcon onClick={()=>deleteTransaction(transaction.id)}/>
        </ListItemIcon>
        <ListItemText primary={transaction.text} />
        <ListItemText primary={amount} />

        
    </ListItem>
)
}
export default TransactionDisplay;