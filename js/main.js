// Función para calcular el tiempo restante
function calculateTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.now();
    const segundos = Math.floor((total / 1000) % 60);
    const minutos = Math.floor((total / 1000 / 60) % 60);
    const horas = Math.floor((total / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
        total,
        dias,
        horas,
        minutos,
        segundos
    };
}

// Función para mostrar el contador regresivo
function mostrarCountdown() {
    const endDate = new Date('2024-04-13T12:00:00'); // Fecha y hora objetivo
    
    function actualizarCountdown() {
        const tiempoRestante = calculateTimeRemaining(endDate);

        // Actualizar los elementos HTML con el tiempo restante
        document.getElementById('days').textContent = tiempoRestante.dias;
        document.getElementById('hours').textContent = tiempoRestante.horas;
        document.getElementById('minutes').textContent = tiempoRestante.minutos;
        document.getElementById('seconds').textContent = tiempoRestante.segundos;

        // Detener el contador cuando haya llegado a cero
        if (tiempoRestante.total <= 0) {
            clearInterval(intervalo);
            document.getElementById('countdown').textContent = '¡Ya ha llegado!';
        }
    }

    // Actualizar el contador cada segundo
    actualizarCountdown();
    const intervalo = setInterval(actualizarCountdown, 1000); // Actualizar cada segundo
}

// Mostrar el contador cuando se cargue la página
document.addEventListener('DOMContentLoaded', mostrarCountdown);