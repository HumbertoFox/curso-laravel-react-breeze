import BarChartUsers from '@/Components/Chart/BarChartUsers';
import LineChartUsers from '@/Components/Chart/LineChartUsers';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ data }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Painel
                </h2>
            }
        >
            <Head title="Painel" />

            <div className="max-w-1x8 font-semibold leading-tight sm:px-0 lg:px-0">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-600 dark:text-gray-200">
                        Painel
                    </h2>

                    <nav className="text-sm text-gray-500 dark:text-gray-400">
                        <span>Painel</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-8xl py-4 px-1 sm:px-0 lg:px-0">

                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <div className="flex flex-col sm:flex-row justify-between p-4 space-x-4">

                        <div className='flex-1'>
                            <BarChartUsers data={data} />
                        </div>
                        <div className='flex-1'>
                            <LineChartUsers data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}