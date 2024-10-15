var c = document.getElementById("board");
var ctx = c.getContext("2d");
var fontsize = 20;
ctx.globalCompositeOperation = "source-over";

var placedElements = []

function addElement(type, name, posX, posY, sizeX, sizeY, connected)
{
    placedElements.push([type, name, posX, posY, sizeX, sizeY, connected]);
    console.log(placedElements);

    updateBoardRender();
}

function renderElement(type, label, x, y, sizeX, sizeY, selected)
{
    ctx.font = fontsize + "px Arial";
    var llen = label.length;

    if(type == 2) //Rectangle (ENTITY)
    {
        if(selected)
            {
                ctx.drawImage(rect_sel, x, y);
            }
            else
            {
                ctx.drawImage(rect, x, y);
            }
    }

    if(type == 3) //Rhombus (RELATIONSHIP)
    {
        if(selected)
        {
            ctx.drawImage(rhombus_sel, x, y);
        }
        else
        {
            ctx.drawImage(rhombus, x, y);
        }
    }

    if(type == 4) //Circle (ATTRIBUTE)
    {
        if(selected)
            {
                ctx.drawImage(circle_sel, x, y);
            }
            else
            {
                ctx.drawImage(circle, x, y);
            }
    }
    ctx.fillText(label, (x + sizeX/2) - llen * (fontsize / 5), y + sizeY / 2);
}

function updateBoardRender()
{
    ctx.reset();
    renderAllElements();
}

function renderAllElements()
{
    placedElements.forEach(e => {

        if(e[6] != undefined)
            {
                renderConnection(e, placedElements[e[6]]);
            }

        renderElement(e[0], e[1], e[2], e[3], e[4], e[5], e[7]);
    });
    ctx.stroke();
}

function renderConnection(el1, el2)
{
    ctx.moveTo(el1[2] + el1[4]/2, el1[3] + el1[5]/2);
    ctx.lineTo(el2[2] + el2[4]/2, el2[3] + el2[5]/2);
}

ctx.stroke();