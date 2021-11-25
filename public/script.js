const button = document.querySelector('button')
const text = document.querySelector('h1')

let sentences = ['Sentence 1', 'Sentence 2', 'Sentence 3', 'Sentence 4', 'Sentence 5']

button.addEventListener('click', () => {
    text.innerHTML = sentences[Math.floor(Math.random()*sentences.length)]
    button.style.display = 'none'
    //go back to the start button after 15 secs
    setTimeout(function(){ 
        text.innerHTML = ''
        button.style.display = 'block'
    }, 15000);
})
