import { FriendCard } from '../FriendCard/FriendCard';

import { List, ListItem } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
    return (
        <List >
            {friends.map(friend => (

                <ListItem key={friend.id}>
                    <FriendCard friend={friend} />
                </ListItem>

            ))}
        </List>
    );
} 