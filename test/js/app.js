let currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("data-step");
  x[n].style.display = "flex";
  var x, y;
  x = document.getElementsByClassName("data-step");
  y = x[currentTab].getElementsByTagName("input");
  z = x[currentTab].getElementsByTagName("button");
  for (i = 0; i < y.length; i++) {
    y[i].addEventListener("change", function (e) {
      if (e.target.checked == true) {
        z[0].style.opacity = "1";
        z[0].disabled = false;
      } else {
        for (t = 0; t < y.length; t++) {
          if (y[t].checked == true) {
            z[0].style.opacity = "1";
            z[0].disabled = false;
            break;
          } else {
            z[0].style.opacity = "0.4";
            z[0].disabled = true;
          }
        }
      }
    });
  }
  progressStep();
}

function nextPrev(n) {
  setTimeout(function () {
    var x = document.getElementsByClassName("data-step");
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    showTab(currentTab);
  }, 600);
}

function progressStep() {
  let width = 100 / 7;
  let currentWidth = width * (currentTab + 1);
  document.getElementById("progress_bar").style.display = "block";
  document.getElementById("progress_bar").style.width = currentWidth + "%";

  if (currentWidth > 100) {
    document.getElementById("progress_bar").style.display = "none";
  }
}

// if(performance.navigation.type == 2)
// {
//     preventDefault();
//     var x = document.getElementsByClassName("data-step");
//         x[currentTab].style.display = "none";
//         if(currentTab !== 0){
//             showTab(currentTab - 1)
//         }else{
//             showTab(currentTab)
//         }
// }

window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
  console.log("ggg");
};
