export const validarCnpj = (valor: string): boolean => {
  const regex = /^(?:\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/;
  return regex.test(valor);
};
