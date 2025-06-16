'use client';
import { useFavorites } from '@/context/FavoritesContext';
import CompanyCard from '@/components/company/CompanyCard';
import Container from '@/components/core/container';
import {companies} from "@/data/companies";
import { FaHeartBroken } from 'react-icons/fa';
import { Company } from "@/types/company";

export default function FavoritesPage() {
    const { favorites } = useFavorites();

    const favoriteCompanies = companies.filter((company: Company) =>
        favorites.includes(company.bin)
    );

    return (
        <Container>
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Избранные компании</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    {favoriteCompanies.length} сохраненных компаний
                </p>
            </div>

            {favoriteCompanies.length === 0 ? (
                <div className="text-center py-16">
                    <FaHeartBroken className="mx-auto text-4xl text-gray-400 mb-4" />
                    <h3 className="text-xl font-medium mb-2">Список избранного пуст</h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                        Добавляйте компании в избранное, нажимая на иконку закладки в карточках компаний
                    </p>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {favoriteCompanies.map((company) => (
                        <CompanyCard key={company.bin} company={company} />
                    ))}
                </div>
            )}
        </Container>
    );
}