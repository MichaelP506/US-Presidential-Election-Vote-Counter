var demCounter = 0;

var repCounter = 0;

$(".biden").hide();

$(".trump").hide();

$(".keepVoting").hide();

$(".bidenPresident").hide();

$(".trumpPresident").hide();

$(".demVote").click(function(){
 demCounter = demCounter + 90;
    if (demCounter >= 270) {
$(".biden").show();
        $(".bidenPresident").show();
        $(".keepVoting").hide();  
                $(".repVote").hide();
        $(".demVote").hide();
}
    else {
    $(".keepVoting").show();
    }
});
    
$(".repVote").click(function(){
 repCounter = repCounter + 90;
    if (repCounter >= 270) {
$(".trump").show();
           $(".trumpPresident").show();
        $(".keepVoting").hide();   
        $(".repVote").hide();
        $(".demVote").hide();
}
    else {
    $(".keepVoting").show();
    }
});



                
