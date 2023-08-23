import { ItemLabel, ItemPercentage } from "./StatisticItem.styled";

export const StatisticItem = ({ item: { id, label, percentage } }) => {
    return (
        <>
            <ItemLabel>{label}</ItemLabel>
            <ItemPercentage>{percentage}%</ItemPercentage>
        </>
    );
}