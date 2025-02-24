let diary = "";

function saveHandler()
{
    let date = $("#date").val();
    let text = $("#text").val();
    let mood = $("#mood").val();

    diary = `<p>${date}: ${text} - ${mood}</p>` + diary;

    $("#result").html(diary);

    localStorage.setItem("diary", diary)
}

function resetHandler()
{
    $("#result").html('');
    localStorage.removeItem("diary")
    diary = "";
}

$(document).ready(function() 
{
    diary = localStorage.getItem("diary");

    if (diary == null) {
        diary = "";
    }

    $("#result").html(diary)
    $("#save").click(saveHandler);
    $("#reset").click(resetHandler);
});

