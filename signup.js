$(document).ready(function(){
	$("#continue").click(function(event) {
		var name = $("#email").val();
		var pwd = $("#password").val();
		var pwd2 = $("password2").val();
		var btd = $("birth").val();
		var sn = $("schoolnumber").val();
		if(name=="")
		{
		   alert("email cannot be empty");
		}
		else if(pwd=="")
		{
		   alert("password cannot be empty");
		}
		else if(pwd!="" && pwd.length < 6){
			alert("password cannot less than 6！");
		}
		else if(name!="" && pwd !="" && pwd != pwd2 && pwd.length >= 6 && btd != "" && sn != "")
		{
			if(name == "ltc0120@live.com" && pwd == "lyf5233539"){
				alert("Sign up successs");
				window.location.href= "mainpage.html"
			}
			else{
				alert("email or password is wrong!");
				window.location.href = "signup.html";
			}
	}
}
