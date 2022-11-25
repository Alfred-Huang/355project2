const submitFormButton = document.querySelector(".submit-button")

submitFormButton.addEventListener("click", (e)=>{
    const lastNameInput = document.querySelector(".lastNameInput");
    const firstNameInput = document.querySelector(".firstNameInput");
    const feedbackInput = document.querySelector(".feedBackInput");
    let formData = {
        lastName: lastNameInput.value,
        firstNameInput: firstNameInput.value,
        feedback: feedbackInput.value
    }

    fetch("/api/feedback-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    }).then(response =>{
        if(response.status === 200){
            lastNameInput.value = "";
            firstNameInput.value = "";
            feedbackInput.value = "";
        }
    });
})

