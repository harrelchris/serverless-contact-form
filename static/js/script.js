const contact_form = document.getElementById("contact-form");
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

contact_form.addEventListener("submit", function(event){
    event.preventDefault();

    fetch("/submit", {
        method: "POST",
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(name, email, message);
        console.log("Form Submission Success");
        console.log(data);
        contact_form.reset();
    }).catch(function(error){
        console.log(name, email, message);
        console.error("Form Submission Error");
        console.error(error);
    });
});
