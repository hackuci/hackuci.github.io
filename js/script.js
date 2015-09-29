$(document).ready(function(){
  $(".button-collapse").sideNav();
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
  $('.scroll-link').on('click', function(event){
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    console.log(sectionID);
    scrollToID('#' + sectionID, 750);
  });
});

function change(){
  if(document.body.scrollTop != 0){
    document.getElementById('nav-bar').classList.remove('unscrolled');
  }
  if(document.body.scrollTop == 0){
    document.getElementById('nav-bar').classList.add('unscrolled');
  }
  // console.log('changed');
};

function scrollToID(id, speed){
  var offSet = 50;
  var targetOffset = $(id).offset().top - offSet;
  var mainNav = $('#main-nav');
  $('html,body').animate({scrollTop:targetOffset}, speed);
}

var imgList = document.getElementsByClassName("raining-img");
function removeClass(){
  for(i=0; i<imgList.length; i++)
    imgList[i].style.visibility = "visible";
}
