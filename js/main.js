function statusLine() {

    let y = document.querySelectorAll('.item_active')
    let last_elem = (y[y.length-1]).clientHeight / 2;

    let coord = document.querySelectorAll('.item_active')
    let coord_elem = (coord[coord.length-1])
    let JStop = coord_elem.offsetTop;

    let coord_new = JStop + last_elem
    document.querySelector('.line').style.height = coord_new + "px";

}

statusLine()