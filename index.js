/* Essas variáveis ​​são para temporização */
const hourEl = document.getElementById('hour')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('Seconds')
const ampmEl = document.getElementById('ampm')
/*function para colcar tempo certo */
function updateClock(){
  /* chama tempo de computador */
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm = "AM"
  /*isso para saber AM ou PM
  função condicional
  */
  if(h>12){
    h = h - 12
    ampm = "PM"
  }
  /* Adicione um zero antes de dígitos únicos */

  h = h < 10 ? "0" + h : h ;
  m = m < 10 ? "0" + m : m ;
  s = s < 10 ? "0" + s : s ;

  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;
  ampmEl.innerText = ampm;
  /* Função de repetição de operação */ 
  setTimeout(() => {
    updateClock()
  }, 1000);

}
updateClock()