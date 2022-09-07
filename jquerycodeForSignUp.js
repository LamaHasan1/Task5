$(document).ready(function()
{
    
//use key event on field
 //$("firstname").on("keypress",function(){
  //  $("span").hide();
// });

 $("#firstname").keyup(function(){
   //first name
   if(validatefirstname() ){
      //set input poerder green
      $("#firstname").css("border","2px solid green")
      //set massege
      $("#firstnameMSG").html("<p class='text-success'>First Name is valid</p>");
   }else{
      $("#firstname").css("border","2px solid red")
      $("#firstnameMSG").html("<p class='text-danger'>First Name is not valid</p>");
   }

 });

 //second name
 $("#SecondName").keyup(function(){
 if(validateSecondName() ){
   //set input poerder green
   $("#SecondName").css("border","2px solid green")
   //set massege
   $("#SecondNameMSG").html("<p class='text-success'>Second Name is valid</p>");
}else{
   $("#SecondName").css("border","2px solid red")
   $("#SecondNameMSG").html("<p class='text-danger'>Second Name is not valid</p>");
}

});
 //second name
 $("#SecondName").keyup(function(){
   if(validateSecondName() ){
     //set input poerder green
     $("#SecondName").css("border","2px solid green")
     //set massege
     $("#SecondNameMSG").html("<p class='text-success'>Second Name is valid</p>");
  }else{
     $("#SecondName").css("border","2px solid red")
     $("#SecondNameMSG").html("<p class='text-danger'>Second Name is not valid</p>");
  }
  
  });
  //User Name
  $("#Username").keyup(function(){
   if(validateUsername() ){
     //set input poerder green
     $("#Username").css("border","2px solid green")
     //set massege
     $("#UserNameMSG").html("<p class='text-success'>User Name is valid</p>");
  }else{
     $("#Username").css("border","2px solid red")
     $("#UserNameMSG").html("<p class='text-danger'>User Name is not valid</p>");
  }
});

  //Email
  $("#Email").keyup(function(){
   if(validateEmail() ){
     //set input poerder green
     $("#Email").css("border","2px solid green")
     //set massege
     $("#EmailMSG").html("<p class='text-success'>Email is valid</p>");
  }else{
     $("#Email").css("border","2px solid red")
     $("#EmailMSG").html("<p class='text-danger'>Email is not valid</p>");
  }
});
  //password
  $("#password").keyup(function(){
   if(validatePassword() ){
     //set input poerder green
     $("#password").css("border","2px solid green")
     //set massege
     $("#passwordMSG").html("<p class='text-success'>password is valid</p>");
  }else{
     $("#password").css("border","2px solid red")
     $("#passwordMSG").html("<p class='text-danger'>password is not valid</p>");
  }
});

$("#confirmPassword").keyup(function(){
   if(validateconfirmPassword() ){
     //set input poerder green
     $("#confirmPassword").css("border","2px solid green")
     //set massege
     $("#confirmPasswordMSG").html("<p class='text-success'>confirmPassword is valid</p>");
  }else{
     $("#confirmPassword").css("border","2px solid red")
     $("#confirmPasswordMSG").html("<p class='text-danger'>confirmPassword is not valid</p>");
  }

});
$("#button").click(function(){
if (validSignUp ()){
   $("h3").show()
}else{
   $("h3").hide()
}

})


});
//*************** */

function validatefirstname(){
   var firstname=$("#firstname").val();
   if(firstname.length >2){
      return true;
   }else{
      return false;
   }
   
}

function validateSecondName(){
   var SecondName=$("#SecondName").val();
   if(SecondName.length >2){
      return true;
   }else{
      return false;
   }
   
}
function validateUsername(){
   var Username=$("#Username").val();
   if(Username.length >2){
      return true;
   }else{
      return false;
   }
   
}

function validateEmail(){
   // get value of input email
   var Email=$("#Email").val();
   // use reular expression
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if(reg.test(Email)){
       return true;
    }else{
       return false;
    }

}
function validatePassword(){
   //get input password value
   var password=$("#password").val();
   // check it s length
   if(password.length > 8){
      return true;
   }else{
      return false;
   }

}
function validateconfirmPassword(){
   //get input password value
   var confirmPassword=$("#confirmPassword").val();
   // check it s length
   if(confirmPassword==$("#password").val()){
      return true;
   }else{
      return false;
   }

}
function validSignUp (){
   if(validatefirstname() && validateSecondName() && validateUsername() && validateEmail() && validatePassword()  && validateconfirmPassword()){
  
      return true;
   }else{
      return false;
   }
}