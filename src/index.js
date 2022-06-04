document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log(event.target['new-task-description'].value)
    p = document.createElement('p');
    button = document.createElement('button')
    button.textContent = 'X'
    button.addEventListener('click', function(){
      this.parentNode.remove()
    })
    p.textContent = `${event.target['new-task-description'].value} `
    console.log(p)
    form.appendChild(p)
    p.appendChild(button)
  })
});