import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
}

const SearchBar = ({ value, onChange, onSearch }: SearchBarProps) => {
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
    };

    return (
        <div className="relative flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Поиск по БИН/ИИН или фамилии..."
                    className="w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <FaSearch className="text-gray-400" />
                </div>
            </div>

            <button
                onClick={onSearch}
                className="py-3 px-6 bg-[#4147BF] text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-nowrap"
            >
                Начать поиск
            </button>
        </div>
    );
};

export default SearchBar;