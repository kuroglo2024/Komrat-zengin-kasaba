emailjs.init("1lSO5g5HSdzSY1d-c");

function send() {

    if (document.getElementById("contact-form").checkValidity() == false) {
        document.getElementById("contact-form").reportValidity();
        return;
    }

    var date = {
        name: document.getElementById("name").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_2szzuhr", "template_l28xxyy", date)
        .then(function (response) {
            alert("Сообщение отправлено")
            document.getElementById("contact-form").reset();
        }, function (error) {
            alert("Не удалось отправить. Сервис занят.")
        })

}