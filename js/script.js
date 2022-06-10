


let button = document.querySelector(".btn-js");

button.onclick = function () {
    console.log('о, работает!')

    let firstName = document.querySelector("#name").value;

    let email = document.querySelector("#email").value;

    let notes = document.querySelector("#notes").value;

    emailjs.init("upQs2DuTsbiuYjHGn");
    // userID берём из настроек -- скрин ниже

    var templateParams = {
        name: firstName,
        notes: notes,
        email: email,
    };
    console.log(templateParams);
    
    emailjs.send("service_ue2nl4m", "template_3i9t89v", templateParams).then(
        function (response) {
            console.log("Хорош мужик!", response.status, response.text);
        },
        function (error) {
            console.log("Не повезло", error);
        }
    );


}

