import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth }) {
    const currentYear = new Date().getFullYear();
    const appName = import.meta.env.VITE_APP_NAME || "Seu Gerenciador Financeiro";

    return (
        <>
            <Head title="Bem-vindo" />

            <div className="bg-gradient-to-r from-blue-400 to-indigo-600 min-h-screen flex flex-col justify-center items-center text-white">
                <header className="text-center">

                    <h1 className="text-3xl font-bold mb-6">
                        Gerencie Suas Finanças Pessoais com Facilidade!
                    </h1>

                    <p className="text-lg mb-10">
                        Controle seus gastos, organize seu orçamento e alcance seus objetivos financeiros.
                    </p>

                    <div className="flex justify-center space-x-4">
                        {auth.user ? (
                            <Link href={route('dashboard')} className="bg-blue-900 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                                Painel
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                                    Acessar
                                </Link>

                                <Link href={route('register')} className="bg-blue-900 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                                    Cadastrar
                                </Link>
                            </>
                        )}
                    </div>
                </header>

                <section className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg  w-72 text-center">
                        <h3 className="font-bold text-xl mb-4">
                            Controle Simples
                        </h3>
                        <p>
                            Monitore todas as suas despesas e receitascom facilidade, garantindo total controle.
                        </p>
                    </div>

                    <div className="bg-white text-black p-6 rounded-lg shadow-lg  w-72 text-center">
                        <h3 className="font-bold text-xl mb-4">
                            Relatórios detalhados
                        </h3>
                        <p>
                            Visualize gráficos e relatórios que ajudam a entender melhor seus hábitos financeiros.
                        </p>
                    </div>

                    <div className="bg-white text-black p-6 rounded-lg shadow-lg  w-72 text-center">
                        <h3 className="font-bold text-xl mb-4">
                            Planejamnento de Metas
                        </h3>
                        <p>
                            Defina metas de economia e veja como seu progresso avança no dia a dia.
                        </p>
                    </div>
                </section>

                <footer className="mt-16 text-center">
                    <p>® {currentYear} {appName}. Todos os direitos reservados.</p>
                </footer>
            </div>
        </>
    );
}