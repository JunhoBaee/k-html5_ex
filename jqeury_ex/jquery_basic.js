$(function(){
    $("button").click(function(){
        // click을 하면 사라지고 
        console.log($("p").css("display"))
        if($("p").css("display") == "none")
        $("p").show();
        else
        $("p").hide();
    });
    $('h1').mouseenter(function (){
    $(this).css('color', 'red');
    $(this).css('background-color', 'black');
    });
    
    $('h1').mouseleave(function (){
    $(this).css('color', 'red');
    $(this).css('background-color', 'black');

});

let script_src = $('script').attr('src');
console.log(script_src);
$('body').append(`<p> ${script_src}</p>`)
});