import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Legend,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Legend,
    Filler,
)

const LineChartUsers = ({ data }) => {
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
            fill: true,
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
                <Line
                    data={chartData}
                    options={options}
                />
            ) : (
                <p>Carregando...</p>
            )}
        </>
    );
}

export default LineChartUsers;