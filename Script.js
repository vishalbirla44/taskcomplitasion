const check_box = document.querySelectorAll('.check_box')
const warning = document.querySelector('.warning')
const Allinput = document.querySelectorAll('.goal_checked')
const progresValue = document.querySelector(".process_bar_grine")
const progressBar = document.querySelector('.process_bar')



const allGoal = {}

check_box.forEach((checkBox) => {
    checkBox.addEventListener('click', (e) => {
        const Allinputdetecter = [...Allinput].every((input) => {
                  return input.value

        })

        if(Allinputdetecter){
            checkBox.parentElement.classList.toggle("Completed")
       progresValue.style.width = '33.33%'

        }
        else{
             warning.style.display = "block"
                        
            }
    })
})


Allinput.forEach((input) => {
    input.addEventListener("focus", () => {
                    warning.style.display = "none"  
    })

    input.addEventListener('input', (e) => {
        allGoal[input.id] = {
            name:input.value,
            completed: false
            
        }
        localStorage.setItem('Allgoals' , JSON.stringify(allGoal))
        
    })
})








// error show 

// AllinputContainer.forEach((inputbox) => {
//     input = inputbox.querySelector(".goal_checked")
//     clicedBox = inputbox.querySelector(".check_box")

//      clicedBox.addEventListener("click" , () => {

//         if(clicedBox.classList.contains('')){
//             return
//         }
//         else if(!input.value.trim()) {
//             inputbox.classList.remove("Completed")
//         }
//         else{
//             warning.style.display = "none"
//        inputbox.classList.toggle("Completed")


//         }
//      })
// } )