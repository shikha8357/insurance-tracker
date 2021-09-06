import { Typography, makeStyles, Box } from "@material-ui/core";
import './App.css';
import Balance from "./component/Balance";
import ExpenseCard from "./component/ExpenseCard";
import NewTransaction from "./component/NewTransaction";
import Transaction from "./component/Transaction";
import {useState} from "react";

const useStyles = makeStyles({

  component: {
    margin: "10px 0",
    fontSize: 35,
    textTransform: "uppercase",

  },
  box: {
    background: "white",
    width: 800,
    padding: 10,
    borderRadius: 20,
    display: "flex",
    "& >*": {
      width: "50%",
      padding:10,
      height:"70vh",

    }

  }

})

function App() {
  const classes = useStyles();
  const [transaction,setTransaction]=useState([
    // {id:1,text:"samosa",amount:-20},
    // {id:2,text:"salary",amount:3000},
    // {id:3,text:"books",amount:-100},
    // {id:4,text:"bonus",amount:1500},
  ]);

  
  const deleteTransaction=(id)=>{
setTransaction(transaction.filter(transaction=>transaction.id!==id))
  }
  const addTransaction=(transactions)=>{
    // console.log(transaction);
setTransaction(transaction =>[transactions,...transaction]);
  }
  
  return (
    <div className="App">
      <Typography className={classes.component}> Expense Tracker </Typography>
      <Box className={classes.box}>
        <Box>
          <Balance transaction={transaction}/>
          <ExpenseCard transaction={transaction} />
          <NewTransaction  addTransaction={addTransaction}/>
          </Box>
          <Box>
          <Transaction  transaction={transaction} deleteTransaction={deleteTransaction}/>
        </Box>
      </Box>

    </div>
  );
}

export default App;
