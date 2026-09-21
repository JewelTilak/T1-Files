
function calculate() 
   
	
 {
    var angle.value= document.getElementById("angle").value; // This will take the input from user and store the value in angle.value
	var distancefromtree = document.getElementById("distance").value;// This will take the input from user and store the value in distancefromtree
	var eyeheight = document.getElementById("viewheight").value; // This will take the input from user and store the value in eyeheight
	
    var AngleFactor = Math.tan(angle.value * Math.PI / 180);
	
	var treeheight = (AngleFactor*distancefromtree)+eyeheight; // This is to calculate the tree height
	document.getElementById("Treeheight Result").innerHTML= "The height of the tree is: "+ treeheight; // This is the final output statement
 }
  // Complete the calculation.
  //Height of tree = (AngleFactor*Distance from tree)+Eye height of the viewer
  