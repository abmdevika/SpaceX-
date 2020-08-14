import Tile from '../Tile';
export default function FilterItem({
  customClass,
  title,
  filterItems,
  OnFilterClick,
  filter,
}) {
  return (
    <div className={customClass}>
      <h5>{title}</h5>
      <div>
        {filterItems.map((filterItem) => (
          <Tile
            key={filterItem}
            label={filterItem}
            onTileClick={() => {
              OnFilterClick(filter, filterItem);
            }}
          />
        ))}
      </div>
    </div>
  );
}
