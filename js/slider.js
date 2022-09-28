$(document).ready(function(){
    $('.selector').click(function(){
        if($(this).hasClass('on')){

        }else{
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
            $(this).parent().siblings().children().toggleClass('none');
        }
    });
});
        
        
        $(document).ready(function(){
        //current position
        var pos1 = 0;
        //number of slides
        var totalSlides1 = $('#slider-wrap1 ul li').length;
        //get the slide width
        var sliderWidth1 = $('#slider-wrap1').width();


        $(document).ready(function () {
            /*****************
             BUILD THE SLIDER
            *****************/
            //set width to be 'x' times the number of slides
            $('#slider-wrap1 ul#slider1').width(sliderWidth1 * totalSlides1);

            //next slide  
            $('#next1').click(function () {
                slideRight1();
            });

            //previous slide
            $('#previous1').click(function () {
                slideLeft1();
            });



            /*************************
             //*> OPTIONAL SETTINGS
            ************************/
            //automatic slider
            var autoSlider1 = setInterval(slideRight1, 3000);

            //for each slide 
            $.each($('#slider-wrap1 ul li'), function () {

                //create a pagination
                var li = document.createElement('li');
                $('#pagination-wrap1 ul').append(li);
            });

            //counter
            countSlides1();

            //pagination
            pagination1();

            //hide/show controls/btns when hover
            //pause automatic slide when hover
            $('#slider-wrap1').hover(
                function () {
                    $(this).addClass('active');
                    clearInterval(autoSlider1);
                },
                function () {
                    $(this).removeClass('active');
                    autoSlider1 = setInterval(slideRight1, 3000);
                }
            );



        }); //DOCUMENT READY

        /***********
         SLIDE LEFT
        ************/
        function slideLeft1() {
            pos1--;
            if (pos1 == -1) {
                pos1 = totalSlides1 - 1;
            }
            $('#slider-wrap1 ul#slider1').css('left', -(sliderWidth1 * pos1));

            //*> optional
            countSlides1();
            pagination1();
        }
        /************
         SLIDE RIGHT
        *************/
        function slideRight1() {
            pos1++;
            if (pos1 == totalSlides1) {
                pos1 = 0;
            }
            $('#slider-wrap1 ul#slider1').css('left', -(sliderWidth1 * pos1));

            //*> optional 
            countSlides1();
            pagination1();
        }

        /************************
         //*> OPTIONAL SETTINGS
        ************************/
        function countSlides1() {
            $('#counter1').html(pos1 + 1 + ' / ' + totalSlides1);
        }

        function pagination1() {
            $('#pagination-wrap1 ul li').removeClass('active');
            $('#pagination-wrap1 ul li:eq(' + pos1 + ')').addClass('active');
        }
    });

// 
// 
// 
// 
// 

