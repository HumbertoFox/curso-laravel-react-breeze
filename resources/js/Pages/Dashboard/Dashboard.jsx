import BarChartUsers from '@/Components/Chart/BarChartUsers';
import LineChartUsers from '@/Components/Chart/LineChartUsers';
import PieChartUsers from '@/Components/Chart/PieChartUsers';
import PolarChartUsers from '@/Components/Chart/PolarChartUsers';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ data }) {
    const renderChart = (ChartComponent, chartData) => (
        <div className="w-full h-[50vh] flex flex-1 p-4">
            <ChartComponent data={chartData} />
        </div>
    );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Painel
                </h2>
            }
        >
            <Head title="Painel" />

            <div className="w-full font-semibold leading-tight sm:px-0 lg:px-0">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-600 dark:text-gray-200">
                        Painel
                    </h2>

                    <nav className="text-sm text-gray-500 dark:text-gray-400">
                        <span>Painel</span>
                    </nav>
                </div>
            </div>

            <div className="w-full py-4 px-1 sm:px-0 lg:px-0">

                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                        {renderChart(BarChartUsers, data)}
                        {renderChart(LineChartUsers, data)}
                        {renderChart(PolarChartUsers, data)}
                        {renderChart(PieChartUsers, data)}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}