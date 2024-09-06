import { calculateRewards, getMonthYearFormat } from "../Utils/common.utils";
import "./ProductsTable.css";

const ProductsTable = ({ products= [] }) => {
    if(products.length) {
        return (
            <table className="table" data-testid="productstable">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Month</th>
                        <th align="right">Transaction Amount</th>
                        <th align="right">Reward Points</th>
                    </tr>
                </thead>
                
                    <tbody>
                        {products.map(user => user.transactions.map((transaction, j) =>(
                            <tr key={`${user.name}_${j}`}>
                                <td>{user.name}</td>
                                <td>{getMonthYearFormat(transaction.date)}</td>
                                <td align="right">{transaction.amount}</td>
                                <td align="right">{calculateRewards(transaction.amount)}</td>
                            </tr>
                        )))}
                    </tbody>
                    </table>
        )
    }
    return <p data-testid="nodatafound">No Data Found</p>
}

export default ProductsTable;