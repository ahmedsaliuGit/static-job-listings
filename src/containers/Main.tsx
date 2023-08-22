import Item from "../components/Item";
import { ItemType } from "../App";

type MainProps = {
  listings: ItemType[];
  addToFilter: (filter: string[]) => void;
  filter: string[];
};

export default function Main({ listings, addToFilter, filter }: MainProps) {
  const search = (listings: ItemType[]) => {
    return listings.filter((listing) => {
      if (filter.length > 0) {
        return filter.some(
          (para) =>
            listing.role === para ||
            listing.level === para ||
            listing.languages.includes(para) ||
            listing.tools.includes(para)
        );
      }

      return true;
    });
  };

  return (
    <main className="bg-background p-5">
      <ul className="lg:max-w-[1284px] lg:mx-auto lg:mt-10">
        {search(listings).map((item) => (
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
