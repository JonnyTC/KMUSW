$(document).ready(function(){
	$("#login").click(function(event) {
		var name = $("#username").val();
		var pwd = $("#password").val();
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
		else if(name!="" && pwd !="" && pwd.length >= 6)
		{
			if(name == "ltc0120@live.com" && pwd == "123123123"){
				alert("login success");
				window.location.href = "mainpage.html";
			}
			else{
				alert("email or password is wrong!");
				window.location.href = "index.html";
			}
			var user = $("input[type='radio']:checked").val();
			var type = 0;
			if(user == "Users"){
				type = 0;
			}
			else if(user == "ChannelAdmin"){
				type = 1;
			}
			else if(user == "Administrator"){
				type = 2;
			}
	
			var data = {
					"user":name,
					"pwd":pwd,
					"type":type
			};

		$.post("/practice_system/logintest",data,function(data, textStatus, xhr)
		{

			if(textStatus=="success")
			{
				if(data[0]["returnflag"]=="1")
				{
					setCookie("user",name,1);
					setCookie("SESSIONID",data[0]["SESSIONID"],1);
					setCookie("type",type,1);
					switch (type) {
						case 0:   
							window.location = "practice_system/html/UsersIndex.html";
							break;
						case 1:
							
							window.location = "practice_system/html/ChannelManagerIndex.html";
							break;
						case 2:
							
							window.location = "practice_system/html/WebSettingIndex.html";
							break;
						default:
							alert("UnknowWrong!");
							// statements_def
							break;
					}
				}
				else
				{
					alert("Email or password wrong");
				}
			}
			else
			{
				alert("Services Wrong");
			}
		});

		}
	});
});