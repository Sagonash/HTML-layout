window.onload=function(){
    let div = document.getElementById('nav-rect');
    let border = document.getElementById('nav-rect-back');
    div.onmousedown = function(event) {
        event.preventDefault();
        let shiftX = event.clientX - div.getBoundingClientRect().left;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        function onMouseMove(event) {
            let newLeft = event.clientX - shiftX - border.getBoundingClientRect().left;
            // курсор вышел из слайдера => оставить бегунок в его границах.
            if (newLeft < 0) {
                newLeft = 0;
            }
            let rightEdge = border.offsetWidth - div.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            div.style.left = newLeft + 'px';
        }
        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
    };

    let dropdown = document.getElementById('dropdown');
    let dropdowncontent = document.getElementById('dropdown-content');
    dropdown.addEventListener('mousedown', function(){
        if (dropdowncontent.style.display === "none" || dropdowncontent.style.display === ""){
            dropdowncontent.style.display = "block";
            dropdown.style.transform = "rotate(180deg)";
        }
        else{
            dropdowncontent.style.display = "none";
            dropdown.style.transform = "rotate(360deg)";
        }
    });

    let back = document.getElementById('Back');
    let forward = document.getElementById('Forward');

    back.addEventListener('mousedown', function(){
        let newLeft = div.offsetLeft - (border.offsetWidth - div.offsetWidth) / 4;
        console.log(newLeft);
        if (newLeft < 0){
            div.style.left = 0;
        }
        else{
            div.style.left = newLeft + 'px';
        }
    });

    forward.addEventListener('mousedown', function(){
        let rightEdge = border.offsetWidth;
        let newRight = div.offsetLeft + div.offsetWidth + (border.offsetWidth - div.offsetWidth) / 4;
        console.log(newRight);
        if (newRight > rightEdge){
            div.style.left = rightEdge - div.offsetWidth + 'px';
        }
        else{
            div.style.left = newRight - div.offsetWidth + 'px';
        }
    });
}
