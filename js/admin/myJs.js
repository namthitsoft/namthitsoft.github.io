$(document).ready(function () {
    
    // Xử lý search ************************************
    function myFunction() {
        // Declare variables
        var input, filter, a, i;
        input = $('#myInput')[0];
        filter = input.value.toUpperCase();
        ma = document.querySelectorAll(".right .card-header");

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < ma.length; i++) {
            html = ma[i].innerHTML;
            if (html.toUpperCase().indexOf(filter) > -1) {
                ma[i].parentElement.parentElement.style.display = "";
            } else {
                ma[i].parentElement.parentElement.style.display = "none";
            }
        }
    }


    // Xử lý click cho một sp ****************************
    $(document).on('click', '.motsp', function() {
        $(".detail").addClass("active");
        $(".den").addClass("active");
    });

    $(".den").click(function(){
        $(this).removeClass("active");
        $(".detail").removeClass("active");
    })

    $(".nutx").click(function(){
        $(".detail").removeClass("active");
        $(".den").removeClass("active");
    })


});