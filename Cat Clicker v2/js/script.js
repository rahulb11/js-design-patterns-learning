var count1 = 0;
$('#image1').click(function(){
    count1++;
    $('#count1').text('Count: '+count1);
});

var count2 = 0;
$('#image2').click(function(){
    count2++;
    $('#count2').text('Count: '+count2);
    console.log(count2);
});