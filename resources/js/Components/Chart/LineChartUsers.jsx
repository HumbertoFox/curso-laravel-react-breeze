import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
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

    const monthsBackgroundsColors = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 71, 0.2)',
        'rgba(34, 193, 195, 0.2)',
        'rgba(253, 187, 45, 0.2)',
        'rgba(201, 203, 207, 0.2)',
        'rgba(255, 69, 0, 0.2)',
        'rgba(0, 255, 127, 0.2)',
    ];

    const monthsBordersColors = [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(255, 99, 71)',
        'rgb(34, 193, 195)',
        'rgb(253, 187, 45)',
        'rgb(201, 203, 207)',
        'rgb(255, 69, 0)',
        'rgb(0, 255, 127)',
    ];

    const labels = (data?.labels || []).map(month => {
        if (month >= 1 && month <= 12) {
            return monthNames[month - 1];
        }
        return null;
    }).filter(Boolean);

    const chartData = {
        ...data,
        labels: labels,
        datasets: data.datasets.map((dataset) => ({
            ...dataset,
            label: 'Cadastros',
            backgroundColor: labels.map((_, index) => monthsBackgroundsColors[index]),
            borderColor: labels.map((_, index) => monthsBordersColors[index]),
            borderWidth: 1,
            fill: true,
        })),
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Gráfico de Cadastros',
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function (tooltipItem) {
                        const label = tooltipItem.dataset.label || '';
                        const value = tooltipItem.raw;
                        return `${label}: ${value}`;
                    },
                },
            },
        },
    };

    return (
        <>
            {data?.labels ? (
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