$(document).ready(function(){
    $('.none').click(function(){
        $(this).siblings().addClass('none');
        $(this).removeClass('none');
    });
});
        
        
        $(document).ready(function(){
        //current position
        var pos2 = 0;
        //number of slides
        var totalSlides2 = $('#slider-wrap2 ul li').length;
        //get the slide width
        var sliderWidth2 = $('#slider-wrap2').width();


        $(document).ready(function () {
            /*****************
             BUILD THE SLIDER
            *****************/
            //set width to be 'x' times the number of slides
            $('#slider-wrap2 ul#slider2').width(sliderWidth2 * totalSlides2);

            //next slide  
            $('#next2').click(function () {
                slideRight2();
            });

            //previous slide
            $('#previous2').click(function () {
                slideLeft2();
            });



            /*************************
             //*> OPTIONAL SETTINGS
            ************************/
            //automatic slider
            var autoSlider2 = setInterval(slideRight2, 3000);

            //for each slide 
            $.each($('#slider-wrap2 ul li'), function () {

                //create a pagination
                var li = document.createElement('li');
                $('#pagination-wrap2 ul').append(li);
            });

            //counter
            countSlides2();

            //pagination
            pagination2();

            //hide/show controls/btns when hover
            //pause automatic slide when hover
            $('#slider-wrap2').hover(
                function () {
                    $(this).addClass('active');
                    clearInterval(autoSlider2);
                },
                function () {
                    $(this).removeClass('active');
                    autoSlider2 = setInterval(slideRight2, 3000);
                }
            );



        }); //DOCUMENT READY

        /***********
         SLIDE LEFT
        ************/
        function slideLeft2() {
            pos2--;
            if (pos2 == -1) {
                pos2 = totalSlides2 - 1;
            }
            $('#slider-wrap2 ul#slider2').css('left', -(sliderWidth2 * pos2));

            //*> optional
            countSlides2();
            pagination2();
        }
        /************
         SLIDE RIGHT
        *************/
        function slideRight2() {
            pos2++;
            if (pos2 == totalSlides2) {
                pos2 = 0;
            }
            $('#slider-wrap2 ul#slider2').css('left', -(sliderWidth2 * pos2));

            //*> optional 
            countSlides2();
            pagination2();
        }

        /************************
         //*> OPTIONAL SETTINGS
        ************************/
        function countSlides2() {
            $('#counter2').html(pos2 + 1 + ' / ' + totalSlides2);
        }

        function pagination2() {
            $('#pagination-wrap2 ul li').removeClass('active');
            $('#pagination-wrap2 ul li:eq(' + pos2 + ')').addClass('active');
        }
    });

// 
// 
// 
// 
// 

$(document).ready(function(){
    $('.none').click(function(){
        $(this).siblings().addClass('none');
        $(this).removeClass('none');
    });
});
        
        
        $(document).ready(function(){
        //current position
        var pos3 = 0;
        //number of slides
        var totalSlides3 = $('#slider-wrap3 ul li').length;
        //get the slide width
        var sliderWidth3 = $('#slider-wrap3').width();


        $(document).ready(function () {
            /*****************
             BUILD THE SLIDER
            *****************/
            //set width to be 'x' times the number of slides
            $('#slider-wrap3 ul#slider3').width(sliderWidth3 * totalSlides3);

            //next slide  
            $('#next3').click(function () {
                slideRight3();
            });

            //previous slide
            $('#previous3').click(function () {
                slideLeft3();
            });



            /*************************
             //*> OPTIONAL SETTINGS
            ************************/
            //automatic slider

            //for each slide 
            $.each($('#slider-wrap3 ul li'), function () {

                //create a pagination
                var li = document.createElement('li');
                $('#pagination-wrap3 ul').append(li);
            });

            //counter
            countSlides3();

            //pagination
            pagination3();

            //hide/show controls/btns when hover
            //pause automatic slide when hover
            $('#slider-wrap3').hover(
                function () {
                    $(this).addClass('active');
                },
                function () {
                    $(this).removeClass('active');
                }
            );



        }); //DOCUMENT READY

        /***********
         SLIDE LEFT
        ************/
        function slideLeft3() {
            pos3--;
            if (pos3 == -1) {
                pos3 = totalSlides3 - 1;
            }
            $('#slider-wrap3 ul#slider3').css('left', -(sliderWidth3 * pos3));

            //*> optional
            countSlides3();
            pagination3();
        }
        /************
         SLIDE RIGHT
        *************/
        function slideRight3() {
            pos3++;
            if (pos3 == totalSlides3) {
                pos3 = 0;
            }
            $('#slider-wrap3 ul#slider3').css('left', -(sliderWidth3 * pos3));

            //*> optional 
            countSlides3();
            pagination3();
        }

        /************************
         //*> OPTIONAL SETTINGS
        ************************/
        function countSlides3() {
            $('#counter3').html(pos3 + 1 + ' / ' + totalSlides3);
        }

        function pagination3() {
            $('#pagination-wrap3 ul li').removeClass('active');
            $('#pagination-wrap3 ul li:eq(' + pos3 + ')').addClass('active');
        }
    });

