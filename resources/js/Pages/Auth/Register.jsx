import Icon from '@/Components/Icon';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Register() {
    const [isVisibledPassword, setIsVisibledPassword] = useState(false);
    const [isVisibledPasswordConfirm, setIsVisibledPasswordConfirm] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const togglePasswordVisibility = () => setIsVisibledPassword(!isVisibledPassword);
    const togglePasswordConfirmVisibility = () => setIsVisibledPasswordConfirm(!isVisibledPasswordConfirm);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Registrar" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Nome" />

                    <TextInput
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="E-mail" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Digite o e-mail para o usuário"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Senha" />

                    <div className='relative'>
                        <TextInput
                            id="password"
                            type={isVisibledPassword ? "text" : "password"}
                            name="password"
                            placeholder="Digite a senha"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <button
                            type="button"
                            className='absolute right-2 top-[10px] hover:opacity-70 duration-500'
                            onClick={togglePasswordVisibility}
                        >
                            {isVisibledPassword ? (
                                <Icon icon="fa-regular fa-eye-slash" />
                            ) : (
                                <Icon icon="fa-regular fa-eye" />
                            )}
                        </button>
                    </div>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirme sua senha"
                    />
                    
                    <div className='relative'>
                        <TextInput
                            id="password_confirmation"
                            type={isVisibledPasswordConfirm ? "text" : "password"}
                            name="password_confirmation"
                            placeholder="Digite novamente a senha"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            required
                        />

                        <button
                            type="button"
                            className='absolute right-2 top-[10px] hover:opacity-70 duration-500'
                            onClick={togglePasswordConfirmVisibility}
                        >
                            {isVisibledPasswordConfirm ? (
                                <Icon icon="fa-regular fa-eye-slash" />
                            ) : (
                                <Icon icon="fa-regular fa-eye" />
                            )}
                        </button>
                    </div>

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 no-underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800 hover:underline"
                    >
                        Já está registrado?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Registrar
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}