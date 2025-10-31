import dayjs from 'dayjs'

const form = document.querySelector('form')
const clientName = document.getElementById('client')
const selectedDate = document.getElementById('date')

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// Carrega data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
  //previne o comportamento padrão de carregar a página.
  event.preventDefault()

  try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim()

    // Previne que não haja nome definido.
    if (!name) {
      return alert('informe o nome do cliente')
    }

    // Recupera o horário selecionado.
    const hourSelected = document.querySelector('.hour-selected')

    // Previne que o horário não seja selecionado.
    if (!hourSelected) {
      return alert('Selecione a hora.')
    }

    // Recupera somente a hora.
    const [hour] = hourSelected.innerText.split(':')

    // Insere a hora na data.
    const when = dayjs(selectedDate.value).add(hour, 'hour')

    // Gera um ID
    const id = new Date().getTime()

    console.log({
      id,
      name,
      when,
    })
  } catch (error) {
    alert('Não foi possível realizar o agendamento')
    console.log(error)
  }
}
