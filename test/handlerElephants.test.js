const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Entrada no argumento com count retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Entrada no argumento com names retorna uma array de elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Entrada no argumento com averageAge retorna a media de elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Entrada no argumento com location retorna a quantidade de elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Entrada no argumento que não é uma string retorna frase definida', () => {
    expect(handlerElephants(123)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
