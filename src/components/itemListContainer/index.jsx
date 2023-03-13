import styles from './itemlist.module.scss';

const List = ({ greeting }) => {
  return (
    <div className={styles.itemListContainer}>
      <h3>{greeting}</h3>
    </div>
  );
};

export default List;
