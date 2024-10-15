var nameField = document.getElementById("p-name");
var connectionPickerButton = document.getElementById("p-connect");
var connectionDisplay = document.getElementById("connectionContainer");
var propertiesPanel = document.getElementsByClassName("propertiesPanel")[0];
var pickingConnection = false;
function pickConnectionStart()
{
    pickingConnection = true;
}

function pickConnectionEnd(eId)
{
    pickingConnection = false;

    elements = getAllSelectedElements();
    
    for(let i = 0; i < elements.length; i++)
    {
        elements[i][6] = eId;
    }
}

function updateInfoByID(eId)
{
    updateInfo(placedElements[eId][1], placedElements[eId][6]);
}

function clearProperties()
{
    nameField.value = "";
    propertiesPanel.style.display = "none";
    for(let i = 0; i < connectionDisplay.children.length; i++)
    {
        let frozenChildren = connectionDisplay.children;
        connectionDisplay.removeChild(frozenChildren[i]);
    }
}

function updateInfo(name, connection)
{
    nameField.value = name;
    propertiesPanel.style.display = "block";
    if(isValid(connection))
    {
        let dEl = document.createElement('p');
        if(connection instanceof Array)
            {
                for(let i = 0; i < connection.length; i++)
                    {
                        dEl.innerHTML = placedElements[connection[i]][1];
                        connectionDisplay.appendChild(dEl);
                        connectionDisplay.appendChild(document.createElement('hr'));
                    }
            }
            else
            {
                dEl.innerHTML = placedElements[connection][1];
                connectionDisplay.appendChild(dEl);
            }
    }   
}

function updateElementName(newText)
{
    let elements = getAllSelectedElements();
    if(elements.length == 1)
    {
        elements[0][1] = newText;
    }
    updateBoardRender();
}