import IncomeChart from '@/components/company/IncomeChart';
import Link from 'next/link';
import {FaArrowLeft} from 'react-icons/fa';
import FavoriteButton from '@/components/favorites/FavoriteButton';
import {companies} from "@/data/companies";
import {Company} from "@/types/company";
import { notFound } from 'next/navigation';

interface Params {
    bin: string;
}

const CompanyPage = async ({params}: { params: Params }) => {
    const { bin } = await Promise.resolve(params);

    const company: Company | undefined = companies.find(
        (comp: Company) => comp.bin === bin
    );

    if (!company) {
        return notFound();
    }

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="mb-6">
                <Link
                    href="/"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
                >
                    <FaArrowLeft className="mr-2" /> Назад к поиску
                </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold tracking-tight leading-snug mb-2 break-words">
                            {company.name}
                        </h1>
                        <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-opacity-15 bg-indigo-600 text-indigo-800 dark:text-indigo-200"
                  style={{ backgroundColor: 'rgba(65, 71, 191, 0.15)' }}>
              {company.organization}
            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                company.status === 'active'
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            }`}>
              {company.status === 'active' ? 'Действует' : 'Бездействует'}
            </span>
                        </div>
                    </div>
                    <div className="shrink-0">
                        <FavoriteButton bin={company.bin} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-700/30 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-semibold mb-4">Информация о компании</h2>
                        <ul className="space-y-3 text-sm">
                            <li><strong className="text-gray-600 dark:text-gray-400">БИН:</strong> {company.bin}</li>
                            <li><strong className="text-gray-600 dark:text-gray-400">Город:</strong> {company.city}</li>
                            <li><strong className="text-gray-600 dark:text-gray-400">Адрес:</strong> <span className="break-words">{company.address}</span></li>
                            <li><strong className="text-gray-600 dark:text-gray-400">Руководитель:</strong> {company.leader}</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/30 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-semibold mb-4">Вид деятельности</h2>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{company.activity}</p>
                    </div>
                </div>

                <div className="mt-6 overflow-x-auto">
                    <h2 className="text-xl font-semibold mb-4 text-center">Доходы компании</h2>
                    <div className="min-w-[600px] md:min-w-0">
                        <IncomeChart incomes={company.incomes} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CompanyPage;