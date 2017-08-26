function login(usr,pwd,lbl){
    $(lbl).html("").removeClass("red").removeClass("green");
    $("#logo").addClass("logo-spin").removeClass("stop").addClass("run");
    
    
    var timeout = setTimeout(function(){
        
        $.ajax({
            url: 'http://localhost:3000/api/login',
            type: "POST",
            cache: false,
            dataType: 'text json',
            async: false,
            data: {
                email: usr,
                password: pwd
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $(lbl).addClass("red").html("Request fail!!!");
                stopAnimate();
                clearTimeout(timeout);
            },
            success: function (data) {
                if(data=='http code 200'){
                    $(lbl).addClass("green").html("Login Successed");
                    stopAnimate();
                    clearTimeout(timeout);
                }
                else{
                    $(lbl).addClass("red").html("Email or password is incorrect");
                    stopAnimate();
                    clearTimeout(timeout);
                }
            }
        });
    },3000);
}

function stopAnimate(){
    $("#logo").removeClass("run").addClass("stop");
}