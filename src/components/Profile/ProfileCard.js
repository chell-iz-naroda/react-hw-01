import { ProfileWrapper, ProfileDesc, ProfileAvatar, DescrName, DescTag, DescLocation, ProfileStatsList, StatsListItem, StatsLabel, StatsQuantity } from "./Profile.styled";


export const ProfileCard = ({ users: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
    return (
        <ProfileWrapper>
            <ProfileDesc>
                <ProfileAvatar src={avatar}></ProfileAvatar>
                <DescrName>{username}</DescrName>
                <DescTag>@{tag}</DescTag>
                <DescLocation>{location}</DescLocation>
            </ProfileDesc>

            <ProfileStatsList>
                <StatsListItem>
                    <StatsLabel>Followers </StatsLabel>
                    <StatsQuantity>{followers}</StatsQuantity>
                </StatsListItem>
                <StatsListItem>
                    <StatsLabel>Views </StatsLabel>
                    <StatsQuantity>{views}</StatsQuantity>
                </StatsListItem>
                <StatsListItem>
                    <StatsLabel>Likes </StatsLabel>
                    <StatsQuantity>{likes}</StatsQuantity>
                </StatsListItem>
            </ProfileStatsList>
        </ProfileWrapper>
    );
};