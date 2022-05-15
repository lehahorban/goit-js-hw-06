const form = document.querySelector(".login-form")
console.log(form);



form.addEventListener("submit", onFormSubmit)



function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

  

    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені.")
    }
  
    else {
        let formShow = {
           email: email.value, 
           password: password.value,
       }
        
        console.log(formShow);
    }

//     const formData = new FormData(event.currentTarget)
//     console.log(formData);   
//    const values = Object.fromEntries(formData.entries())
//     console.log(values);

//   let formShow = {}

//     formData.forEach((value, name) => {

     
       
       
       
//     })
   

//   console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
    
} 

 // const values = Object.fromEntries(formData.entries())
    // console.log(values);