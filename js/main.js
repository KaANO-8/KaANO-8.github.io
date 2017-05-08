var colorize = document.getElementById("colorize");
var image = document.getElementById("img");
var elems = document.getElementsByClassName("select-wrapper");
var file = document.getElementById("file");

function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("file").files[0]);

    oFReader.onload = function (oFREvent) {
        image.src = oFREvent.target.result;
        image.style.visibility = 'visible';

        elems[0].style.visibility = 'hidden';

		file.style.visibility = 'hidden';
        file.disabled = true;

        colorize.style.visibility = 'visible';
    };
};


function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}

/**
Make the colorized pic view here using image div
*/
async function Progress(){
	var progress = document.getElementById("progress");
	var progressbar = document.getElementById("progressbar");
    progress.style.visibility = 'visible';
    colorize.style.visibility='hidden';

    for(var i=0; i<=100 ; i+=25){
    	await sleep(1000);
        progressbar.style.width = i+"%";
    }
    await sleep(1000);
    progress.style.visibility = "hidden";
};

document.getElementById('file').addEventListener('change', PreviewImage, false);
colorize.addEventListener("click", 	Progress, false);