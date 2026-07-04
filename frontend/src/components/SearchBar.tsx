type SearchBarProps = {
  placeholder: string;
};

function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border rounded-lg px-4 py-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default SearchBar;