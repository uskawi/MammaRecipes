

function sendSubscribeMail(subscribeForm) {
    emailjs.send("usksidi","template_bzv8md3",{
        from_name: subscribeForm.subscriberName.value,
        user_email: subscribeForm.subscriberEmail.value,
})
.then(
    function(response) {
        console.log("SUCCESS", response);

        subscribetUserMessage.innerHTML = `
            <div class="subscribe-confirmation">
              <p>Thank you for subscribing.</p>
            </div>
        `
    },
    function(error) {
        console.log("FAILED", error);
        subscribetUserMessage.innerHTML = `
             <div classe="subscribe-confirmation">
               <p><span>OPPs!!!</span>Something Went Wrong Please Try Again.</p>
             </div>
        `
    }
);
return false; 
} 


function sendMail(contactForm) {
    emailjs.send("usksidi", "template_cwn7dy9", {
            from_name: contactForm.name.value,
            to_name: contactForm.emailAddress.value,
            message: contactForm.message.value,

    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            contactUserMessage.innerHTML = `
                <div class="email-confirmation">
                  <p>Your message bein send Successfully.</p>
                </div>;
            `;
        },
        function(error) {
            console.log("FAILED", error);
            contactUserMessage.innerHTML = `
                 <div classe="email-confirmation">
                   <p><span>OPPs!!!</span>Something Went Wrong Please Try Again.</p>
                 </div>;
            `;
        }
    );
    return false; 
} 