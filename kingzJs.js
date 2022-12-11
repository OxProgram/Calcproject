

var prevData = ''; 
var curData = '';
var Operators = '';//undefined;
var computation = '';
var prevComput = '';
//var testing = document.getElementById("closeWin").click(); 

function operatorSign(dataImp)
{   
	if(this.prevComput != ''){ this.curData = this.prevComput;this.prevComput = '';document.getElementById("resAreaRes").value = ''; }
	if((this.prevData != '')&&(this.curData != '') ){ compute();this.curData = this.prevComput;this.prevComput = ''; }
	if((this.curData == '')&&(this.prevData != '')){ 
		updateDisplay(this.prevData.toString()+(this.Operators = dataImp).toString()); return; }

	this.Operators = dataImp; this.prevData = this.curData;  
	updateDisplay(this.prevData.toString()+this.Operators.toString());this.curData = ''; 
}

function updateDisplay(disp)
{
 	document.getElementById("resArea").value = '';
 	document.getElementById("resArea").value = disp.toString();
}

function updateDisplayRes(disp)
{
 	document.getElementById("resAreaRes").value = '';
 	document.getElementById("resAreaRes").value = disp.toString();
 	document.getElementById("resArea").value = '';
}

function getNumbersClicked(numb)
{       
	    if((numb == '.') && (this.curData.includes('.'))) { return }
		else{ this.curData = this.curData.toString()+numb.toString();
				updateDisplay(this.prevData.toString()+this.Operators.toString()+this.curData);  }
}

function getDel()
{
	this.curData = this.curData.slice(0,-1);
	updateDisplay(this.prevData.toString()+this.Operators.toString()+this.curData);
}

function clear()
{
	this.prevData = ''; this.Operators=''; 
	this.curData = ''; this.computation = '';
}
function clearAll()
{
	document.getElementById("resArea").value = ''; document.getElementById("resAreaRes").value = ''; 
  this.prevData = ''; this.curData='';this.Operators=''; this.computation = ''; this.prevComput = ''; 
}
function compute()
{   				if(isNaN(parseFloat(this.prevData))||isNaN(parseFloat(this.curData)))return 
   					switch(this.Operators) {
      					case '+':
        					this.computation = parseFloat(this.prevData) + parseFloat(this.curData);
        					updateDisplayRes(this.prevComput=this.computation); clear(); //alert(this.prevComput);
        					break;
      					case '-':
        					this.computation = parseFloat(this.prevData) - parseFloat(this.curData);
        					updateDisplayRes(this.prevComput=this.computation); clear();  //alert(this.prevComput);
        					break;
      					case '*':
        					this.computation = parseFloat(this.prevData) * parseFloat(this.curData);
        					updateDisplayRes(this.prevComput=this.computation); clear();  //alert(this.prevComput);
        					break;
      					case '/':
        					this.computation = parseFloat(this.prevData) / parseFloat(this.curData);
        					updateDisplayRes(this.prevComput=this.computation); clear(); //alert(this.prevComput);
        					break;
      					default:
      						return
    					}//closing the switch case statement 
    				 
 } //closing the = conditions











//CREATING THE LOGIN PAGE LOGIC

 function getLogin()
 {
 		clearLogin()
 		var user = document.getElementById("login").elements[0].value;
 		var pwd = document.getElementById("login").elements[1].value;

 		if((user.trim()=='')||(pwd.trim()==''))
 			{
 				if(user.trim() == '')
 					document.getElementById("user_err").style.display = 'block';
 				if(pwd.trim() == '')
 					document.getElementById("pwd_err").style.display = 'block';
 			}
 		else {	queryLogin();	}
  		
 }

function clearLogin() 
{ 	document.getElementById("user_err").style.display = 'none';
	document.getElementById("pwd_err").style.display = 'none';
	document.getElementById("errChngUser").style.display = 'none';
 	document.getElementById("errChngDob").style.display = 'none';
 	document.getElementById("newPwd").disabled = false;
	document.getElementById("reNewPwd").disabled = false;
	document.getElementById("showPass").disabled = false;

 }

 function clearLoginInfo()
  { document.getElementById("user_id").value = '';document.getElementById("pwd_id").value = ''; }

 function queryLogin(){	

 	var users = document.getElementById("login").elements[0].value;
 	var pwds = document.getElementById("login").elements[1].value;
 	var userN = (localStorage.getItem("username")).toString();
 	var PassWd = (localStorage.getItem("password")).toString();

 	var fnam = (localStorage.getItem("firstname")).toString();
 	var lnam = (localStorage.getItem("lastname")).toString();
 	var countri = (localStorage.getItem("country")).toString();
	var welcomeP = document.getElementById("welcomeP");
	var searchInfo = document.getElementById("searchedUser");

 		if((users.trim() === userN.trim())&&(pwds.trim() === PassWd.trim())){ 
 			clearLoginInfo(); 
 				welcomeP.setAttribute("style", "color:green;"); 
 				welcomeP.innerHTML = "Welcome, "+fnam+" "+lnam+" From "+countri;
 				searchInfo.innerHTML = "";
 				}
 			else{  searchInfo.setAttribute("style", "color:red;"); 
 					searchInfo.innerHTML = " invalid login ";welcomeP.innerHTML = "";    }
 		}

