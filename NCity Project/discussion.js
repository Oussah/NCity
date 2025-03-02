var input_box = $("input")

input_box.on("click", alert_the_user)

function alert_the_user(){
    // console.log("it works");
    alert("Your message will be anonymously displayed ^^ ")
}



var talkSpace = $(".sharing-space")
var enterBtn = $(".enter-btn")
var list = $(".sharing-space")

enterBtn.on("click", displayMessage)

function displayMessage(){
    // console.log("display works");
    var newMessage = input_box.val();
    
    list.append(`
    <nav class="sharing-space-js">
    <p class="message-container">${newMessage}</p>
    </nav>
    `);
}