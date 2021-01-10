$(document).ready(function(){

    $("#arrow").mouseenter(function(){
        $('#arrow').attr("src", "svg/archive/arrowWhite.svg");
        $('#whiteBox').animate({
            width: '100vw'
        });
        $("#arrow").mouseleave(function(){
            $('#whiteBox').animate({
                width: '0vw'
            });
            setTimeout(function() {
                $('#arrow').attr("src", "svg/archive/arrow.svg");
            }, 400);
        });
    });

    $('select[name=grade]').change(function() {
        var headerHeight = document.querySelector("#header").offsetHeight;
        var locationA = document.querySelector("#a").offsetTop;
        var locationF = document.querySelector("#b").offsetTop;
        var locationG = document.querySelector("#c").offsetTop;
        var locationT = document.querySelector("#d").offsetTop;
        var locationU = document.querySelector("#e").offsetTop;
        var locationX = document.querySelector("#f").offsetTop;
        if($(this).val()=="3"){
            if($('select[name=genre]').val()=="design") {
                window.scrollTo({top:locationA-headerHeight, behavior:'smooth'});
            } else if($('select[name=genre]').val()=="illust") {
                window.scrollTo({top:locationF-headerHeight, behavior:'smooth'});
            } else if($('select[name=genre]').val()=="motion") {
                window.scrollTo({top:locationU-headerHeight, behavior:'smooth'});
            }
        } else if($(this).val()=="2") {
            if($('select[name=genre]').val()=="design") {
                window.scrollTo({top:locationA - headerHeight, behavior:'smooth'});
            } else if($('select[name=genre]').val()=="illust") {
                window.scrollTo({top:locationG - headerHeight, behavior:'smooth'});
            } else if($('select[name=genre]').val()=="motion") {
                window.scrollTo({top:locationU - headerHeight, behavior:'smooth'});
            }
        } else if($(this).val()=="1") {
            if($('select[name=genre]').val()=="design") {
                window.scrollTo({top:locationF - headerHeight, behavior:'smooth'});
            } else if($('select[name=genre]').val()=="illust") {
                window.scrollTo({top:locationT - headerHeight, behavior:'smooth'});
            } else if($('select[name=genre]').val()=="motion") {
                window.scrollTo({top:locationX - headerHeight, behavior:'smooth'});
            }
        }
    });

    $('select[name=genre]').change(function() {
        var headerHeight = document.querySelector("#header").offsetHeight;
        var locationA = document.querySelector("#a").offsetTop;
        var locationF = document.querySelector("#b").offsetTop;
        var locationG = document.querySelector("#c").offsetTop;
        var locationT = document.querySelector("#d").offsetTop;
        var locationU = document.querySelector("#e").offsetTop;
        var locationX = document.querySelector("#f").offsetTop;
        if($(this).val()=="design"){
            genre.style.width = 90+"px";
            if($('select[name=grade]').val()=="3") {
                window.scrollTo({top:locationA - headerHeight, behavior:'smooth'});
            } else if($('select[name=grade]').val()=="2") {
                window.scrollTo({top:locationA - headerHeight, behavior:'smooth'});
            } else if($('select[name=grade]').val()=="1") {
                window.scrollTo({top:locationF - headerHeight, behavior:'smooth'});
            }
        } else if($(this).val()=="illust") {
            genre.style.width = 175+"px";
            if($('select[name=grade]').val()=="3") {
                window.scrollTo({top:locationF - headerHeight, behavior:'smooth'});
            } else if($('select[name=grade]').val()=="2") {
                window.scrollTo({top:locationG - headerHeight, behavior:'smooth'});
            } else if($('select[name=grade]').val()=="1") {
                window.scrollTo({top:locationT - headerHeight, behavior:'smooth'});
            }
        } else if($(this).val()=="motion") {
            genre.style.width = 130+"px";
            if($('select[name=grade]').val()=="3") {
                window.scrollTo({top:locationU - headerHeight, behavior:'smooth'});
            } else if($('select[name=grade]').val()=="2") {
                window.scrollTo({top:locationU - headerHeight, behavior:'smooth'});
            } else if($('select[name=grade]').val()=="1") {
                window.scrollTo({top:locationX - headerHeight, behavior:'smooth'});
            }
        }
    });
});

