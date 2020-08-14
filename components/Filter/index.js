import { useEffect } from 'react';
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
          if (typeof query === 'string') {
            return key + '=' + query.toLowerCase();
          }
          return key + '=' + query;
        }
        return key + '=' + router.query[key];
      })
      .join('&');

    if (!(filter in router.query)) {
      console.log(queryParam);
      queryParam += '&' + filter + '=' + query;
    }
    console.log(queryParam);
    router.push('?' + queryParam, '?' + queryParam, {
      shallow: true,
    });

    // router.push(
    //     `?limit=1&land_success=${isSuccess.toLowerCase()}`,
    //     undefined,
    //     {
    //       shallow: true,
    //     }
    //   )
  };
  return (
    <div className={styles.filterContainer}>
      <span>Filters</span>
      <FilterItem
        title='Launch Year'
        filter='launch_year'
        customClass={styles.item}
        filterItems={years}
        OnFilterClick={handleRouting}
      />
      <FilterItem
        title='Successful Launch'
        filter='launch_success'
        customClass={styles.item}
        filterItems={['True', 'False']}
        OnFilterClick={handleRouting}
      />
      <FilterItem
        title='Successful Landing'
        filter='land_success'
        customClass={styles.item}
        filterItems={['True', 'False']}
        OnFilterClick={handleRouting}
      />
    </div>
  );
}
