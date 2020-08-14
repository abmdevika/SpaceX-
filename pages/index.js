import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Lunches from './launches';

import { fetchAPI } from '../lib/api';
import styles from '../styles/Home.module.scss';

export async function getServerSideProps(context) {
  const allLaunches = await fetchAPI('limit=1');

  return { props: { allLaunches } };
}

export default function Home({ allLaunches }) {
  const [allSpaceLaunch, setAllSpaceLaunch] = useState(allLaunches);
  const router = useRouter();

  useEffect(() => {
    router.push('?limit=10', undefined, {
      shallow: true,
    });
  }, []);

  useEffect(() => {
    let queryParam = '';
    queryParam = Object.keys(router.query)
      .map((key) => {
        return key + '=' + router.query[key];
      })
      .join('&');

    fetchAPI(queryParam).then((result) => {
      setAllSpaceLaunch(result);
    });

    console.log(queryParam, router.query);
  }, [
    router.query.limit,
    router.query.launch_year,
    router.query.launch_success,
    router.query.land_success,
  ]);

  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX Launch Program</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='SpaceX Launch Program' />
      </Head>
      <h1 className={styles.header}>SpaceX Launch Program</h1>

      <Lunches allLaunches={allSpaceLaunch} />

      <footer className={styles.footer}>
        <span>
          Developed by: <i>Devika B</i>
        </span>
      </footer>
    </div>
  );
}
