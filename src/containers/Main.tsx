import Item from "../components/Item";

export type ItemType = {
  id: number;
  company: string;
  logo: string;
  new: Boolean;
  featured: Boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

type MainProps = {
  listings: ItemType[];
};

export default function Main({ listings }: MainProps) {
  return (
    <main className="bg-background p-5">
      <ul className="lg:max-w-[1284px] lg:mx-auto lg:mt-10">
        {listings.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </main>
  );
}
