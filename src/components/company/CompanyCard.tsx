import Link from 'next/link';
import FavoriteButton from '@/components/favorites/FavoriteButton';
import {motion} from 'framer-motion';
import {Company} from "@/types/company";

interface CompanyCardProps {
    company: Company;
}

const CompanyCard = ({company}: CompanyCardProps) => {
    const truncateActivity = (text: string, maxLength = 100) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    const truncateName = (text: string, maxLength = 70) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
            className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden h-full"
        >
            <div className="p-4 sm:p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                    <div className="pr-2 flex-1">
                        <Link href={`/company/${company.bin}`}>
                            <h3 className="text-base sm:text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                {truncateName(company.name)}
                            </h3>
                        </Link>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                            <span
                                className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-opacity-15 bg-indigo-600 text-indigo-800 dark:text-indigo-200"
                                style={{backgroundColor: 'rgba(65, 71, 191, 0.15)'}}>
                                {company.organization}
                            </span>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                                company.status === 'active'
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            }`}>
                                {company.status === 'active' ? 'Действует' : 'Бездействует'}
                            </span>
                        </div>
                    </div>
                    <FavoriteButton bin={company.bin}/>
                </div>

                <div className="mt-2 flex-grow">
                    <p className="text-xs sm:text-[14px]">
                        <span className="text-[#9F9F9F]">БИН:</span> {company.bin}
                    </p>
                    <p className="mt-2 text-xs sm:text-[14px]">
                        <span className="text-[#9F9F9F]">Адрес:</span> {company.address}
                    </p>
                    <p className="mt-2 text-xs sm:text-[14px]">
                        <span
                            className="text-[#9F9F9F]">Вид деятельности:</span> {truncateActivity(company.activity, 80)}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm">
                        <span className="text-[#9F9F9F]">Руководитель:</span> {company.leader}
                    </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <Link
                        href={`/company/${company.bin}`}
                        className="inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                        Подробнее &rarr;
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default CompanyCard;