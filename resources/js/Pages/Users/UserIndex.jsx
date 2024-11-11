import DangerButton from "@/Components/Button/DangerButton";
import PrimaryButton from "@/Components/Button/PrimaryButton";
import SuccessButton from "@/Components/Button/SuccessButton";
import WarningButton from "@/Components/Button/WarningButton";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function UserIndex({ users }) {
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
                        <span>Usuários</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-8xl py-4 px-1 sm:px-0 lg:px-0">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <div className="flex justify-between items-center p-3">
                        <h3 className="text-lg">Listar</h3>
                        <div className="flex space-x-4">
                            <SuccessButton className="ms-4">
                                Cadastrar
                            </SuccessButton>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">Nome</th>
                                    <th className="hidden sm:table-cell px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">E-mail</th>
                                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 tracking-wider">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                {users.data.map((user, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-2 text-sm text-gray-900 dark:text-gray-100">{user.id}</td>
                                        <td className="px-6 py-2 text-sm text-gray-900 dark:text-gray-100">{user.name}</td>
                                        <td className="hidden sm:table-cell px-6 py-2 text-sm text-gray-900 dark:text-gray-100">{user.email}</td>
                                        <td className="px-6 py-2 text-center text-gray-900 dark:text-gray-100">

                                            <Link href={route('users.show', { id: user.id })}>
                                                <PrimaryButton className="ms-1">
                                                    Visualizar
                                                </PrimaryButton>
                                            </Link>

                                            <WarningButton className="ms-1">
                                                Editar
                                            </WarningButton>

                                            <DangerButton className="ms-1">
                                                Apagar
                                            </DangerButton>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {users.per_page > 9 && (
                        <Pagination links={users.links} currentPage={users.current_page} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}