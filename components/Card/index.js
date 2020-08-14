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
      <h5>
        {mission_name} #{flight_number}
      </h5>
      <label>mission_id:</label>
      <ul>
        {mission_id.map((missionId) => (
          <li key={missionId}>{missionId}</li>
        ))}
      </ul>
      <ul>
        <li>launch_year: {launch_year}</li>
        <li> launch_success: {launch_success ? 'true' : 'false'}</li>
        <li> land_success: {mission_id.length > 0 ? 'true' : 'false'}</li>
      </ul>
    </div>
  );
}
