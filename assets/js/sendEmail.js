function sendMail(contactForm) {
    emailjs.send("service_jlroibj", "template_4z9z3lg", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            //SweetAlert used to format the alert
            Swal.fire(
            {
             title: "Success!",
             text: "Your message has been sent successfully.",
             icon: "success",
             confirmButtonText: "Close",
             confirmButtonColor: "#3b3939"
              });
        },
        function(error) {
            console.log("FAILED", error);
            //SweetAlert used to format the alert
            Swal.fire(
            {
             title: "Oh Dear!",
             text: "An error has occured, your message has not been sent.",
             icon: "error",
             confirmButtonText: "Close",
             confirmButtonColor: "#3b3939"
              });
        }
    );
    return false;  // To block from loading a new page
}