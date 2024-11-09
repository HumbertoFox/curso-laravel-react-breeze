import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
    return (
        <aside
            className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 shadow-md sm:static sm:transform-none sm:block transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
        >

            <div className="relative px-4 py-6">
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 sm:hidden"
                >
                    <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div className="flex items-center space-x-2">
                    <ApplicationLogo className="h-8 w-8" />
                    <Link
                        href="/dashboard"
                        className="text-lg font-bold text-green-700 dark:text-green-200"
                    >
                        BetoFoxNet_Info
                    </Link>
                </div>

                <nav className="mt-6">
                    <Link
                        href={route('dashboard')}
                        className={`flex items-center px-4 py-2 mt-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 w-full ${route().current('dashboard') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                    >
                        Painel
                    </Link>

                    <Link
                        href={route('profile.edit')}
                        className={`flex items-center px-4 py-2 mt-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 w-full ${route().current('profile.edit') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                    >
                        Perfil
                    </Link>

                    <Link
                        method="post"
                        href={route('logout')}
                        as="button"
                        className="flex items-center px-4 py-2 mt-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 w-full"
                    >
                        Sair
                    </Link>
                </nav>
            </div>

        </aside>
    );
}