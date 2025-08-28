// Configurar gráficos
function setupCharts() {
    // Gráfico de Visibilidade (azul)
    const visibilityCtx = document.getElementById('visibilityChart').getContext('2d');
    const visibilityGradient = visibilityCtx.createLinearGradient(0, 0, 0, 400);
    visibilityGradient.addColorStop(0, 'rgba(0, 153, 204, 0.3)');
    visibilityGradient.addColorStop(1, 'rgba(0, 153, 204, 0)');
    
    const visibilityChart = new Chart(visibilityCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Visualizações',
                data: [1200, 1900, 3500, 4200, 5900, 6800, 7500, 9200, 10500, 12200, 14200, 16500],
                borderColor: '#0099CC',
                backgroundColor: visibilityGradient,
                borderWidth: 3,
                pointRadius: 0,
                pointHoverRadius: 6,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 26, 0.9)',
                    titleColor: '#0099CC',
                    bodyColor: '#ffffff',
                    borderColor: '#0099CC',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    bodyFont: {
                        size: 14
                    },
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.03)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.4)',
                        callback: function(value) {
                            return value >= 1000 ? (value/1000).toFixed(0) + 'K' : value;
                        },
                        font: {
                            size: 12
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.4)',
                        font: {
                            size: 12
                        }
                    }
                }
            },
            animation: {
                duration: 1800,
                easing: 'easeOutQuart'
            }
        }
    });
    
    // Gráfico de Conversão (verde)
    const conversionCtx = document.getElementById('conversionChart').getContext('2d');
    const conversionGradient = conversionCtx.createLinearGradient(0, 0, 0, 400);
    conversionGradient.addColorStop(0, 'rgba(43, 182, 115, 0.3)');
    conversionGradient.addColorStop(1, 'rgba(43, 182, 115, 0)');
    
    const conversionChart = new Chart(conversionCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Leads Qualificados',
                data: [15, 22, 35, 45, 60, 90, 105, 130, 160, 190, 240, 310],
                backgroundColor: conversionGradient,
                borderColor: '#2BB673',
                borderWidth: 1,
                borderRadius: 4,
                categoryPercentage: 0.6,
                barPercentage: 0.8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 26, 0.9)',
                    titleColor: '#2BB673',
                    bodyColor: '#ffffff',
                    borderColor: '#2BB673',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    bodyFont: {
                        size: 14
                    },
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.03)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.4)',
                        font: {
                            size: 12
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.4)',
                        font: {
                            size: 12
                        }
                    }
                }
            },
            animation: {
                duration: 1800,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Animação ao rolar
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('premium-header')) {
                    entry.target.classList.add('visible');
                } else if (entry.target.classList.contains('cta-container')) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, { threshold: 0.1 });
    
    // Observar todos os elementos com animação
    document.querySelectorAll('.premium-header, .dashboard-card, .control-card, .cta-container').forEach(el => {
        observer.observe(el);
    });
}

// Inicializar tudo quando o documento carregar
document.addEventListener('DOMContentLoaded', function() {
    setupCharts();
    setupScrollAnimations();
    
    // Simular o carregamento inicial
    setTimeout(() => {
        document.querySelector('.premium-header').classList.add('visible');
    }, 300);
});
