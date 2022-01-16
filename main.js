var mouseevent="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById ("mycanvas");
ctx=canvas.getContext("2d");
color="red";
line_width=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){mouseevent="mouseDown"};
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
 if(mouseevent=="mouseDown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
ctx.lineWidth=line_width;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
ctx.stroke();
 }
 last_position_of_x=current_position_of_mouse_x;
 last_position_of_y=current_position_of_mouse_y;
}
