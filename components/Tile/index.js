import styles from './Tile.module.scss';

export default function Tile({ label, onTileClick, isActive }) {
  const { Tile, active } = styles;

  return (
    <span className={isActive ? active : Tile} onClick={() => onTileClick()}>
      {label}
    </span>
  );
}
