import { GlobalStyle } from './GlobalStyle';

import { ProfileCard } from './Profile/ProfileCard';
import { StatisticList } from './StatisticsList/StatisticsList';
import { FriendsList } from './FriendList/FriendList';
import { TransactionTable } from './TransactionTable/TransactionTable';

import profileItems from '../user.json';
import data from '../data.json'
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <ProfileCard users={profileItems} />
      <StatisticList data={data} />
      <FriendsList friends={friends}/>
      <TransactionTable transactions={transactions}/>


      <GlobalStyle />
    </>
  );
};