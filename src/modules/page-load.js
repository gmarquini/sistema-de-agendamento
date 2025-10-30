// Arquivo para capturar o evento de quandoa  tela terminar de carregar os elementos e exibir os horários.

import { schedulesDay } from './schedules/load.js'

document.addEventListener('DOMContentLoaded', function () {
  schedulesDay()
})
