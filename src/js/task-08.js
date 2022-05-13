const form = document.querySelector(".login-form")
console.log(form);



form.addEventListener("submit", onFormSubmit)



function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены.")
    }

    const formData = new FormData(event.currentTarget)
    console.log(formData);
    let formShow = {

    }
    formData.forEach((value, name) => {
        formShow.name = name;
        formShow.value = value;
        console.log(formShow);
        // console.log("name", name);
        // console.log("value", value);
    })

//   console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
    
} 

