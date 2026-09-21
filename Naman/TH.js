function calculate(){
	var AngleFactor = Math.tan(angle.value * Math.PI / 180);
	var d = document.getElementById("distance").value;
	var eh = document.getElementById("viewheight").value;
	
	var result = ((AngleFactor * d) - -eh);
	
	document.getElementById("Treeheight Result").innerText = "The height of the tree is " + result + " metres"
}
 
 function clr(){
	document.getElementById("angle").value = "";
	document.getElementById("distance").value = "";
	document.getElementById("viewheight").value = "";
	document.getElementById("Treeheight Result").innerText = "";
}