
  	

 	
	
function oBlur_1() {
	var rep=/^((13[0-9])|(14[5|7])|(17[0-9])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$///手机号
	var phone=document.getElementById("Phone");
    if (!rep.test(phone.value)) { //用户框value与正则不匹配或为空
		document.getElementById("remind_1").innerHTML ="S'il vous plaît entrer le numéro de téléphone！"; 
    } else  { //用户框value值不为空
        document.getElementById("remind_1").innerHTML = "";
    }

}

function oFocus_1() {
    document.getElementById("remind_1").innerHTML = "";
}
function oBlur_2() {
	var ren=/^[A-Za-z0-9]{1,16}$|^[\u4E00-\u9FA5]{2,8}$///用户名
	var name=document.getElementById("Name");
    if (!ren.test(name.value)) { //用户名值为空
        document.getElementById("remind_2").innerHTML = "S'il vous plaît entrer le nom d'utilisateur！";
    } else { //用户名值补为空
        document.getElementById("remind_2").innerHTML = "";
    }
}
function oFocus_2() {
    document.getElementById("remind_2").innerHTML = "";
}
function oBlur_3() {
	var ree=/^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+///邮箱
	var ema=document.getElementById("Email");
    if (!ree.test(ema.value)) { //邮箱框value值为空
        document.getElementById("remind_3").innerHTML = "Veuillez saisir l'adresse e-mail！";
    } else { //邮箱框value值不为空
        document.getElementById("remind_3").innerHTML = "";
    }
}
function oFocus_3() {
    document.getElementById("remind_3").innerHTML = "";
}
function oBlur_4() {
	var reps=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
		var pas1=document.getElementById("pass1");
    if (!reps.test(pas1.value)) { //密码框value值为空
        document.getElementById("remind_4").innerHTML = "s'il vous plait entrez votre mot de passe！";
    } else { //密码框value值不为空
        document.getElementById("remind_4").innerHTML = "";
    }
}
function oFocus_4() {
    document.getElementById("remind_4").innerHTML = "";
}
function oBlur_5() {
	var pas1=document.getElementById("pass1");
 	var pas2=document.getElementById("pass2");
    if (pas2.value!=pas1.value) { //密码框value值为空
        document.getElementById("remind_5").innerHTML = "Mot de passe incorrect！";
    } else { //密码框value值不为空
        document.getElementById("remind_5").innerHTML = "";
    }
}
function oFocus_5() {
    document.getElementById("remind_5").innerHTML = "";
}

function oBlur_6() {
	var ren=/^[A-Za-z0-9]{1,64}$|^[\u4E00-\u9FA5]{2,8}$///地址
	var adress=document.getElementById("adress");
    if (!ren.test(adress.value)) { //地址为空
        document.getElementById("remind_6").innerHTML = "S'il vous plaît entrer l'adress";
    } else { //地址值补为空
        document.getElementById("remind_6").innerHTML = "";
    }
}


function submitTest() {
	 var phone=document.getElementById("Phone"); 
	 var name=document.getElementById("Name");
	 var ema=document.getElementById("Email");
	 var pas1=document.getElementById("pass1");
 	 var pas2=document.getElementById("pass2");
     var adress=document.getElementById("adress");
    if ( !phone.value && !pas1.value && !ema.value && !name.value) { //用户框value值和密码框value值都为空
        document.getElementById("remind_1").innerHTML = "S'il vous plaît entrer le numéro de téléphone！";
        document.getElementById("remind_2").innerHTML = "S'il vous plaît entrer le nom d'utilisateur！";
		document.getElementById("remind_3").innerHTML = "Veuillez saisir l'adresse e-mail！";  
		 document.getElementById("remind_4").innerHTML = "s'il vous plait entrez votre mot de passe！";
        return false; //只有返回true表单才会提交
    } else if (!phone.value) { //手机号value值为空
        document.getElementById("remind_1").innerHTML = "S'il vous plaît entrer le numéro de téléphone！";
        return false;
    } else if (!name.value) { //密用户名value值为空
        document.getElementById("remind_2").innerHTML = "S'il vous plaît entrer le nom d'utilisateur！";
        return false;
    } else if (!ema.value) { //邮箱value值为空
        document.getElementById("remind_3").innerHTML = "Veuillez saisir l'adresse e-mail！";
        return false;
    } else if (!pas1.value) { //密码value值为空
        document.getElementById("remind_4").innerHTML = "s'il vous plait entrez votre mot de passe！";
        return false;
    } else if (pas2.value!=pas1.value) { //pas1不等于pas2
        document.getElementById("remind_5").innerHTML = "Mot de passe incorrect！";
        return false;
    } else if (!adress.value) { //有无地址
        document.getElementById("remind_6").innerHTML = "S'il vous plaît entrer l'adress";
        return false;

    }else
	{
		window.open("succes.html","newwindow", "height=100%, width=100%, top=0, left=0,toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes, location=yes, status=no");
		
		}
	
}

