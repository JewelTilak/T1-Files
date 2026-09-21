
  function calculate() 

 {
  var AngleFactor = Math.tan(document.getElementById("angle").value * Math.PI / 180);
  var distance = document.getElementById("distance").value;
  var eyeheight = document.getElementById("viewheight").value;
  var totalheight = distance*AngleFactor + eyeheight
  document.getElementById("Treeheight Result").innerText = "The height of the tree is " + totalheight + " metres";
 }
 
 
 function clearrr(){
	 document.getElementById("angle").value = "";
	 document.getElementById("distance").value = "";
	 document.getElementById("viewheight").value = "";
	 document.getElementById("Treeheight Result").innerText = "";
	 }
  // Complete the calculation.
  //Height of tree = (AngleFactor*Distance from tree)+Eye height of the viewer
  