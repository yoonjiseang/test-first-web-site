$(document).ready(function(){
    $('.ham').click(function () {
        if ($('ul.nav').hasClass('on')) {
            $('ul.nav').removeClass('on');
            $('.ham').removeClass('on');
        } else {        
            $('ul.nav').addClass('on');
            $('.ham').addClass('on');
        }
    });
    $('.ham_close').click(function () {
        if ($('ul.nav').hasClass('on')) {
            $('ul.nav').removeClass('on');
            $('ham').removeClass('on');
        } else {
            $('ul.nav').addClass('on');
            $('.ham').addClass('on');
        }
    });
    $('.ham_just_close').click(function () {
        $('ul.nav').removeClass('on');
        $('.ham').removeClass('on');
    });



    // 체크박스 전체 선택
    $(".checkbox_group").on("click", "#check_all", function () {
        $(this).parents(".checkbox_group").find('input').prop("checked", $(this).is(":checked"));
    });

    // 체크박스 개별 선택
    $(".checkbox_group").on("click", ".normal", function() {
        var is_checked = true;

        $(".checkbox_group .normal").each(function(){
            is_checked = is_checked && $(this).is(":checked");
        });

        $("#check_all").prop("checked", is_checked);
    });	

    
    // 탭 구현
    $('ul.tabs1 li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs1 li').removeClass('current');
        $('.tab-content1').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

    $('ul.tabs2 li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs2 li').removeClass('current');
        $('.tab-content2').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })		

    // 탑버튼
    $('#etc').hide();
    $(window).scroll(function() {

        if ($(this).scrollTop() > 2000) {
            $('#etc').fadeIn();
        } else {
            $('#etc').fadeOut();
        }
    });
    $("#top_btn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });

    // 모달창 켜기1
    $('.modal_step_open').click(function(){
        var modal_step = $(this).attr('modal_step');

        $('.modal_step').addClass('hidden'); // 이전 모달창을 숨김
        
        $(this).addClass('current');
        $("."+ "modal_step" +modal_step).removeClass('hidden');
    })

    // 모달창 켜기1
    $('.modal_step_open2').click(function(){
        var modal_step = $(this).attr('modal_step');

        $('.modal_step_type2').addClass('hidden3'); // 이전 모달창을 숨김
        
        $(this).addClass('current');
        $("."+ "modal_step_type2" +modal_step).removeClass('hidden3');
    })


    // 모달창 켜기2
    $('.modal_open').on("click", function() {
        $(this).next().removeClass("hidden");
    });

    // 모달창 끄기
    $('.cancerButton').on("click", function() {
        if ($(this).closest(".modal")) {
            $(this).closest(".modal").addClass("hidden");
        }
        else {
            $(this).closest(".modal").addClass("hidden");
        }
    });

	    // 모달창 끄기
    $('.cancerButton2').on("click", function() {
        if ($(this).closest(".modal")) {
            $(this).closest(".modal").addClass("hidden3");
        }
        else {
            $(this).closest(".modal").addClass("hidden3");
        }
    });

    // 모든 모달창 끄기
    $('.allModalClose').on("click", function() {
        $('.modal').addClass("hidden");
    });

    // 첫번째 모달창 끄기
    $('.firstModalClose2').on("click", function() {
        $(this).closest('.modal').addClass("hidden");
        $(this).closest('.modal').next('.modal').removeClass("hidden");
    });   
});
