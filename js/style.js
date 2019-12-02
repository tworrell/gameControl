window.onbeforeunload = function() {
                   var Ans = confirm("You are going into the beyond, are you sure!");
                   if(Ans==true)
                       return true;
                   else
                       return false;
               };
