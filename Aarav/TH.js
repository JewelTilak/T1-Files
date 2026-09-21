
function calculate() {
	var angleValue = Number(document.getElementById('angle').value);
	var distanceValue = Number(document.getElementById('distance').value);
	var viewHeightValue = Number(document.getElementById('viewheight').value);
  	var AngleFactor = Math.tan(angle.value * Math.PI / 180);
  // Complete the calculation.
  //Height of tree = (AngleFactor*Distance from tree)+Eye height of the viewer
	var treeHeight = (AngleFactor * distanceValue) + viewHeightValue;
        document.getElementById('Treeheight Result').innerHTML = 
            "Tree Height = " + treeHeight.toFixed(1) + " metres";
        }

