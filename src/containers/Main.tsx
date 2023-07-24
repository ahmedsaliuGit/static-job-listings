import Item from "../components/Item";
import { ItemType } from "../App";

type MainProps = {
  listings: ItemType[];
  addToFilter: (filter: string[]) => void;
  filter: string[];
};

export default function Main({ listings, addToFilter, filter }: MainProps) {
  const renderedFilter = listings.filter((item) => {
    if (filter.includes(item.role)) {
      return true;
    } else if (filter.includes(item.level)) {
      return true;
    } else if (item.languages.length > 0 || item.tools.length > 0) {
      const languagesTools = [...item.languages, ...item.tools];

      for (let langTool of filter) {
        return languagesTools.includes(langTool);
      }
    }

    return false;
  });

  return (
    <main className="bg-background p-5">
      <ul className="lg:max-w-[1284px] lg:mx-auto lg:mt-10">
        {renderedFilter.length > 0
          ? renderedFilter.map((item) => (
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
