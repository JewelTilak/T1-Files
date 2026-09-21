
function calculate() {
  var AngleFactor = Math.tan(angleofinclination.value * Math.PI / 180);
  var angleofinclination = document.getElementById("angle").value;
  var distancefromtree = document.getElementById("distance").value;
  var eyeheightoftheviewer = document.getElementById("viewheight").value;
  var heightofthetree = Number.round(((AngleFactor * distancefromtree) + eyeheightoftheviewer),1);
  document.getElementById("Treeheight Result").innerHTML = "The height of the tree is " + heightofthetree;
 }
  
  // Complete the calculation.
  //Height of tree = (AngleFactor*Distance from tree)+Eye height of the viewer
  