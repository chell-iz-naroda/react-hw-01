import styled from 'styled-components';

export const Table = styled.table`
    padding: 12px;
`;

export const HeadTable = styled.thead`

`;

export const HeadRow = styled.tr`
    background: #00BFFF;

    color: #fff;
`;

export const HeadColumn = styled.th`
    width: 200px;
    height: 50px;

    text-transform: uppercase;
`;

export const BodyTable = styled.tbody`
:nth-child(2n +4) {
    background-color:#ADD8E6;
}
`;

export const BodyRow = styled.tr`

`;