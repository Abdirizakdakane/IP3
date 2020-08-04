$(document).ready(function() {
    $("form#formValidation").submit(function() {
      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("textarea#message").val();
      if(name && email){
        alert(  " Hello " + name + ", We thank you for reaching out to us ." + " We have warmly received your message.");
      } else{
        alert(" There's an invalid name or email in this form. Please try again");
      }
    });
});