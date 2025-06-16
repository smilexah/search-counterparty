'use client';
import {useState, useEffect} from 'react';
import SearchBar from '../components/ui/SearchBar';
import Filters from '../components/ui/Filters';
import SearchResults from '@/components/ui/SearchResults';
import {useFavorites} from '@/context/FavoritesContext';
import {companies} from '@/data/companies';
import {Company, OrganizationType} from "@/types/company";
import Image from 'next/image';

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [cityFilter, setCityFilter] = useState('all');
    const [organizationFilter, setOrganizationFilter] = useState<OrganizationType | 'all'>('all');
    const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [pendingSearchQuery, setPendingSearchQuery] = useState('');

    const {favorites} = useFavorites();

    const handleSearch = () => {
        setIsLoading(true);
        setSearchQuery(pendingSearchQuery);

        setTimeout(() => {
            setIsLoading(false);
        }, 800);
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    useEffect(() => {
        let result = companies;

        if (statusFilter !== 'all') {
            result = result.filter(company => company.status === statusFilter);
        }

        if (cityFilter !== 'all') {
            result = result.filter(company => company.city === cityFilter);
        }

        if (organizationFilter !== 'all') {
            result = result.filter(company => company.organization === organizationFilter);
        }

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(company =>
                company.name.toLowerCase().includes(query) ||
                company.bin.includes(query)
            );
        }

        setFilteredCompanies(result);
    }, [searchQuery, statusFilter, cityFilter, organizationFilter, favorites]);

    const uniqueCities = [...new Set(companies.map(company => company.city))];

    return (
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-8 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm">
                <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">Поиск
                    контрагента</h1>
                <div className="text-sm text-gray-500 mb-4 sm:mb-6 flex items-center">
                    <span className="text-gray-400">Главная</span>
                    <svg className="w-3 h-3 mx-2 text-gray-400 fill-current" viewBox="0 0 320 512">
                        <path
                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                    </svg>
                    <span className="font-medium text-blue-600 dark:text-blue-400">Поиск контрагента</span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <div className="flex-grow">
                        <SearchBar
                            value={pendingSearchQuery}
                            onChange={setPendingSearchQuery}
                            onSearch={handleSearch}
                        />
                    </div>
                    <button
                        onClick={toggleFilters}
                        className="px-4 sm:px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
                    >
                        <Image
                            src="/icons/filter.svg"
                            width={20}
                            height={20}
                            alt="Фильтр"
                            className="mr-2 dark:invert"
                        />
                        Фильтры
                    </button>
                </div>
            </div>

            {showFilters && (
                <Filters
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                    cityFilter={cityFilter}
                    setCityFilter={setCityFilter}
                    organizationFilter={organizationFilter}
                    setOrganizationFilter={setOrganizationFilter}
                    cities={uniqueCities}
                />
            )}

            <SearchResults
                isLoading={isLoading}
                filteredCompanies={filteredCompanies}
            />
        </div>
    );
}