import css from './FriendListItem.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.card}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.cardTitle}>{name}</p>
      <p style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
