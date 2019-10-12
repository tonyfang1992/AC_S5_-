let players = [
  { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]

const dataPanel = document.querySelector('#data-panel')

// write your code here

let htmlContent = ''
const icons = `<i class="fa fa-plus-circle" aria-hidden="true"></i><i class="fa fa-minus-circle" aria-hidden="true"></i>`

function displayPlayerList(players) {

  for (let i = 0; i < players.length; i++) {

    htmlContent += `
    <tr>
      <td>${players[i].name}</td>
      <td><span>${players[i].pts}</span> ${icons} </td>
      <td><span>${players[i].reb}</span> ${icons} </td>
      <td><span>${players[i].ast}</span> ${icons} </td>
      <td><span>${players[i].stl}</span> ${icons} </td>
      <td><span>${players[i].blk}</span> ${icons} </td>
    </tr>
    `
  }
  return htmlContent

}
dataPanel.innerHTML = displayPlayerList(players)

dataPanel.addEventListener('click', function (event) {

  const target = event.target.parentElement.children[0]
  let score = Number(target.innerText)
  console.log(target)

  if (event.target.classList.contains('fa-plus-circle')) {
    target.innerText = score + 1
  }
  else if (event.target.classList.contains('fa-minus-circle')) {
    if (score > 0) {
      target.innerText = score - 1
    }
  }

})