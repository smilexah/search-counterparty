'use client'
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface IncomeData {
    year: number;
    monthly: number[];
    quarterly: number[];
}

interface IncomeChartProps {
    incomes: IncomeData[];
}

const IncomeChart = ({ incomes }: IncomeChartProps) => {
    const [viewMode, setViewMode] = useState<'monthly' | 'quarterly'>('monthly');

    const latestYear = Math.max(...incomes.map(income => income.year));
    const yearData = incomes.find(income => income.year === latestYear);

    if (!yearData) {
        return <div>Данные о доходах отсутствуют</div>;
    }

    const chartData = viewMode === 'monthly'
        ? yearData.monthly.map((value, index) => ({
            name: `Месяц ${index + 1}`,
            value: value
        }))
        : yearData.quarterly.map((value, index) => ({
            name: `Квартал ${index + 1}`,
            value: value
        }));

    return (
        <div className="mt-8">
            <div className="flex justify-center mb-6">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button
                        type="button"
                        onClick={() => setViewMode('monthly')}
                        className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                            viewMode === 'monthly'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                        }`}
                    >
                        По месяцам
                    </button>
                    <button
                        type="button"
                        onClick={() => setViewMode('quarterly')}
                        className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                            viewMode === 'quarterly'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                        }`}
                    >
                        По кварталам
                    </button>
                </div>
            </div>

            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip
                            formatter={(value) => [`${value} ₸`, 'Доход']}
                            labelFormatter={(label) => `Период: ${label}`}
                        />
                        <Legend />
                        <Bar
                            dataKey="Доход"
                            fill="#3b82f6"
                            name="Доход (₸)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                Данные за {latestYear} год
            </p>
        </div>
    );
};

export default IncomeChart;