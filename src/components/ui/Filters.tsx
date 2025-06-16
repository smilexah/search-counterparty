import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { OrganizationType } from '@/types/company';

interface FiltersProps {
    statusFilter: string;
    setStatusFilter: (value: string) => void;
    cityFilter: string;
    setCityFilter: (value: string) => void;
    organizationFilter: OrganizationType | 'all';
    setOrganizationFilter: (value: OrganizationType | 'all') => void;
    cities: string[];
}

const Filters = ({
    statusFilter,
    setStatusFilter,
    cityFilter,
    setCityFilter,
    organizationFilter,
    setOrganizationFilter,
    cities
}: FiltersProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const [localStatusFilter, setLocalStatusFilter] = useState(statusFilter);
    const [localCityFilter, setLocalCityFilter] = useState(cityFilter);
    const [localOrgFilter, setLocalOrgFilter] = useState(organizationFilter);

    const applyFilters = () => {
        setStatusFilter(localStatusFilter);
        setCityFilter(localCityFilter);
        setOrganizationFilter(localOrgFilter);
    };

    const resetFilters = () => {
        setLocalStatusFilter('all');
        setLocalCityFilter('all');
        setLocalOrgFilter('all');

        setStatusFilter('all');
        setCityFilter('all');
        setOrganizationFilter('all');
    };

    return (
        <div className={`rounded-lg shadow-md p-5 mb-8 ${
            isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4 mb-5">
                <div className="flex items-center">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-md mr-3">
                        <Image
                            src="/icons/filter.svg"
                            width={18}
                            height={18}
                            alt="Фильтр"
                            className={isDark ? 'invert' : ''}
                        />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Фильтры поиска</h3>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        По статусу компании
                    </label>
                    <select
                        value={localStatusFilter}
                        onChange={(e) => setLocalStatusFilter(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                        <option value="all">Все статусы</option>
                        <option value="active">Действует</option>
                        <option value="closed">Бездействует</option>
                    </select>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        По городу
                    </label>
                    <select
                        value={localCityFilter}
                        onChange={(e) => setLocalCityFilter(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                        <option value="all">Все города</option>
                        {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        По типу организации
                    </label>
                    <select
                        value={localOrgFilter}
                        onChange={(e) => setLocalOrgFilter(e.target.value as OrganizationType | 'all')}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                        <option value="all">Все типы</option>
                        <option value="ЮЛ">Юридические лица</option>
                        <option value="ФЛ">Физические лица</option>
                        <option value="ИП">Индивидуальные предприниматели</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                    onClick={applyFilters}
                    className="px-5 py-2.5 bg-[#4147BF] text-white rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm font-medium flex items-center justify-center"
                >
                    <Image
                        src="/icons/filter.svg"
                        width={16}
                        height={16}
                        alt="Фильтр"
                        className="mr-2 invert"
                    />
                    Фильтровать
                </button>
                <button
                    onClick={resetFilters}
                    className="px-5 py-2.5 bg-white text-[#4147BF] border border-[#4147BF] rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                >
                    <span className="flex items-center justify-center">
                        <FaTimes className="mr-2" />
                        Сбросить
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Filters;