function count() {
  let x = document.getElementById('number').value
  let y = parseInt(x)
  let mar = document.getElementById('mar')
  mar.innerHTML = ''
  for (let j = 1; j < y + 1; j++) {
    for (let i = 1; i < y + 1; i++) {
      let phrase = document.createElement('p')
      phrase.innerText = i * j
      phrase.classList.add('box')
      mar.appendChild(phrase)
      mar.style.gridTemplateColumns = `repeat(${y}, 40px)`
      mar.style.gridTemplateRows = `repeat(${y}, 40px)`
      console.log(x)
    }
  }
}
