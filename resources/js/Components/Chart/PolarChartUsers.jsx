import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
)

const PolarChartUsers = ({ data }) => {
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

    const backgroundColors = labels.map((_, index) => monthsBackgroundsColors[index % monthsBackgroundsColors.length]);

    const chartData = {
        ...data,
        labels: labels,
        datasets: data.datasets.map((dataset) => ({
            ...dataset,
            label: 'Cadastros',
            backgroundColor: backgroundColors,
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
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0,0,0,0.8)',
            },
        },
        scales: {
            r: {
                pointLabels: {
                    display: true,
                    fontFamily: "Open Sans",
                    fontSize: 12,
                },
                grid: {
                    color: "#f0f0f0",
                    lineWidth: 3,
                },
                ticks: {
                    display: false,
                    beginAtZero: true,
                    suggestedMin: 0,
                    suggestedMax: 12,
                    stepSize: 1,
                },
            },
        },
        elements: {
            arc: {
                borderWidth: 1,
            },
        },
    };

    return (
        <>
            {data?.labels ? (
                <PolarArea
                    data={chartData}
                    options={options}
                />
            ) : (
                <p>Carregando...</p>
            )}
        </>
    );
}

export default PolarChartUsers;