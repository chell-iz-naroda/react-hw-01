import { StatisticItem } from '../StatisticItem/StatisticItem';

import { StatisticWrapp, StatisticTopic, List, ListItem } from '../StatisticsList/StatisticList.styled';

import randomColorRGB from 'random-color-rgb'


export const StatisticList = ({ data, title }) => {
    console.log (title);
    return (
        <StatisticWrapp>
            {title && <StatisticTopic>Upload stats</StatisticTopic>}
            <List>
                {data.map(data => (
                    <ListItem key={data.id} style={{background:randomColorRGB()}}>
                        <StatisticItem item={data}/>
                    </ListItem>

                ))}
            </List>
        </StatisticWrapp>
    );
}