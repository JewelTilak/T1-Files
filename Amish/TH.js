
function calculate() 

{
var angle = parseFloat(document.getElementById("angle").value);
var AngleFactor = Math.tan(angle * Math.PI / 180);
var distance = parseFloat(document.getElementById("distance").value);
var viewHeight = parseFloat(document.getElementById("viewheight").value);
var TreeHeight = (AngleFactor*distance)+viewHeight;
var TreeRound = Math.round(TreeHeight*10)/10;
document.getElementById("Treeheight Result").innerHTML = "The height of the tree is "+TreeRound+" metres";
}

  // Complete the calculation.
  //Height of tree = (AngleFactor*Distance from tree)+Eye height of the viewer
  