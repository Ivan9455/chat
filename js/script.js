function getdetails() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    $.ajax({
        type: "POST",
        url: "message.php",
        data: {name: name, message: message}
    }).done(function (result) {
        console.log("post");
        loading();
    });
    document.getElementById("message").value = "";
}

window.onload = function () {
    loading();
    t;
};
var t = setInterval(function () {
    loading();
}, 3000);

function loading() {
    $.ajax({
        type: "POST",
        url: "load_chat.php",
    }).done(function (result) {
        $("#chat").html(result);
        console.log("load");
    });
}