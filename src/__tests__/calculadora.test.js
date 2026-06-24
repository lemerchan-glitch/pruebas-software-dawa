const {
  calcularDescuento,
  calcularTotal,
  validarEmail,
  formatearMoneda,
  aplicarIVA
} = require('../utils/calculadora');

// GRUPO 1: calcularDescuento
describe('calcularDescuento', () => {

  test('Aplica correctamente un descuento del 10%', () => {
    expect(calcularDescuento(100, 10)).toBe(90);
  });

  test('Retorna el precio completo si el descuento es 0%', () => {
    expect(calcularDescuento(200, 0)).toBe(200);
  });

  test('Retorna 0 si el descuento es 100%', () => {
    expect(calcularDescuento(150, 100)).toBe(0);
  });

  test('Lanza error si el precio es negativo', () => {
    expect(() => calcularDescuento(-50, 10))
      .toThrow('El precio no puede ser negativo');
  });

  test('Lanza error si el porcentaje es mayor a 100', () => {
    expect(() => calcularDescuento(100, 150))
      .toThrow('El porcentaje debe estar entre 0 y 100');
  });

});

// GRUPO 2: calcularTotal
describe('calcularTotal', () => {

  test('Calcula correctamente el total de múltiples productos', () => {
    const carrito = [
      { nombre: 'Libro', precio: 15.00, cantidad: 2 },
      { nombre: 'Cuaderno', precio: 3.50, cantidad: 4 }
    ];

    expect(calcularTotal(carrito)).toBe(44.00);
  });

  test('Retorna 0 si la lista está vacía', () => {
    expect(calcularTotal([])).toBe(0);
  });

  test('Lanza error si no se pasa un arreglo', () => {
    expect(() => calcularTotal('no es arreglo'))
      .toThrow('Se esperaba un arreglo');
  });

});

// GRUPO 3: validarEmail
describe('validarEmail', () => {

  test('Acepta un email con formato correcto', () => {
    expect(validarEmail('estudiante@instituto.edu.ec')).toBe(true);
  });

  test('Rechaza un email sin arroba', () => {
    expect(validarEmail('emailsinArroba.com')).toBe(false);
  });

  test('Rechaza un email sin dominio', () => {
    expect(validarEmail('usuario@')).toBe(false);
  });

});

// GRUPO 4: formatearMoneda
describe('formatearMoneda', () => {

  test('Formatea un entero correctamente', () => {
    expect(formatearMoneda(100)).toBe('$100.00');
  });

  test('Formatea un decimal con dos cifras', () => {
    expect(formatearMoneda(9.5)).toBe('$9.50');
  });

});

// GRUPO 5: aplicarIVA
describe('aplicarIVA', () => {

  test('Aplica correctamente el IVA del 15%', () => {
    expect(aplicarIVA(100)).toBe(115);
  });

  test('Retorna 0 cuando el precio es 0', () => {
    expect(aplicarIVA(0)).toBe(0);
  });

  test('Lanza error si el precio es negativo', () => {
    expect(() => aplicarIVA(-10))
      .toThrow('El precio no puede ser negativo');
  });

});