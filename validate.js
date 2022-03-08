

document.getElementById('submit').onclick=function(){

valdiateName();
valdiateAge();
valdiateEmail();
/* // Submit or not to server
	var activateErrorMessage = valdiateName(); 

		if (activateErrorMessage == false)
		{
	      alert(" The form is not filled out correctly ")
		}

*/

}





// Function to valdiate the inputs
function valdiateName() {

	var nameValue = document.getElementById('namebo').value;
	
  for (var i=0; i < nameValue.length; i++) { 
      //Check name is entered correctly
      var alpha = " -abcdefghijklmnopqrstuvwxyz'ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	  if (alpha.indexOf(nameValue[i]) === -1) 

		{

			console.log("You enterd the wrong name");
			var messageHolder = document.getElementById('nameError');
			messageHolder.style.color = "red"; 
			messageHolder.innerHTML = " <h4> &emsp;  * The name should only contains letters:</h4>"; 
	        return false;
	        
		}

    }

}


function valdiateEmail (){

 var emailValue = document.getElementById('Email').value; 


	if ( emailValue.search("@") ==  -1)
	{

    var emailHolder = document.getElementById('EmailError');
		emailHolder.style.color = "red"; 
		emailHolder.innerHTML = " <h4> * Email must contain @:</h4>";

	}



}




function valdiateAge () {

 var ageValueString = document.getElementById('Age').value;
 var ageInt = parseInt(ageValueString);

	if ( (ageInt <  18)  )  
	{  

		var ageHolder = document.getElementById('AgeError');
		ageHolder.style.color = "red"; 
		ageHolder.innerHTML = " <h4> * Age is under 18 years old:</h4>";
	}

    if ((isNaN(ageValueString) == true)) {
		  var ageHolder2 = document.getElementById('AgeError2');
	 ageHolder2.style.color = "red"; 
	 ageHolder2.innerHTML = " <h4> * Age must be a number:</h4>";

    }




}






















