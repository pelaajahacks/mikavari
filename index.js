function getColor() {
    $.ajax({
        url: "https://api.segso.net/hsl/color?jsonp=true",
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true ,
        contentType:'application/json',
        secure: true,
        headers: {
            "accept": "application/json",
            'Access-Control-Allow-Origin': '*',
        },
        success: function (data){
            $("#colorhex1").text(data.color[0].hexColor);
            $("#colorrgb1").text(data.color[0].rgbColor);
            $("#colorhex2").text(data.color[1].hexColor);
            $("#colorrgb2").text(data.color[1].rgbColor);
            $("#example1").css({"background-color": data.color[0].hexColor});
            $("#example2").css({"background-color": data.color[1].hexColor});
            
        }
        });
    
};

function getTicketColor() {
    $.ajax({
        url: "https://api.segso.net/hsl/color?jsonp=true",
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true ,
        contentType:'application/json',
        secure: true,
        headers: {
            "accept": "application/json",
            'Access-Control-Allow-Origin': '*',
        },
        success: function (data){
            $(".svgspin").css({"background-color": data.color[0].hexColor});
            
        }
        });
};

