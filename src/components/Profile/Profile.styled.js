import styled from 'styled-components';

export const ProfileWrapper = styled.div `
    width: 300px;

    padding: 12px;

`;

export const ProfileDesc = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;
`;

export const ProfileAvatar = styled.img`
    width: 200px;
    height: auto;

    border-radius: 50%;

    margin-bottom: 20px;


`;

export const DescrName = styled.p `
    margin-bottom: 10px;

    font-size: 24px;
    font-weight: 700;
`;

export const DescTag = styled.p `
    margin-bottom: 10px;

    color: grey;
`;

export const DescLocation = styled.p `
    color: grey;    
`;

export const ProfileStatsList = styled.ul `
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;

    border-left: 1px solid #5F9EA0;
    border-right: 1px solid #5F9EA0;
    
    background: #F0FFFF;
`;

export const StatsListItem = styled.li `
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 85px;

    &:not(:last-child){
        border-right: 1px solid #5F9EA0;
    }
`;

export const StatsLabel = styled.span `
    color: grey;

    margin-bottom: 8px;

`;

export const StatsQuantity = styled.span `
    font-size: 18px;
    font-weight: 700;
`;