

import { Box, Typography, Card, CardContent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        display: "flex",
        '&> *': {
            padding: 10,
            flex: 3,
    }
        },
        income: {
            color: "blue",
        },
        expense: {
            color: "red",
        }

    
})

const ExpenseCard = ({transaction}) => {
    const classes = useStyles();
    const amount=transaction.map(transaction=>transaction.amount);
    const income=amount.filter(item=>item>0).reduce((amount,item)=>(item+=amount),0).toFixed(2);
    const expense=(amount.filter(item=>item<0).reduce((amount,item)=>(item+=amount),0)*-1).toFixed(2);
    return (
        < Box className={classes.card}>
            <Card>
                <CardContent>
                    <Typography  >Income</Typography>
                    <Typography className={classes.income}> ₹{income}</Typography>
                </CardContent>
            </Card>


            <Card>
                <CardContent>
                    <Typography>Expense</Typography>
                    <Typography className={classes.expense}> ₹{expense}</Typography>
                </CardContent>
            </Card>
        </Box>

    )
}
export default ExpenseCard;
