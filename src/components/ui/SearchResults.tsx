"use client";

import {FC, useState} from "react";
import CompanyCard from "@/components/company/CompanyCard";
import SkeletonCard from "@/components/ui/SkeletonCard";
import {Company} from "@/types/company";

interface SearchResultsProps {
    isLoading: boolean;
    filteredCompanies: Company[];
}

const SearchResults: FC<SearchResultsProps> = ({
                                                   isLoading,
                                                   filteredCompanies,
                                               }) => {
    const [visibleCount, setVisibleCount] = useState(5);

    const showMoreResults = () => {
        setVisibleCount((prev) => prev + 5);
    };

    const visibleCompanies = filteredCompanies.slice(0, visibleCount);
    const hasMoreResults = filteredCompanies.length > visibleCount;

    return (
        <div className="mt-6 mb-10">
            <h2 className="text-lg sm:text-[16px] mb-4 px-2 sm:px-0">
                Результаты поиска -{" "}
                <span className="text-[#4147BF]">
          {filteredCompanies.length} найденных компаний
        </span>
            </h2>

            {isLoading ? (
                <div className="flex flex-col gap-4">
                    {[...Array(3)].map((_, i) => (
                        <SkeletonCard key={i}/>
                    ))}
                </div>
            ) : filteredCompanies.length === 0 ? (
                <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <p className="text-lg">Компаний не найдено</p>
                    <p className="text-sm text-gray-500 mt-2">
                        Попробуйте изменить параметры поиска
                    </p>
                </div>
            ) : (
                <>
                    <div className="flex flex-col gap-4">
                        {visibleCompanies.map((company) => (
                            <CompanyCard key={company.bin} company={company}/>
                        ))}
                    </div>

                    {hasMoreResults && (
                        <div className="mt-6 flex justify-center">
                            <button
                                onClick={showMoreResults}
                                className="px-5 py-2.5 bg-white text-[#4147BF] border border-[#4147BF] rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                            >
                                Показать больше
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default SearchResults;
