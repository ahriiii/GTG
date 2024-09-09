// Email Handling

var sendMail = function () {
    (function () {
        emailjs.init("2BVln4tRECisJ02fq");
    })();
    var params = {
        clientName: document.querySelector("#full-name").value,
        phone: document.querySelector("#your-phone").value,
        email: document.querySelector("#your-email").value,
        subject: document.querySelector("#your-subject").value,
        message: document.querySelector("#your-message").value,
        toName: "GTG"
    };

    var serviceID = "service_xxfbtmp";
    var templateID = "template_dhj0ltr";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            swal("Message Sent", "Please wait for reply 😊", "success");
        }).catch();
}

// btt button
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Pop Message
document.querySelectorAll('.col img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.pop-up-wrap').style.display = 'block';
        document.querySelector('.pop-up img').src = image.getAttribute('src');
    }
})

document.querySelector('.pop-up span').onclick = () => {
    document.querySelector('.pop-up-wrap').style.display = 'none';
}

// AOS
AOS.init({
    duration: 1000
});