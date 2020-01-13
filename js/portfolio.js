$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.Link !== "") {

            event.preventDefault();
            var Link=this.Link; 
            $('html, body').animate({
                    scrollTop: $(Link).offset().top
            }, 2000, function(){
                window.location.Link=Link; 
            });
        }
    });
});




function bringUpContact() {
    document.getElementById("form").style.display="block";
}
function closeForm() {
    document.getElementById("form").style.display="none";
    this.Close();
}