type HeaderProps = {
  listingFiltered: string[];
  clearFilter: (filter: string[]) => void;
};

export default function Header({ listingFiltered, clearFilter }: HeaderProps) {
  const removeFilter = (removeItem: string) => {
    const newListting = listingFiltered.filter((item) => item !== removeItem);
    clearFilter(newListting);
  };

  return (
    <header className="w-full bg-background">
      <div className="w-full bg-[url('assets/images/bg-header-mobile.svg')] md:bg-[url('assets/images/bg-header-desktop.svg')] bg-no-repeat bg-cover bg-bottom bg-primary pt-40"></div>
      {listingFiltered.length > 0 && (
        <div className="-mt-8 lg:max-w-[1284px] lg:mx-auto px-5 lg:px-0">
          <div className="bg-white flex justify-between items-center pr-8 lg:pr-0">
            <ul
              className={`px-4 py-3 lg:px-8 lg:py-3 flex-grow flex justify-start items-center gap-4 flex-wrap`}
            >
              {listingFiltered.map((item) => (
                <li key={item} className="flex items-center">
                  <span className="text-primary px-2 py-1 bg-background rounded-l-sm">
                    {item}
                  </span>
                  <span
                    className="bg-primary px-2 py-2 rounded-r-sm hover:bg-v-dark-grayish-cygan hover:cursor-pointer"
                    onClick={() => removeFilter(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="#FFF"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                      />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
            <button
              className="text-primary self-stretch lg:px-12 hover:underline"
              onClick={() => clearFilter([])}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