// 
// 
// 
// 
// 

$(document).ready(function(){
    $('.none').click(function(){
        $(this).siblings().addClass('none');
        $(this).removeClass('none');
    });
});
        
        
        $(document).ready(function(){
        //current position
        var pos4 = 0;
        //number of slides
        var totalSlides4 = $('#slider-wrap4 ul li').length;
        //get the slide width
        var sliderWidth4 = $('#slider-wrap4').width();


        $(document).ready(function () {
            /*****************
             BUILD THE SLIDER
            *****************/
            //set width to be 'x' times the number of slides
            $('#slider-wrap4 ul#slider4').width(sliderWidth4 * totalSlides4);

            //next slide  
            $('#next4').click(function () {
                slideRight4();
            });

            //previous slide
            $('#previous4').click(function () {
                slideLeft4();
            });



            /*************************
             //*> OPTIONAL SETTINGS
            ************************/
            //automatic slider

            //for each slide 
            $.each($('#slider-wrap4 ul li'), function () {

                //create a pagination
                var li = document.createElement('li');
                $('#pagination-wrap4 ul').append(li);
            });

            //counter
            countSlides4();

            //pagination
            pagination4();

            //hide/show controls/btns when hover
            //pause automatic slide when hover
            $('#slider-wrap4').hover(
                function () {
                    $(this).addClass('active');
                },
                function () {
                    $(this).removeClass('active');
                }
            );



        }); //DOCUMENT READY

        /***********
         SLIDE LEFT
        ************/
        function slideLeft4() {
            pos4--;
            if (pos4 == -1) {
                pos4 = totalSlides4 - 1;
            }
            $('#slider-wrap4 ul#slider4').css('left', -(sliderWidth4 * pos4));

            //*> optional
            countSlides4();
            pagination4();
        }
        /************
         SLIDE RIGHT
        *************/
        function slideRight4() {
            pos4++;
            if (pos4 == totalSlides4) {
                pos4 = 0;
            }
            $('#slider-wrap4 ul#slider4').css('left', -(sliderWidth4 * pos4));

            //*> optional 
            countSlides4();
            pagination4();
        }

        /************************
         //*> OPTIONAL SETTINGS
        ************************/
        function countSlides4() {
            $('#counter4').html(pos4 + 1 + ' / ' + totalSlides4);
        }

        function pagination4() {
            $('#pagination-wrap4 ul li').removeClass('active');
            $('#pagination-wrap4 ul li:eq(' + pos4 + ')').addClass('active');
        }
    });

// 
// 
// 
// 
// 

