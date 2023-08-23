import styled from 'styled-components';

export const List = styled.ul `
    display: flex;
    flex-direction: column;

    width: 300px;

    padding: 12px;
`;

export const ListItem = styled.li `
    display: flex;
    
    height:    70px;

    align-items: center;

    box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.5);

    &:not(:last-child) {margin-bottom: 10px;}

    padding: 10px;

`;


