const display = document.getElementById('display');

class Funciones {
    static limpiar() {
        display.value = '';
    }

    static borrar() {
        display.value = display.value.slice(0, -1);
    }
}

class Operadores {
    static agregarOperador(op) {
        display.value += ` ${op} `;
    }
}

class Digitos {
    static agregarDigito(digito) {
        display.value += digito;
    }
}

document.getElementById('btAc').addEventListener('click', () => {
    Funciones.limpiar();
});

document.getElementById('btBu').addEventListener('click', () => {
    Funciones.borrar();
});

document.getElementById('bMas').addEventListener('click', () => {
    Operadores.agregarOperador('+');
});

document.getElementById('bMen').addEventListener('click', () => {
    Operadores.agregarOperador('-');
});

document.getElementById('botX').addEventListener('click', () => {
    Operadores.agregarOperador('*');
});

document.getElementById('bDiv').addEventListener('click', () => {
    Operadores.agregarOperador('/');
});

for (let i = 0; i <= 9; i++) {
    document.getElementById(`bot${i}`).addEventListener('click', () => {
        Digitos.agregarDigito(i);
    });
}

document.getElementById('bIgu').addEventListener('click', () => {
    display.value = eval(display.value);
});