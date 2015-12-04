function check(form)/*function to check userid & password*/
{
 
 if(form.userid.value == "softwaredesign" && form.pswrd.value == "test")
  {
    window.open('email-index.html')
  }
 else if(form.userid.value == " " || form.userid.value ==null)
 {
	 spa6.innerHTML="*Username is reqquired"
 }
 else if(form.pswrd.value == " " || form.pswrd.value ==null)
 {
	 spa7.innerHTML="*Password is reqquired"
 }
 else if(form.userid.value != "softwaredesign")
 {
	 spa6.innerHTML="*Error with Username"

  }
 else if(form.pswrd.value != "test")
 {
		spa7.innerHTML="*Error with Password"

  }

}