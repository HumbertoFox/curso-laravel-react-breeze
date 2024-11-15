import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Legend,
)

const BarChartUsers = ({ data }) => {
    const monthNames = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    const labels = data.labels.map(month => monthNames[month - 1]);
    const chartData = {
        ...data,
        labels: labels,
        datasets: data.datasets.map((dataset) => ({
            ...dataset,
            label: 'Cadastros',
            backgroundColor: '#9bd0f5',
            borderColor: '#36a2eb',
            borderWidth: 1,
        })),
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Gráfico de Cadastros',
            },
        },
    };

    return (
        <>
            {labels ? (
                <Bar
                    data={chartData}
                    options={options}
                />
            ) : (
                <p>Carregando...</p>
            )}
        </>
    );
}

export default BarChartUsers;