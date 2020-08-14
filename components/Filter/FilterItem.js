import Tile from '../Tile';
export default function FilterItem({
  customClass,
  title,
  filterItems,
  OnFilterClick,
  filter,
  selectedFilter,
}) {
  return (
    <div className={customClass}>
      <h5>{title}</h5>
      <div>
        {filterItems.map((filterItem) => (
          <Tile
            key={filterItem}
            label={filterItem}
            isActive={filterItem == selectedFilter}
            onTileClick={() => {
              OnFilterClick(filter, filterItem);
            }}
          />
        ))}
      </div>
    </div>
  );
}
