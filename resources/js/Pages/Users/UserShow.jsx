import PrimaryButton from "@/Components/Button/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function UserShow({ user }) {
    return (
        <AuthenticatedLayout>
            <Head title="Listar Usuários" />

            <div className="max-w-1x8 font-semibold leading-tight sm:px-0 lg:px-0">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-600 dark:text-gray-200">
                        Usuário
                    </h2>

                    <nav className="text-sm text-gray-500 dark:text-gray-400">
                        <Link href={route('dashboard')} className="hover:text-gray-700 dark:hover:text-gray-300">
                            Painel
                        </Link>
                        <span className="mx-1">/</span>
                        <Link href={route('users.index')} className="hover:text-gray-700 dark:hover:text-gray-300">
                            Usuários
                        </Link>
                        <span className="mx-1">/</span>
                        <span>Visualizar</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-8xl py-4 px-1 sm:px-0 lg:px-0">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <div className="flex justify-between items-center p-3">
                        <h3 className="text-lg">Visializar</h3>
                        <div className="flex space-x-4">
                            <Link href={route('users.index')}>
                                <PrimaryButton className="ms-4 tex">
                                    Listar
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gray-50 text-sm dark:bg-gray-700 p-4">
                        <div className="mb-2">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">ID: </span>
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{user.id}</span>
                        </div>

                        <div className="mb-2">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Nome: </span>
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{user.name}</span>
                        </div>

                        <div className="mb-2">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">E-mail: </span>
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{user.email}</span>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}