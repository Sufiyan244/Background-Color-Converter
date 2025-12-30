

// document.getElementById("heading").addEventListener("mouseover", function () {
//     window.location.href = "https://airforshare.com/"
// });

function changecolor() {

    let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random()  * 255


    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
}