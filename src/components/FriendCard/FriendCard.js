import { FriendStatus, FriendAvatar, FriendName } from "./FriendsCard.styled";



export const FriendCard = ({ friend: { avatar, name, isOnline, id } }) => {
    return (
        <>
            <FriendStatus style={{background: isOnline? 'green' : 'red' }}></FriendStatus>
            <FriendAvatar src={avatar} alt="User avatar" />
            <FriendName>{name}</FriendName>
        </>
    );
}