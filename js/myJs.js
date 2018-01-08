$(document).ready(function () {
    
    var height = 150;
    $(window).scroll(() => {
        if($(window).scrollTop() > height)
        {
            $("#navbar").addClass("active");
        }
        else
        {
            $("#navbar").removeClass("active");
        }
    })

    $(".motsp").addClass("active");

    $(".filter button").click(function(){
        $(".filter button").removeClass("active");
        $(this).addClass("active");
        var cat = $(this).data("cat");

        hieuung.isotope({filter: cat});
    })

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

    // Xử lý nút Scroll to Top
    $(window).scroll(function () { 
        scrollFunction();
    });

    var viTriTop = $(".container.tieude").offset().top; 

    function scrollFunction() {
        if ($(window).scrollTop() >  (viTriTop + 200) || $(document).scrollTop() > viTriTop + 200) {
            $("#myBtn").css("display","block");
        } else {
            $("#myBtn").css("display","none");
        }
    }

    // When the user clicks on the button, scroll to the top of the document

    $("#myBtn").click(function(){
        scrollToTop(600);
    })

    function scrollToTop(scrollDuration) {
        const   scrollHeight = window.scrollY,
                scrollStep = Math.PI / ( scrollDuration / 15 ),
                cosParameter = scrollHeight / 2;
        var     scrollCount = 0,
                scrollMargin,
                scrollInterval = setInterval( function() {
                    if ( window.scrollY>= viTriTop ) {
                        scrollCount = scrollCount + 1;  
                        scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                        window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
                    } 
                    else clearInterval(scrollInterval); 
                }, 15 );
    }
         
    

    // hiệu ứng laod isotope
    var hieuung = $('.main').isotope({
        // options
        itemSelector: '.motsp',
        layoutMode: 'masonry'
    });

    // layout Isotope after each image loads
    hieuung.imagesLoaded().progress( function() {
        hieuung.isotope('layout');
    });

    // fake data
    $("#xemthem").click(function() { 
        
        var cat = $(".filter button.active").data("cat");
        var html = '';
    
        for(let i = 1; i <= 10; i++)
        {
            html += `<a class="motsp other active">
                        <div class="card text-sm-center">
                            <img class="card-img-top" src="images/sp/sp${i}.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Ô tô điều khiển từ xa</h5>
                                <p class="card-text text-muted old"><del>150.000 VNĐ</del></p>
                                <p class="card-text new">100.000 VNĐ</p>
                            </div>
                        </div>
                    </a>`;
        }

        $('.main').append(html).isotope('reloadItems').isotope({ sortBy: 'original-order' });
        
    });

    

});