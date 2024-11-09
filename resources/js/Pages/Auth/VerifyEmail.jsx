import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Verificação de e-mail" />

            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                Obrigado por se inscrever! Antes de começar, você poderia verificar
                seu endereço de e-mail clicando no link que acabamos de enviar
                para você? Se você não recebeu o e-mail, teremos prazer em enviar
                outro.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                    Um novo link de verificação foi enviado para o endereço de e-mail
                    que você forneceu durante o registro.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <PrimaryButton disabled={processing}>
                        Reenviar e-mail de verificação
                    </PrimaryButton>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="rounded-md text-sm text-gray-600 no-underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800 hover:underline"
                    >
                        Sair
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}