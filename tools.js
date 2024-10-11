var selected_tool = 0;
var c = document.getElementById("board");
c.addEventListener("click", function(event)
                            {
                                addElement(selected_tool, getToolName(selected_tool), event.clientX, event.clientY, 150, 75);
                            }
, false);

function changeTool(id)
{
    selected_tool = id;
}

function getToolName(id)
{
    switch(id)
    {
        default:
            return "undefined type";

        case 0:
            return "select";
        
        case 1:
            return "delete";

        case 2:
            return "entity";

        case 3:
            return "relationship";

        case 4:
            return "attribute";
    }
}

function useTool()
{
    alert("click")
    switch(selected_tool)
    {
        case 1:
            alert("adssada")
    }
}