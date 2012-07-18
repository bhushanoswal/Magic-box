// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .
$(document).ready(function(){
    var order =$('#matrix').val();
    var limit = order*order



    $(".value").keydown(function(event) {
        if(event.shiftKey)
            event.preventDefault();
        if (event.keyCode == 46 || event.keyCode == 8) {
        }
        else {
            if (event.keyCode < 95) {

                if (event.keyCode < 48 || event.keyCode > 57) {
                    if (event.keyCode >= 37 && event.keyCode <= 40) {
                    }
                    else
                    {
                        event.preventDefault();
                    }
                }
            }
            else {
                if (event.keyCode < 96 || event.keyCode > 105) {
                    event.preventDefault();
                }
            }
        }
    });

    $(".value").live('keyup',function() {

//       var flag = 0;
//        var obj = $(this).val();
//        var obj1 = $(this);

//        $(".value").each( function(){
//           if($(this).val() == obj && $(this)!= obj1 && $(this).val() !="")
//           {
//              console.log($(this).val()+"======="+$(this))
//              flag = 1;
//           }
//        });
//        if(flag == 1)
//            console.log("value repeated");


        if($(this).val() > limit) {
            alert("Value should be less" +limit );
        }
        else if($(this).val() < 1) {
            alert("Value should be positive integer" );
        }

    });
})
