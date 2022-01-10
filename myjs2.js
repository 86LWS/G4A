
function oBlur_2() {
	var ren=/^[A-Za-z0-9]{6,16}$|^[\u4E00-\u9FA5]{2,8}$///用户名
	var name=document.getElementById("Name");
    if (!ren.test(name.value)) { //用户名值为空
        document.getElementById("remind_2").innerHTML = "请输入用户名！";
    } else { //用户名值补为空
        document.getElementById("remind_2").innerHTML = "";
    }
}
function oFocus_2() {
    document.getElementById("remind_2").innerHTML = "";
}

function oBlur_4() {
	var reps=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
		var pas1=document.getElementById("pass1");
    if (!reps.test(pas1.value)) { //密码框value值为空
        document.getElementById("remind_4").innerHTML = "请输入密码！";
    } else { //密码框value值不为空
        document.getElementById("remind_4").innerHTML = "";
    }
}
function oFocus_4() {
    document.getElementById("remind_4").innerHTML = "";
}
function submitTest() {

	 var name=document.getElementById("Name");

	 var pas1=document.getElementById("pass1");

    if (!pas1.value && !name.value) { //用户框value值和密码框value值都为空    
        document.getElementById("remind_2").innerHTML = "请输入用户名！";
		 document.getElementById("remind_4").innerHTML = "请输入密码！";
        return false; //只有返回true表单才会提交
    }  else if (!name.value) { //密用户名value值为空
        document.getElementById("remind_2").innerHTML = "请输入用户名！";
        return false;
    }  else if (!pas1.value) { //密码value值为空
        document.getElementById("remind_4").innerHTML = "请输入密码！";
        return false;
    } 
	else
	{
		alert("登录成功");
		
		}
	
}

