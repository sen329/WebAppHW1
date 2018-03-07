function validTest(){
  var x = document.forms["myForm"]["name"].value;
  var y = document.forms["myForm"]["email"].value;
  var z = document.forms["myForm"]["phonenum"].value;
  var a = document.forms["myForm"]["date"].value;
  var b = document.forms["myForm"]["days"].value;
  var c = document.forms["myForm"]["room"].value;
  if(x == ""){
    alert("Required field is not filled out");
    return false;
  } else if(y == ""){
      alert("Required field is not filled out");
      return false;
    }else if(z == ""){
        alert("Required field is not filled out");
        return false;
      }else if(a null){
          alert("Required field is not filled out");
          return false;
        }else if(b == ""){
            alert("Required field is not filled out");
            return false;
          }else if(b isNaN(b)){
    alert("Days field must be number");
    return false;
  } else if(c == "Select room"){
    alert("Please choose a room");
    return false;
  }
}
