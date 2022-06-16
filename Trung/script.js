var JQueryScript = document.createElement('script');
JQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js');
document.head.appendChild(JQueryScript);

$(function () {
    $("#options").change(function () {
        if ($(this).val() == "main_page") {
            $("#main_page").show();
            $("#eminem").hide();
            $("#ed_shareen").hide();
            $("#beyond").hide();
            $("#unghoangphuc").hide();
        }

        else if ($(this).val() == "e") {
            $("#main_page").hide();
            $("#eminem").show();
            $("#ed_shareen").hide();
            $("#beyond").hide();
            $("#unghoangphuc").hide();
        }
    });
});