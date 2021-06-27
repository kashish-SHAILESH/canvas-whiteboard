var canvas = document.querySelector(".js-paint")
var ctx = canvas.getContext("2d")
ctx.lineCap = "round"

var colorPicker = document.querySelector(".js-color-picker")
colorPicker.addEventListener("change", event=>{
 ctx.strokeStyle = event.target.value
})

var lineWidthRange = document.querySelector(".js-line-range")
var label = document.querySelector(".js-range-value")

lineWidthRange.addEventListener("input",event=>{
    const width = event.target.value
    label.innerHTML=width
    ctx.lineWidth = width
})

var x=0, y=0;
var isMouseDown = false;

const startDrawing = (event)=>{
    isMouseDown = true
    [x,y] = [event.offsetX,event.offsetY]
}


const drawLine = (event)=>{
    if(isMouseDown){
    const newX = event.offsetX
    const newY = event.offsetY
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(newX,newY)
    ctx.stroke()
    x = newX
    y = newY
    }
    }
    
    const stopDrawing = () =>{
    isMouseDown = false
    }

canvas.addEventListener("mousedown",startDrawing)
canvas.addEventListener("mouseup",stopDrawing)
canvas.addEventListener("mousemove",drawLine)
canvas.addEventListener("mouseout",stopDrawing)


