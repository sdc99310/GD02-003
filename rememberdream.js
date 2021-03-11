document.addEventListener('mousemove',function(e){
    const scratch = document.createElement('span');
    const body = document.querySelector('body');

    scratch.style.top = e.offsetY + 'px';
    scratch.style.left = e.offsetX + 'px';
    
    body.appendChild(scratch);

});

alert("!Tracing the dream last night! move the mouse")


/* work cited */
// https://www.w3schools.com/jsref/met_node_appendchild.asp
// https://www.w3schools.com/tags/tag_span.asp
// https://youtu.be/qzcMiNKPSIk