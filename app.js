const messageInput = document.querySelector("#message-input");

messageInput.addEventListener("keydown", function (e) {
    if (e.key == "Enter")
        getMessage();
})

function getMessage() {
    document.querySelector("#message-output").innerHTML = messageInput.value;
    messageInput.value = "";
}