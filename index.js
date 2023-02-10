let form = document.forms.inp
let text = document.forms.p
let inps = document.querySelectorAll('.blue')
let submitBtn = document.querySelector('button')
let img_icon = document.querySelectorAll('label img')
let success = document.querySelector('.success')
let error = document.querySelector('.error')

form.onsubmit = (event) =>{
    event.preventDefault();
    let isEror = false 

    inps.forEach (inp =>{
        if(inp.value.length === 0 || inp.classList.contains('invalid')){
            isEror = true
        } 
    })

    if (isEror =  false ){
        submit ()
    } else {
        alert ('Что то не так ')
    }


    let error = 0

    inps.forEach(inp =>{
        inp.classList('error')
        if (inp.value.length === 0) {
            inp.parentElement.classList.add('invalid')
            error = true
            inp.nextElementSibling.classList.add('invalid')
            inp.nextElementSibling.innerHTML = 'Need to fill of ' + inp.name 
            error++
        } else {
            inp.nextElementSibling.classList.remove('invalid')
        }
})

    error.innerHTML = $;{error} ; $;{form.length}
    success.innerHTML = $;{error.length - error} ; $;{form.length}

    if (error === false) {
        onSubmit()
    } else {
        alert('Write correctly!')
    }
}



function submit () {
    let userDate  = {}

    let fm = new FormData (form)
    fm.forEach((value, key ) =>{
        userDate[key] = value
    })

    console.log(userDate)
}

let pattern = {
    name:/^[a-z ,.'-]+$/i,
    surname:/^[a-z ,.'-]+$/i,
    email:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone:/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    age:/^\S[0-9]{0,8}$/,
    momName:/^[a-z ,.'-]+$/i,
    dadName:/^[a-z ,.'-]+$/i,
    aboutYou:/\w/i,
    js:/\w/i,
    css:/\w/i,
    html:/\w/i
}

let w = 'Please enter your'

function validation (regex, field){
    if(regex.test(field.value)){ 
        field.style.borderColor = 'green'
        field.nextElementSibling.innerHTML = ''
        // field.previousElementSibling.style.color = 'green'
        field.nextElementSibling.style.display = 'none'
    } else{
        field.style.borderColor = 'red'
        field.nextElementSibling.innerHTML = w + ' ' + field.id 
        field.nextElementSibling.style.color = 'red'
        // field.previousElementSibling = 'red'
        field.nextElementSibling.style.display = 'block'
    }
}

inps.forEach(lbl =>{
    let inp = lbl.querySelector('input')


    inp.onkeyup = () =>{
        validation(pattern[inp.name],inp)
    }
})

form.onsubmit
