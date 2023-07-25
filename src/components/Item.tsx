import { ItemType } from "../App";

type ItemProps = {
  item: ItemType;
  filter: string[];
  addToFilter: (filter: string[]) => void;
};

export default function Item({ item, filter, addToFilter }: ItemProps) {
  const onFilterClick = (filt: string) => {
    if (filter.indexOf(filt) !== -1) return false;

    const newFilter = [...filter, filt];
    addToFilter(newFilter);
  };

  return (
    <li
      className={`relative mb-6 pt-7 md:pt-11 lg:bg-white lg:border-l-4 ${
        item.featured ? "lg:border-l-primary" : "lg:border-l-white"
      } lg:rounded lg:p-8 lg:shadow-[0_17px_30px_-25px_hsl(180,29%,50%)] lg:flex lg:items-center lg:justify-start gap-4`}
    >
      <div className="w-1/6 lg:w-auto absolute lg:relative left-6 lg:left-0 top-0">
        <img src={`${item.logo}`} alt={item.company} />
      </div>
      <div
        className={`bg-white border-l-4 lg:border-none ${
          item.featured ? "border-l-primary" : "border-l-white"
        } rounded p-5 pt-10 md:pt-14 lg:p-0 shadow-[0_20px_30px_-25px_hsl(180,29%,50%)] lg:shadow-none lg:flex-grow lg:flex lg:justify-between lg:items-center lg:gap-2`}
      >
        <div>
          <div>
            <span className="text-primary mr-6 lg:mr-4 font-medium">
              {item.company}
            </span>
            {item.new && (
              <span className="bg-primary text-white uppercase px-2 py-1 mr-2 rounded-full">
                new!
              </span>
            )}
            {item.featured && (
              <span className="bg-v-dark-grayish-cygan text-white uppercase px-2 py-1 mr-2 rounded-full">
                featured
              </span>
            )}
          </div>
          <h3 className="my-2 text-v-dark-grayish-cygan hover:text-primary hover:cursor-pointer font-bold lg:text-xl">
            {item.position}
          </h3>
          <ul className="flex justify-start items-center list-disc gap-5 text-dark-grayish-cygan mb-4 lg:mb-0">
            <li className="list-none">{item.postedAt}</li>
            <li>{item.contract}</li>
            <li>{item.location}</li>
          </ul>
        </div>
        <hr className="bg-dark-grayish-cygan h-[1px] mb-4 lg:hidden" />
        <div>
          <ul className="flex justify-start items-center flex-wrap gap-4 pr-4">
            <li
              className="bg-background hover:bg-primary hover:cursor-pointer hover:text-white text-primary p-2 rounded font-bold"
              onClick={() => onFilterClick(item.role)}
            >
              {item.role}
            </li>
            <li
              className="bg-background hover:bg-primary hover:cursor-pointer hover:text-white text-primary p-2 rounded font-bold"
              onClick={() => onFilterClick(item.level)}
            >
              {item.level}
            </li>
            {item.languages &&
              item.languages.map((language, index) => (
                <li
                  key={`lang-${index}`}
                  className="bg-background hover:bg-primary hover:cursor-pointer hover:text-white text-primary p-2 rounded font-bold"
                  onClick={() => onFilterClick(language)}
                >
                  {language}
                </li>
              ))}
            {item.tools &&
              item.tools.map((tool, index) => (
                <li
                  key={`tool-${index}`}
                  className="bg-background hover:bg-primary hover:cursor-pointer hover:text-white text-primary p-2 rounded font-bold"
                  onClick={() => onFilterClick(tool)}
                >
                  {tool}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
