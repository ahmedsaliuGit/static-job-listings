import Item from "../components/Item";
import { ItemType } from "../App";

type MainProps = {
  listings: ItemType[];
  addToFilter: (filter: string[]) => void;
  filter: string[];
};

export default function Main({ listings, addToFilter, filter }: MainProps) {
  const filterByRole = listings.filter((listing) =>
    filter.includes(listing.role)
  );
  const filterByLevel = listings.filter((listing) =>
    filter.includes(listing.level)
  );
  const filterByLanguage = listings.filter((listing) =>
    filter.some((lang) => listing.languages.includes(lang))
  );
  const filterByTool = listings.filter((listing) =>
    filter.some((tool) => listing.tools.includes(tool))
  );

  const mergeFilter: ItemType[] = [
    ...new Set<ItemType>([
      ...filterByRole,
      ...filterByTool,
      ...filterByLanguage,
      ...filterByLevel,
    ]),
  ];

  return (
    <main className="bg-background p-5">
      <ul className="lg:max-w-[1284px] lg:mx-auto lg:mt-10">
        {mergeFilter.length > 0
          ? mergeFilter.map((item) => (
              <Item
                item={item}
                key={item.id}
                addToFilter={addToFilter}
                filter={filter}
              />
            ))
          : listings.map((item) => (
              <Item
                item={item}
                key={item.id}
                addToFilter={addToFilter}
                filter={filter}
              />
            ))}
      </ul>
    </main>
  );
}
