import { BodyColumn } from "./TransactionItem.styled";

export const TransactionItem = ({ item: { id, type, amount, currency } }) => {
    return (
        <>
            <BodyColumn>{type}</BodyColumn>
            <BodyColumn>{amount}</BodyColumn>
            <BodyColumn>{currency}</BodyColumn>
        </>
    );
}