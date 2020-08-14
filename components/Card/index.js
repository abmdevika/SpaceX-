import styles from './Card.module.scss';

export default function Card({
  links,
  mission_name,
  flight_number,
  mission_id,
  launch_year,
  launch_success,
}) {
  return (
    <div className={styles.Card}>
      <img src={links.mission_patch} alt={mission_name} width='256' />
      <div>
        <h5>
          {mission_name} #{flight_number}
        </h5>
        <label>mission_id:</label>
        <ul>
          {mission_id.map((missionId) => (
            <li key={missionId}>{missionId}</li>
          ))}
        </ul>
        <ul className={styles.launchDetails}>
          <li>
            <span>launch_year:</span> {launch_year}
          </li>
          <li>
            <span>launch_success:</span> {launch_success ? 'true' : 'false'}
          </li>
          <li>
            <span>land_success: </span>
            {mission_id.length > 0 ? 'true' : 'false'}
          </li>
        </ul>
      </div>
    </div>
  );
}
