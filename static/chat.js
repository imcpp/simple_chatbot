$('#button').on('click', function(event){
    event.preventDefault();
    alert(10)

    $.ajax({
        url : '/post/',
        type : 'POST',
        data : { 'msgbox' : $('#chat-msg').val() },

        success : function(data){
          alert(10)
            $('#chat-msg').val(data.user);
            $('#msg-list').append('<li class="text-left query list-group-item">' + json.query + '</li>');
            $('#msg-list').append('<li class="text-left response list-group-item">' + json.response + '</li>');
            var chatlist = document.getElementById('msg-list-div');
            chatlist.scrollTop = chatlist.scrollHeight;
        },
        error: function(ts) {
            alert("please enter something");
        }
    });
});



var scrolling = false;
$(function(){
    $('#msg-list-div').on('scroll', function(){
        scrolling = true;
    });
    refreshTimer = setInterval(getMessages, 500);
});

$(document).ready(function() {
     $('#send').attr('disabled','disabled');
     $('#chat-msg').keyup(function() {
        if($(this).val() != '') {
           $('#send').removeAttr('disabled');
        }
        else {
        $('#send').attr('disabled','disabled');
        }
     });
 });
