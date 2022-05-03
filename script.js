let form = document.forms.reg
let div = document.querySelector('.user')
let name = document.querySelector('.name')
let surname = document.querySelector('.surname')
let pass = document.querySelector('.password')
let e = document.querySelector('.email')
let inp = document.querySelectorAll('input')
let p = document.querySelector('p')



form.onsubmit = (event) => {
    event.preventDefault()
    
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value,key)=>{
            for(let item of inp){
                if(item.getAttribute('name') === key){
                    if (value.length <= 0) {
                        item.style.border = '1px solid red'
                        item.style.background = 'rgb(223, 185, 159)'
                        p.style.display = 'block'
                    }else {
                    user[key] = value  
                    item.style.border = ''
                    p.style.display = 'none'
                    item.style.background = ''
                }
            }
        } 

    })



    console.log(user);

        
        
    }