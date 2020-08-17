import { useRouter } from 'next/router';
import FilterItem from './FilterItem';
import styles from './Filter.module.scss';
let years = [];

for (let year = 2006; year <= 2020; year++) {
  years.push(year);
}
export default function Filter() {
  const router = useRouter();

  const handleRouting = (filter, query) => {
    let queryParam = '';
    queryParam = Object.keys(router.query)
      .map((key) => {
        if (filter === key) {
          return key + '=' + query;
        }
        return key + '=' + router.query[key];
      })
      .join('&');

    if (!(filter in router.query)) {
      queryParam += '&' + filter + '=' + query;
    }

    router.push('?' + queryParam, '?' + queryParam, {
      shallow: true,
    });
  };
  return (
    <div className={styles.filterContainer}>
      <h2>Filters</h2>
      <FilterItem
        title='Launch Year'
        filter='launch_year'
        selectedFilter={router.query.launch_year}
        customClass={styles.item}
        filterItems={years}
        OnFilterClick={handleRouting}
      />
      <FilterItem
        title='Successful Launch'
        filter='launch_success'
        selectedFilter={router.query.launch_success}
        customClass={styles.item}
        filterItems={['true', 'false']}
        OnFilterClick={handleRouting}
      />
      <FilterItem
        title='Successful Landing'
        filter='land_success'
        selectedFilter={router.query.land_success}
        customClass={styles.item}
        filterItems={['true', 'false']}
        OnFilterClick={handleRouting}
      />
    </div>
  );
}
