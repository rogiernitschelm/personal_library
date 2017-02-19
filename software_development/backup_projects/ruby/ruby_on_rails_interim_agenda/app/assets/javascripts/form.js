// initially hides the basic information when editing account

$(document).ready(function() {
  $(".toggle-basic-info").click(function(){
    $(".basic_info_form").toggle("slow")
  })
});