function forgetPWD(){	
	//location.reload();
	document.getElementById("user_id").disabled = true;
	document.getElementById("pwd_id").disabled = true;
	document.getElementById("newPwd").disabled = true;
	document.getElementById("reNewPwd").disabled = true;
	document.getElementById("showPass").disabled = true;
	document.getElementById("queryID").style.display = 'block';
	document.getElementById("newUserPage").style.display = 'none';

	 }

function closeWinChng()
{ 	
	document.getElementById("queryID").style.display = 'none';
	document.getElementById("userchngID").value = '';
	document.getElementById("dobchng").value = '';
	document.getElementById("userchngID").disabled = false;
	document.getElementById("dobchng").disabled = false;
	document.getElementById("user_id").disabled = false;
	document.getElementById("pwd_id").disabled = false;
	document.getElementById("errChngUser").style.display = 'none'; 
	document.getElementById("errChngDob").style.display = 'none'; 
	document.getElementById("newPwd").value = '';
	document.getElementById("reNewPwd").value = '';
	document.getElementById("errPWdFlag").innerHTML = "";
	document.getElementById("showPass").checked = false;
	document.getElementById("loginchng").value = "verify";
	 }


function changeUserPwd()
{
	var subTN = document.getElementById("loginchng").value;
	if(subTN.trim() === "change password") 
		getPasswordChange();

	var user = document.getElementById("userchngID").value;
	var inputDate =  new Date(document.getElementById("dobchng").value);
	var month = parseFloat(inputDate.getMonth())+1; // months starts from 0-11
	var year = parseFloat(inputDate.getFullYear());
	var day = parseFloat( inputDate.getDate());  //day returns only 0-6, use getDate to get exact day.

	var curDate = new Date();
	var curYear = parseFloat(curDate.getFullYear());
	var curMonth = parseFloat(curDate.getMonth())+1;
	var curDay = parseFloat(curDate.getDate());

		
		if((inputDate.toString()=="Invalid Date")||(user.trim()=="")) 
 		{
 			if(user.trim()=="") 
 				document.getElementById("errChngUser").style.display = 'block'; 
 			else{ document.getElementById("errChngUser").style.display = 'none'; }

 			if(inputDate.toString()=="Invalid Date") 
 				document.getElementById("errChngDob").style.display = 'block'; 
 			else{ document.getElementById("errChngDob").style.display = 'none'; }

 		}
 		else {

 				if(year < curYear){ getPassAccess(); }
 				else if(year == curYear){
 				 			if(month < curMonth){ getPassAccess(); }
 				 			else if(month == curMonth){
 				 						if(day <= curDay){ getPassAccess(); }
 				 						else{ document.getElementById("errChngDob").style.display = 'block'; }			
 				 			} // closing month else-if
 					 } // closing year else-if

 			 }  // closing if invalid-date
} 


function getPasswordChange()
{
	var errorP = document.getElementById("errPWdFlag");
	var pass = document.getElementById("newPwd").value;
	var pass2 = document.getElementById("reNewPwd").value;

	if((pass.trim() !== "")&&(pass2.trim() !== "")) 
 		{	
 					if(pass.trim() === pass2.trim()){ 
 						localStorage.setItem("password", pass2);
 						errorP.setAttribute("style", "color:#006400;"); errorP.style.display = 'block';
 						errorP.innerHTML = "password change successful!";	} 
 					else { 
 							errorP.setAttribute("style", "color:red;"); errorP.style.display = 'block';
 							errorP.innerHTML = "password mismatch";	 }
 			}
}


