import { motion } from 'framer-motion';

const SkeletonCard: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow animate-pulse h-full"
        >
            <div className="p-4 sm:p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1 pr-4 space-y-2">
                        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
                        <div className="flex gap-2 mt-2">
                            <div className="h-5 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-full" />
                            <div className="h-5 w-16 bg-green-100 dark:bg-green-900 rounded-full" />
                        </div>
                    </div>
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-md" />
                </div>

                <div className="flex flex-col flex-grow space-y-2 mt-2">
                    <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
            </div>
        </motion.div>
    );
};

export default SkeletonCard;
