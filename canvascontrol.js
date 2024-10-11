var c = document.getElementById("board");
var fontsize_px = 20;
const ctx = c.getContext("2d");
ctx.font = fontsize_px + "px Arial"

var placedElements = []


function addElement(type, name, posX, posY, sizeX, sizeY)
{
    placedElements.push([type, name, posX, posY, sizeX, sizeY]);
    console.log(placedElements);

    updateBoardRender();
}

function renderElement(type, label, x, y, sizeX, sizeY)
{
    var llen = label.length;

    if(type == 2) //Rectangle (ENTITY)
    {
        ctx.moveTo(x, y);
        ctx.lineTo(x + sizeX, y + 0);
        ctx.lineTo(x + sizeX, y + sizeY);
        ctx.lineTo(x + 0, y + sizeY);
        ctx.lineTo(x + 0, y + 0);
        ctx.fillText(label, (x + sizeX/2) - fontsize_px/4.5 * llen, y + sizeY/2 + 5);
    }

    if(type == 3) //Rhombus (RELATIONSHIP)
    {
        ctx.moveTo(x + sizeX / 2, y);
        ctx.lineTo(x + sizeX * 2, y + sizeY);
        ctx.lineTo(x + sizeX / 2, y + sizeY * 2);
        ctx.lineTo(x - sizeX, y + sizeY);
        ctx.lineTo(x + sizeX / 2, y);
        ctx.fillText(label, (x + sizeX/2) - fontsize_px/4.5 * llen, y + sizeY + 5);
    }

    if(type == 4) //Circle (Attribute)
    {
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(x, y, sizeX, sizeY, 0, 0, 2 * Math.PI)
        ctx.fillText(label, x - sizeX / 4 * llen/fontsize_px*3.5, y + sizeY / 5);
    }
}

function updateBoardRender()
{
    ctx.reset();
    renderAllElements();
}

function renderAllElements()
{
    placedElements.forEach(e => {
        renderElement(e[0], e[1], e[2], e[3], e[4], e[5]);
        //renderElement(e[0])
    });
    ctx.stroke();
}
renderElement(0, "Entity", 200, 200, 150, 75);

renderElement(1, "Relationship", 200, 500, 50, 50);

renderElement(2, "Attribute", 400, 500, 150, 50);

ctx.stroke();