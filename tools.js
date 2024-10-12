var selected_tool = 0;
var c = document.getElementById("board");
c.addEventListener("click", function(event)
                            {
                                if(selected_tool != 0 && selected_tool != 1 && selected_tool != 5)
                                {
                                    addElement(selected_tool, getToolName(selected_tool), event.pageX - 100, event.pageY - 100, 100, 50);
                                }
                                else
                                {
                                    if(selected_tool == 0)
                                    {
                                        e = hitTest(event.pageX, event.pageY);
                                        e[7] = !e[7]; //toggle its selection
                                        updateBoardRender();
                                    }

                                    if(selected_tool == 5)
                                        {
                                            console.log("connect");
                                        }
                                }
                                
                            }
, false);

function changeTool(id)
{
    selected_tool = id;
    document.getElementById("selectedtool").innerHTML = "Selected: " + getToolName(id);
}

function getAllSelectedElements()
{
    let selectedElements = []
    for(let i = 0; i < placedElements.length; i++)
    {
        if(placedElements[i][7] == true)
        {
            selectedElements.push(placedElements[i]);
        }
    }
    return selectedElements;
}

function hitTest(mx, my)
{
    //for readability
    let eX = 2;
    let eSizeX = 4;
    let eY = 3;
    let eSizeY = 5;

    
    let hitElement = null;

    for(let i = 0; i < placedElements.length; i++)
    {
        if(mx > placedElements[i][eX] && mx < placedElements[i][eX] + placedElements[i][eSizeX])
        {
            hitElement = placedElements[i];
            break;
        }
    }
    return hitElement;
}

function getToolName(id)
{
    switch(id)
    {
        default:
            return "not_placeable_element";

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
        
        case 5:
            return "connect";
        
        case 6:
            return "label";
    }
}