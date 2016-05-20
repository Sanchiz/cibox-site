/**
 * Created by podarok on 20.05.16.
 */
$.getJSON( "https://api.github.com/repos/cibox/cibox/stats/contributors", function( data ) {
    var items = [];
    console.log(data);
    $.each( data, function( key, val ) {
        items.push( "<div class='col-lg-2' id='@" + val.author.login + "'><a target=_blank href='" + val.author.html_url + "'><img src='" + val.author.avatar_url + "&s=60'><br></a><div style='margin-bottom:20px'>" + val.author.login + "</div></div>" );
    });
    items.reverse();
    $( "<div/>", {
        "class": "my-new-list",
        html: items.join( "" )
    }).appendTo( ".contact" );
});