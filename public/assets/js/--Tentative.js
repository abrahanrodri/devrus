var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
};
var hidden = false;
function action() {
    console.log("action")
    hidden = !hidden;
    if (hidden) {
        $('.my-4').hide();
        $('#Freelance').hide();
    } else {
        $('#Freelance').show();
        $('.my-4').show();
    }
}
var hide = false;
function actions() {
    hide = !hide;
    if (hide) {
        $('.my-4').hide();
        $('#Contract').hide();
    } else {
        $('#Contract').show();
        $('.my-4').show();
    }
}

$(".dropdown-trigger").dropdown();