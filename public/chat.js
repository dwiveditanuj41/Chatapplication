
var socket = io.connect('http://tranquil-refuge-85164.herokuapp.com/');
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var join = document.getElementById('join');

socket.on('user',function(data){
	output.innerHTML +=  '<p style="text-align:center; background-color: white; padding:10px; border: 1px solid white;">'+ '<strong>'+data.handle+'</strong>' + ' joined the chat' + '</p>';
    output.scrollTop = output.scrollHeight;
})




socket.on('output', function(data){
             //console.log(data);
                    if(data.length){
                        for(var x = 0;x < data.length;x++){
                            // Build out message div
                            
	                     output.innerHTML += '<div id="bubble"> <p>' + '</strong>'  + '<div id="textmessage" >'+ '<strong>'+ data[x].handle +'</strong><hr />'+ data[x].message + '</div>' + '</p><br /></div>';
       
                        }
                        output.scrollTop = output.scrollHeight;
                    }
                    message.value="";
                });



// ES6

//emit


btn.addEventListener('click', function(){

	if(handle.value && message.value)
	{
	socket.emit('chat', {
		handle: handle.value,
		message: message.value,
		
	});}

else
{
	if(handle.value)
	{alert("Please enter the message");}
    else 
    {
    	alert("Please enter your Username")
    }
   
}

});


join.addEventListener('click', function(){
if(handle.value)
	{socket.emit('user', {
		handle: handle.value
	})};
});

//Using Enter key
message.addEventListener('keyup', function(e){
if(e.keyCode===13)
	{if(handle.value && message.value)
	{
	socket.emit('chat', {
		handle: handle.value,
		message: message.value,
		
	});}

else
{
	if(handle.value)
	{alert("Please enter the message");}
    else 
    {
    	alert("Please enter your Username")
    }
   
}
}
});






