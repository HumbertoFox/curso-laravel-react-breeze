import InfoButton from "@/Components/Button/InfoButton";
import WarningButton from "@/Components/Button/WarningButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function UserShow({ user }) {
    const { flash } = usePage().props;

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
                        <div className="flex space-x-1">
                            <Link href={route('users.index')}>
                                <InfoButton className="text-sm">
                                    Listar
                                </InfoButton>
                            </Link>

                            <Link href={route('users.edit', { id: user.id })}>
                                <WarningButton className="text-sm">
                                    Editar
                                </WarningButton>
                            </Link>
                        </div>
                    </div>

                    {flash.success && (
                        <div className="p-3 m-3 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
                            <span>{flash.success}</span>
                        </div>
                    )}

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