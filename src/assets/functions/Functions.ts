export function numberFormat(price: number) {
  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(price);

  return formattedPrice;
}


export function validFormatEmail(email: string) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}