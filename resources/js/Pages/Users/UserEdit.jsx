import InfoButton from "@/Components/Button/InfoButton";
import PrimaryButton from "@/Components/Button/PrimaryButton";
import SuccessButton from "@/Components/Button/SuccessButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function UserEdit({ user }) {
    const { data, setData, put, processing, errors } = useForm({
        id: user.id || '',
        name: user.name || '',
        email: user.email || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('users.update', { user: data.id }));
    }

    return (
        <AuthenticatedLayout>
            <Head title="Editar Usuário" />

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
                        <span>Editar</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-8xl py-4 px-1 sm:px-0 lg:px-0">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <div className="flex justify-between items-center p-3">
                        <h3 className="text-lg">Editar</h3>
                        <div className="flex space-x-1">
                            <Link href={route('users.index')}>
                                <InfoButton className="text-sm">
                                    Listar
                                </InfoButton>
                            </Link>

                            <Link href={route('users.show', { id: user.id })}>
                                <PrimaryButton className="text-sm">
                                    Visualizar
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>

                    <div className="p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm text-gray-700 dark:text-gray-300">
                                    Nome
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    autoComplete
                                    placeholder="Nome complerp dp Usuário"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full block mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                                    required
                                />
                                {errors.name && <span className="text-red-600">{errors.name}</span>}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm text-gray-700 dark:text-gray-300">
                                    E-mail
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete
                                    placeholder="E-mail"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full block mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                                    required
                                />
                                {errors.email && <span className="text-red-600">{errors.email}</span>}
                            </div>

                            <div className="flex justify-end">
                                <SuccessButton
                                    type="submit"
                                    disabled={processing}
                                >
                                    Salvar
                                </SuccessButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}