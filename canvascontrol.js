var c = document.getElementById("board");
var fontsize_px = 20;
const ctx = c.getContext("2d");
ctx.font = fontsize_px + "px Arial"
ctx.globalCompositeOperation = "source-over";

//elements
const entity_img = document.createElement("img");
entity_img.src = "img/rect.png"

const entity_img_sel = document.createElement("img");
entity_img_sel.src = "img/rect-selected.png"

const att_img = document.createElement("img");
att_img.src = "img/circle.png"

const rel_img = document.createElement("img");
rel_img.src = "img/rhombus.png"

var placedElements = []

function addElement(type, name, posX, posY, sizeX, sizeY, connected)
{
    placedElements.push([type, name, posX, posY, sizeX, sizeY, connected]);
    console.log(placedElements);

    updateBoardRender();
}

function renderElement(type, label, x, y, sizeX, sizeY, selected)
{
    var llen = label.length;

    if(type == 2) //Rectangle (ENTITY)
    {
        if(selected)
        {
            ctx.drawImage(entity_img_sel, x, y);
        }
        else
        {
            ctx.drawImage(entity_img, x, y);
        }
        ctx.fillText(label, (x + sizeX / 2) - llen * 2, y + sizeY/2);
    }

    if(type == 3) //Rhombus (RELATIONSHIP)
    {
        ctx.drawImage(rel_img, x, y);
        ctx.fillText(label, (x + sizeX/2) - llen * 2, y + sizeY / 2);
    }

    if(type == 4) //Circle (Attribute)
    {
        ctx.drawImage(att_img, x, y);
        ctx.fillText(label, (x + sizeX/2) - llen * 2, y + sizeY / 2);
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