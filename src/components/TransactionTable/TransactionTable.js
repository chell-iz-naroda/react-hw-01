import { TransactionItem } from '../TransactionItem/TransactionItem';

import { Table, HeadTable, HeadRow, HeadColumn, BodyTable, BodyRow } from './TransactionTable.styled';

export const TransactionTable = ({ transactions }) => {
    return (
        <Table>
            <HeadTable>
                <HeadRow>
                    <HeadColumn>Type</HeadColumn>
                    <HeadColumn>Amount</HeadColumn>
                    <HeadColumn>Currency</HeadColumn>
                </HeadRow>
            </HeadTable>

            <BodyTable>
                {transactions.map(item => (
                    <BodyRow key={item.id} >
                        <TransactionItem item={item} />
                    </BodyRow>
                ))}
            </BodyTable>
        </Table>
    );
}