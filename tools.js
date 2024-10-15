var selected_tool = 0;
var c = document.getElementById("board");
c.addEventListener("click", function(event)
                            {
                                let pos = getMousePos(c, event);

                                if(!pickingConnection)
                                {
                                    if(selected_tool != 0 && selected_tool != 1 && selected_tool != 5)
                                        {
                                            addElement(selected_tool, getToolName(selected_tool), pos.x - 50, pos.y - 25, 100, 50);
                                        }
                                        else
                                        {
                                            if(selected_tool == 0)
                                            {
                                                e = hitTest(pos.x, pos.y);
                                                if(isValid(e.element))
                                                {
                                                    e.element[7] = !e.element[7]; //toggle its selection
                                                    if(e.element[7] == true)
                                                    {
                                                        updateInfoByID(e.index);
                                                    }
                                                    else
                                                    {
                                                        clearProperties();
                                                    }
                                                    updateBoardRender();
                                                }
                                                
                                            }
        
                                            if(selected_tool == 5)
                                                {
                                                    console.log("connect");
                                                }
                                        }
                                }
                                else
                                {
                                    let e = hitTest(pos.x, pos.y);
                                    pickConnectionEnd(e.index);
                                    updateBoardRender();
                                }
                            }
, false);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

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
    let i = 0
    for(i = 0; i < placedElements.length; i++)
    {
        if(mx > placedElements[i][eX] && mx < placedElements[i][eX] + placedElements[i][eSizeX] && my > placedElements[i][eY] && my < placedElements[i][eY] + placedElements[i][eSizeY])
        {
            hitElement = placedElements[i];
            break;
        }
    }
    return {
        element: hitElement,
        index: i
    };
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

function isValid(any)
{
    if(any != null && any != undefined)
    {
        return true;
    }
    return false;
}