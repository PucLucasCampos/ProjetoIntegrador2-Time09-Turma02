export function calculateTimeRemaining(eventEndDate) {
  const dataFim = new Date(eventEndDate);
  const dataAtual = new Date();
  const diferenca = dataFim - dataAtual;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");
  const horas = Math.floor(diferenca / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");

  if (diferenca > 0) {
    return `${
      dias > 0 ? `${dias} dias` : `${horas > 0 ? `${horas}:` : "00:"}${minutos}`
    }`;
  } else {
    return "O evento já encerrou.";
  }
}
