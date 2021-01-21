function showDiv() {
  if (document.getElementById('BestVerkocht').style.display === "none") {
    document.getElementById('BestVerkocht').style.display = "block";
    document.getElementById('Eten').style.display = "none";
    document.getElementById('Drinken').style.display = "none";
    document.getElementById('slideshow-container').style.display = "none";
  } else {
    document.getElementById('BestVerkocht').style.display = "none";
          document.getElementById('slideshow-container').style.display = "block";
  }
}

function showDiv2() {
  if (document.getElementById('Eten').style.display === "none") {
    document.getElementById('BestVerkocht').style.display = "none";
    document.getElementById('Drinken').style.display = "none";
    document.getElementById('slideshow-container').style.display = "none";
    document.getElementById('Eten').style.display = "block";
  } else {
    document.getElementById('Eten').style.display = "none";
    document.getElementById('slideshow-container').style.display = "block";
  }
}

function showDiv3() {
  if (document.getElementById('Drinken').style.display === "none") {
    document.getElementById('Drinken').style.display = "block";
    document.getElementById('Eten').style.display = "none";
    document.getElementById('BestVerkocht').style.display = "none";
    document.getElementById('slideshow-container').style.display = "none";
  }
  else {
    document.getElementById('Drinken').style.display = "none";
    document.getElementById('slideshow-container').style.display = "block";
  }
}
