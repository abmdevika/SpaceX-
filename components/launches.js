import Filter from './Filter';
import Card from './Card';
import NoData from './NoData';
import styles from '../styles/Home.module.scss';

export default function Launches({ allLaunches }) {
  return (
    <div className={styles.body}>
      <Filter />
      <div className={styles.content}>
        {allLaunches.length > 0 ? (
          allLaunches.map((launch) => (
            <Card key={launch.mission_name} {...launch} />
          ))
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
}
