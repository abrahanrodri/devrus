
 var coll = document.getElementsByClassName("collapsible");
 var i;
 
 for (i = 0; i < coll.length; i++) {
   coll[i].addEventListener("click", function() {
     this.classList.toggle("active");
var content = this.nextElementSibling;
     if (content.style.maxHeight){
       content.style.maxHeight = null;
     } else {
       content.style.maxHeight = content.scrollHeight + "px";
     } 
   });
 }

var hidden = false;
function action() {
//create hidden click for freelancer and employer
  hidden = !hidden;
if(hidden) {
 $('.my-4').hide();
 $('#Freelance').hide();
} else {
 $('#Freelance').show();
 $('.my-4').show();
} 
}
var hide = false;
function actions() {
hide = !hide;
if(hide) {
 $('.my-4').hide();
 $('#Contract').hide();
} else {
 $('#Contract').show();
 $('.my-4').show();
}
}
// making the ajax function for post data
$(document).on("click", "post", function(){
$.ajax({
  type: "post", 
  url:"/update/" + selected.attr("data-id"),
   datatype:"json",
"": $("#").V(),
"":$("#").V(),
});

  //creating a delete function for once the event past
  $(document).on("click", "delete", funtion(){

    var selected = $(this).#();
    $.ajax({
      type:"GET"
      url:"/delete"/ + selected.attr("data-id"),
      $("#").V(),
      $("#").v(),
    });
  });

  //submit button need to submit the post
