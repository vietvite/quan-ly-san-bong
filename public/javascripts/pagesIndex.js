$(document).ready(function () {
    let check = $('#islogin').val();
    if(check =='false'){
        $('#changes').html('<button type="button" class="primary-btn py-2 text-uppercase d-block mx-auto mt-1" data-toggle="modal" data-target="#signinModal">Đặt sân</button>');
        
    }
    $('form#login').submit(function (e) { 
        e.preventDefault();
        var username = $("input[name='username']").val()
        var password = $("input[name='password']").val()
        let data = {
            username:username,
            password:password
        }
        
        
        $.ajax({
            type: "POST",
            url: "/checklogin",
            data: data,
            
            success: function (response) {
                if(response.acp == 0){
                    $('#thongbao').html('<div class="alert alert-danger" role="alert">'+response.mess+'</div>');
                }else{
                    window.location.href = '/s/';
                }
            }
        });
    });
    
});