

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
 		else {
 			clearLoginInfo()
 			queryLogin()
 		}
  		
 }

function clearLogin() 
{ document.getElementById("user_err").style.display = 'none';
document.getElementById("pwd_err").style.display = 'none'; }

 function clearLoginInfo()
  { document.getElementById("user_id").value = '';document.getElementById("pwd_id").value = ''; }

 function queryLogin(){	alert("Continue work, getLogin verified. ");	}

function forgetPWD(){	
	document.getElementById("user_id").disabled = true;
	document.getElementById("pwd_id").disabled = true;
	document.getElementById("newPwd").disabled = true;
	document.getElementById("reNewPwd").disabled = true;
	document.getElementById("queryID").style.display = 'block'; }

function closeWinChng()
{ 	
	document.getElementById("queryID").style.display = 'none';
	document.getElementById("userchngID").value = '';
	document.getElementById("dobchng").value = '';
	document.getElementById("user_id").disabled = false;
	document.getElementById("pwd_id").disabled = false;
	 }


function changeUserPwd()
{
	var user = document.getElementById("userchngID");
	var date = document.getElementById("dobchng").value;
	var curDate = new Date().toString();  // returns current date.

	alert("Manage change password page:"+date+", Current Date: "+curDate);
} 

function newuser()
{ 
	//var w = window.innerWidth;
	//var h = window.innerHeight;
	alert("New User Register");
 }

function newUser(userID,passID,fname,lname,sex,age,DOB)
{

}

 function getUser(userID)
 {

 }
