export const number_format = (amount, decimals) => {
  var sign = (amount.toString().substring(0, 1) === "-");
  amount += ''; 
  amount = parseFloat(amount.replace(/[^0-9.]/g, '')); 

  decimals = decimals || 0; 

  if (isNaN(amount) || amount === 0) 
      return parseFloat(0).toFixed(decimals);

  amount = '' + amount.toFixed(decimals);

  var amount_parts = amount.split('.'),
      regexp = /(\d+)(\d{3})/;

  while (regexp.test(amount_parts[0]))
      // eslint-disable-next-line no-useless-concat
      amount_parts[0] = amount_parts[0].replace(regexp, '$1' + ',' + '$2');

  return sign ? '-$' + amount_parts.join('.') : '$' + amount_parts.join('.');
}

export const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

export const formatDate = (date) => {
  var fecha = new Date(date); 
  var mes = fecha.getMonth();
  var dia = fecha.getDate();
  var ano = fecha.getFullYear();

  const monthName = months[parseInt(mes)]
  return(dia +" "+monthName+" "+ano)
}
