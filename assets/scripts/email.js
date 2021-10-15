// function userMessage(parametre){
//     if(this.status == 200){
//         contactUserMessage.innerHtml = `
//         <div classe="userMessage">
//         <h3>Your message bein send Successfuly</h3>
//         </div>`;
//     }else if 
// }
let contactUserMessage = document.getElementById('contactUserMessage');
function sendMail(contactForm) {
    emailjs.send("usksidi", "template_cwn7dy9", {
            from_name: contactForm.name.value,
            to_name: contactForm.emailAddress.value,
            message: contactForm.message.value
            
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            contactUserMessage.innerHTML = `
                <div class="email-confirmation">
                  <h3>Your message bein send Successfully</h3>
                </div>;
            `
        },
        function(error) {
            console.log("FAILED", error);
            contactUserMessage.innerHTML = `
                 <div classe="email-confirmation">
                   <h3><span>OPPs!!!</span>Something Went Wrong Please Try Again</h3>
                 </div>;
            `
        }
    );
    return false; 
}