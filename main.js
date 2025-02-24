let diary = "";

function saveHandler()
{
    let date = $("#date").val();
    let text = $("#text").val();
    let mood = $("#mood").val();

    if (date == "")
    {
        alert("date를 선택하세요.")
        return false
    }
    if (text == "")
    {
        alert("긍정확언을 입력하세요.")
        return false
    }

    diary = `<a href="#" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
        <h1 class="m-1" style="color: orange;">${text}</h1>
        <small style="color: purple;">${date}</small>
    </div>
    <small>${mood}</small>
</a>` + diary;

    $("#result").html(diary);

    localStorage.setItem("diary", diary)
    let storage1 = localStorage.getItem("diary")
    console.log(storage1)
    
    $("#date").val("");
    $("#text").val("");
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

    if (diary == null)
    {
        diary = "";
    }
    
    $("#result").html(diary)
    $("#save").click(saveHandler);
    $("#reset").click(resetHandler);
});

