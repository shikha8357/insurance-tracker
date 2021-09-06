import { Box, Typography, TextField, makeStyles, Button } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        "& > *": {
            marginTop: 30,
        }
    }, button: {
        background: "rgb(219 207 207)",
        color: "white",
    }
})


const NewTransaction = ({ addTransaction }) => {
    const classes = useStyles();
    const [text, setText] = useState("");
    const [amount, setAmount] = useState();
    const newTransaction = () => {
        const transactions = {
            id: Math.floor(Math.random() * 1000),
            text: text,
            amount: +amount,
        }
        addTransaction(transactions);
    }

    return (
        <Box className={classes.container}>
            <Typography variant="h5">
                New Transaction
            </Typography>
            <TextField label="Enter Expense" onChange={(e) => setText(e.target.value)}></TextField>
            <TextField label="Total Amount" onChange={(e) => setAmount(e.target.value)}></TextField>
            <Button variant="contained" className={classes.button} onClick={newTransaction}>Add New Transaction</Button>

        </Box>

    )
}
export default NewTransaction;