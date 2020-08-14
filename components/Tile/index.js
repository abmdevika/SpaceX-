import styles from './Tile.module.scss';

export default function Tile({ label, onTileClick }) {
  return (
    <span className={styles.Tile} onClick={() => onTileClick()}>
      {label}
    </span>
  );
}
