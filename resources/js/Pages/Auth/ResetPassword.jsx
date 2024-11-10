import Icon from '@/Components/Icon';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/Button/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function ResetPassword({ token, email }) {
    const [isVisibledPassword, setIsVisibledPassword] = useState(false);

    const [isVisibledPasswordConfirm, setIsVisibledPasswordConfirm] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const togglePasswordVisibility = () => setIsVisibledPassword(!isVisibledPassword);
    const togglePasswordConfirmVisibility = () => setIsVisibledPasswordConfirm(!isVisibledPasswordConfirm);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Redefinir senha" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="E-mail" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Digite o seu e-mail"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
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
                            placeholder="Digite a nova senha"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            isFocused={true}
                            onChange={(e) => setData('password', e.target.value)}
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
                            type={isVisibledPasswordConfirm ? "text" : "password"}
                            id="password_confirmation"
                            name="password_confirmation"
                            placeholder="Confirme a nova senha"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
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
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Atualizar
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}