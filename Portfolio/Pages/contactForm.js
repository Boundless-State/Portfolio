//* här var mitt försök innan jag förstod det simpla med formen hur vi skulle göra för att se den fungera :), används ej för övrigt.. men kul att spara */
(function() {
  emailjs.init("CHiUAaH8RoxjtF9Zw");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var templateParams = 
  {
    from_name: name,
    from_email: email,
    message: message
  };
  emailjs
    .send("service_4b50u9f", "template_870funl", templateParams) 
    .then(
      function(response) 
      {
        console.log("Success", response);
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      },
      function(error) 
      {
        console.error("Error", error);
        alert("Failed to send the message. Please try again later.");
      }
    );
});