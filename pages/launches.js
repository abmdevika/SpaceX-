import Head from 'next/head';

import Filter from '../components/Filter';
import Card from '../components/Card';
import NoData from '../components/NoData';
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