function getPassAccess()
{		//location.reload();
		var subTN = document.getElementById("loginchng");
		var errP = document.getElementById("errPWdFlag");
		var user = document.getElementById("userchngID").value;
		var inputDate =  new Date(document.getElementById("dobchng").value);
		var month = parseFloat(inputDate.getMonth())+1; 
		var year = parseFloat(inputDate.getFullYear());
		var day = parseFloat( inputDate.getDate());  
		var dates = (year+"-"+month+"-"+day).toString();
		var userDB = (localStorage.getItem("username")).toString();
		var dobDB = new Date(localStorage.getItem("birth_date"));
		var dayDB = parseFloat( dobDB.getDate()); 
		var monthDB = parseFloat(dobDB.getMonth())+1;
		var yearDB = parseFloat(dobDB.getFullYear());
		var dateDB = (yearDB+"-"+monthDB+"-"+dayDB).toString();

		if((dateDB.trim() === dates.trim())&&(user.trim() === userDB.trim())){ 
	 	clearLogin();
 		document.getElementById("userchngID").disabled = true;
		document.getElementById("dobchng").disabled = true;
  		if(subTN.value == "verify"){ subTN.title = "click to change password"; subTN.value = "change password"; }
			  }
		else{ 	errP.setAttribute("style", "color:red;"); 
				errP.style.display = 'block';
 				errP.innerHTML = "invalid username or date of birth";
 				 }
}


function reSearch()
{
	var usernameRes = document.getElementById("searchedUser");
	var resSach = (document.getElementById("resUserid").value).toString();
	var usern = (localStorage.getItem("username")).toString();

	if(usern.trim() === resSach.trim()){ 
		usernameRes.setAttribute("style", "color:green;");
		document.getElementById("searchedUser").innerHTML = "\t"+localStorage.getItem("firstname")+" "+localStorage.getItem("lastname");
		 }
	else{ 	
		if((usern.trim() === "")||(resSach === "")){ usernameRes.setAttribute("style", "color:red;");usernameRes.innerHTML = "\tinvalid username"; }
		else{ usernameRes.setAttribute("style", "color:red;");usernameRes.innerHTML = "\tuser does not exist"; }
			}
	
}

function closeNewUser()
{
		document.getElementById("newUserPage").style.display = 'none';
		document.getElementById("user_id").disabled = false;
		document.getElementById("pwd_id").disabled = false;
}

function openNewUser()
{		//location.reload();
		document.getElementById("user_id").disabled = true;
		document.getElementById("pwd_id").disabled = true;
		document.getElementById("queryID").style.display = 'none';
		document.getElementById("newUserPage").style.display = 'block';
}


 function getNewUser()
 {

 	var nuserid = document.getElementById("username").value;
 	var npassid = document.getElementById("passNew").value;
 	var nfname = document.getElementById("fname").value;
 	var nlname = document.getElementById("lname").value;
 	var nsex = document.getElementById("sex").value;
 	var nnational = document.getElementById("country").value;
 	var ndob = document.getElementById("dob").value;
 	var statusN = document.getElementById("statusNew");

 	if((nuserid.trim() !== "")&&(npassid.trim() !== "")){

 		 if((((nfname.trim() === "")||(nlname.trim() === ""))||((nsex.trim() === "")||(nnational.trim() === "")))||ndob.trim() === "")
 		 {
 		 			statusN.setAttribute("style", "color:red;");
 					statusN.innerHTML="personal details error";	
 		 }
 		 else
 		 {
 		 	 		localStorage.setItem("username", nuserid); localStorage.setItem("password", npassid);
 					localStorage.setItem("firstname", nfname); localStorage.setItem("lastname", nlname);
 					localStorage.setItem("sex", nsex); localStorage.setItem("country", nnational);
 					localStorage.setItem("birth_date", ndob);
 					statusN.setAttribute("style", "color:green;");
 					statusN.innerHTML="Successfully Saved!";
 					clearNewUser();
 		 }

 	}
 	else{ statusN.setAttribute("style", "color:red;");statusN.innerHTML = "empty username or password"; }

 }

function clearNewUser()
{
	document.getElementById("username").value = "";
 	document.getElementById("passNew").value = "";
 	document.getElementById("fname").value = "";
 	document.getElementById("lname").value = "";
 	document.getElementById("sex").value = "";
 	document.getElementById("country").value = "";
 	document.getElementById("dob").value = "";
}

function showNewPWD()
{
	var passNew = document.getElementById("passNew");
  	if (passNew.type === "password") { passNew.type = "text"; } 
    else { passNew.type = "password"; }
}

function showPWD()
{
	var password1 = document.getElementById("newPwd");
	var password2 = document.getElementById("reNewPwd");
  	if ((password1.type === "password")&&(password2.type === "password")) {
    	password1.type = "text";password2.type = "text";
  	} else {
    	password1.type = "password"; password2.type = "password";
 	 }
}