$(document).ready(function(){
    $('.none').click(function(){
        $(this).siblings().addClass('none');
        $(this).removeClass('none');
    });
});
        
        
        $(document).ready(function(){
        //current position
        var pos5 = 0;
        //number of slides
        var totalSlides5 = $('#slider-wrap5 ul li').length;
        //get the slide width
        var sliderWidth5 = $('#slider-wrap5').width();


        $(document).ready(function () {
            /*****************
             BUILD THE SLIDER
            *****************/
            //set width to be 'x' times the number of slides
            $('#slider-wrap5 ul#slider5').width(sliderWidth5 * totalSlides5);

            //next slide  
            $('#next5').click(function () {
                slideRight5();
            });

            //previous slide
            $('#previous5').click(function () {
                slideLeft5();
            });



            /*************************
             //*> OPTIONAL SETTINGS
            ************************/
            //automatic slider

            //for each slide 
            $.each($('#slider-wrap5 ul li'), function () {

                //create a pagination
                var li = document.createElement('li');
                $('#pagination-wrap5 ul').append(li);
            });

            //counter
            countSlides5();

            //pagination
            pagination5();

            //hide/show controls/btns when hover
            //pause automatic slide when hover
            $('#slider-wrap5').hover(
                function () {
                    $(this).addClass('active');
                },
                function () {
                    $(this).removeClass('active');
                }
            );



        }); //DOCUMENT READY

        /***********
         SLIDE LEFT
        ************/
        function slideLeft5() {
            pos5--;
            if (pos5 == -1) {
                pos5 = totalSlides5 - 1;
            }
            $('#slider-wrap5 ul#slider5').css('left', -(sliderWidth5 * pos5));

            //*> optional
            countSlides5();
            pagination5();
        }
        /************
         SLIDE RIGHT
        *************/
        function slideRight5() {
            pos5++;
            if (pos5 == totalSlides5) {
                pos5 = 0;
            }
            $('#slider-wrap5 ul#slider5').css('left', -(sliderWidth5 * pos5));

            //*> optional 
            countSlides5();
            pagination5();
        }

        /************************
         //*> OPTIONAL SETTINGS
        ************************/
        function countSlides5() {
            $('#counter5').html(pos5 + 1 + ' / ' + totalSlides5);
        }

        function pagination5() {
            $('#pagination-wrap5 ul li').removeClass('active');
            $('#pagination-wrap5 ul li:eq(' + pos5 + ')').addClass('active');
        }
    });

// 
// 
// 
// 
// 

$(document).ready(function(){
    $('.none').click(function(){
        $(this).siblings().addClass('none');
        $(this).removeClass('none');
    });
});
        
        
        $(document).ready(function(){
        //current position
        var pos6 = 0;
        //number of slides
        var totalSlides6 = $('#slider-wrap6 ul li').length;
        //get the slide width
        var sliderWidth6 = $('#slider-wrap6').width();


        $(document).ready(function () {
            /*****************
             BUILD THE SLIDER
            *****************/
            //set width to be 'x' times the number of slides
            $('#slider-wrap6 ul#slider6').width(sliderWidth6 * totalSlides6);

            //next slide  
            $('#next6').click(function () {
                slideRight6();
            });

            //previous slide
            $('#previous6').click(function () {
                slideLeft6();
            });



            /*************************
             //*> OPTIONAL SETTINGS
            ************************/
            //automatic slider

            //for each slide 
            $.each($('#slider-wrap6 ul li'), function () {

                //create a pagination
                var li = document.createElement('li');
                $('#pagination-wrap6 ul').append(li);
            });

            //counter
            countSlides6();

            //pagination
            pagination6();

            //hide/show controls/btns when hover
            //pause automatic slide when hover
            $('#slider-wrap6').hover(
                function () {
                    $(this).addClass('active');
                },
                function () {
                    $(this).removeClass('active');
                }
            );



        }); //DOCUMENT READY

        /***********
         SLIDE LEFT
        ************/
        function slideLeft6() {
            pos6--;
            if (pos6 == -1) {
                pos6 = totalSlides6 - 1;
            }
            $('#slider-wrap6 ul#slider6').css('left', -(sliderWidth6 * pos6));

            //*> optional
            countSlides6();
            pagination6();
        }
        /************
         SLIDE RIGHT
        *************/
        function slideRight6() {
            pos6++;
            if (pos6 == totalSlides6) {
                pos6 = 0;
            }
            $('#slider-wrap6 ul#slider6').css('left', -(sliderWidth6 * pos6));

            //*> optional 
            countSlides6();
            pagination6();
        }

        /************************
         //*> OPTIONAL SETTINGS
        ************************/
        function countSlides6() {
            $('#counter6').html(pos6 + 1 + ' / ' + totalSlides6);
        }

        function pagination6() {
            $('#pagination-wrap6 ul li').removeClass('active');
            $('#pagination-wrap6 ul li:eq(' + pos6 + ')').addClass('active');
        }
    });

// 
// 
// 
// 
// 
