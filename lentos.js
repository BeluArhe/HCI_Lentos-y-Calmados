// ====================================
// FUNCIONALIDADES PRINCIPALES
// ====================================

// 1. Carrito de compras
let carrito = [];

// Evento: Agregar al carrito
document.addEventListener('DOMContentLoaded', function() {
    const botonesAgregar = document.querySelectorAll('.btn-primary');
    
    botonesAgregar.forEach((boton, index) => {
        boton.addEventListener('click', function(e) {
            const card = this.closest('.card-vehiculo');
            if (card) {
                const nombre = card.querySelector('h3').textContent;
                const precio = card.querySelector('.precio').textContent;
                
                agregarAlCarrito(nombre, precio);
                mostrarConfirmacion(this);
            }
        });
    });

    // Botones de ver detalles
    const botonesDetalles = document.querySelectorAll('.btn-secondary');
    botonesDetalles.forEach(boton => {
        boton.addEventListener('click', function() {
            const card = this.closest('.card-vehiculo');
            if (card) {
                mostrarDetallesVehiculo(card);
            }
        });
    });
});

// 2. Función para agregar al carrito
function agregarAlCarrito(nombre, precio) {
    const item = {
        nombre: nombre,
        precio: precio,
        id: Date.now()
    };
    
    carrito.push(item);
    console.log('Agregado al carrito:', item);
    console.log('Carrito actual:', carrito);
    
    // Guardar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// 3. Mostrar confirmación visual
function mostrarConfirmacion(boton) {
    const textoOriginal = boton.textContent;
    boton.textContent = '✓ Agregado';
    boton.style.background = '#27ae60';
    
    setTimeout(() => {
        boton.textContent = textoOriginal;
        boton.style.background = '';
    }, 2000);
}

// 4. Mostrar detalles del vehículo
function mostrarDetallesVehiculo(card) {
    const nombre = card.querySelector('h3').textContent;
    const especificaciones = card.querySelector('.especificaciones').textContent;
    const precio = card.querySelector('.precio').textContent;
    
    alert(`
DETALLES DEL VEHÍCULO
=====================

${nombre}

${especificaciones}

Precio: ${precio}

¿Deseas agregar este vehículo al carrito?
    `);
}

// 5. Validación de formulario de contacto (para futura implementación)
function validarFormularioContacto(datos) {
    if (!datos.nombre || datos.nombre.trim() === '') {
        console.error('El nombre es requerido');
        return false;
    }
    
    if (!datos.email || !validarEmail(datos.email)) {
        console.error('Email inválido');
        return false;
    }
    
    if (!datos.mensaje || datos.mensaje.trim() === '') {
        console.error('El mensaje es requerido');
        return false;
    }
    
    return true;
}

// 6. Validar formato de email
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// 7. Cargar carrito desde localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
}

// 8. Limpiar carrito
function limpiarCarrito() {
    carrito = [];
    localStorage.removeItem('carrito');
    console.log('Carrito limpiado');
}

// Cargar carrito al iniciar
cargarCarrito();

// 9. Anclaje suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            const elemento = document.querySelector(href);
            if (elemento) {
                e.preventDefault();
                elemento.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

console.log('Lentos y Calmados - Script cargado correctamente');
