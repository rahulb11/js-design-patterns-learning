//cat object
var cats =
[
    {
        "name": 'Susy',
        "url": 'images/cat1.jpg',
        "count": 0
    },
    {
        "name": 'Mary',
        "url": 'images/cat2.jpg',
        "count": 0
    },
    {
        "name": 'Kelly',
        "url": 'images/cat3.jpg',
        "count": 0
    }
];

var HTMLimage = '<a onclick="changeCount(%i%)"><img src="%data%" alt="A cat"></a>';
var HTMLlink = '<li><a href="#" onclick="changeDetails(%i%)">%data%</a></li>';

//looping through the cats to create links for each
for(i in cats){
    formattedHTMLlink = HTMLlink.replace("%data%",cats[i].name);
    formattedHTMLlink = formattedHTMLlink.replace("%i%",i);
    $("#links").append(formattedHTMLlink);
}

//function to change the details of display area
function changeDetails(i){
    formattedHTMLimage = HTMLimage.replace("%data%",cats[i].url);
    formattedHTMLimage = formattedHTMLimage.replace("%i%",i);
    $("#image").html(formattedHTMLimage);
    $("#name").text("Name: " + cats[i].name);
    $("#count").text("Count: " + cats[i].count);
}

//function to change the count
function changeCount(i){
    cats[i].count++;
    $("#count").text("Count: " + cats[i].count);
}