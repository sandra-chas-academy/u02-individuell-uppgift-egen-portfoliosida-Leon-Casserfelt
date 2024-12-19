document.addEventListener("DOMContentLoaded", function() {
    const collection = document.getElementsByClassName("project-container");
    const container = Array.prototype.slice.call(collection)

    console.log (container)

    container.forEach(addEvent);

    function addEvent(item, index, arr) {
        item.addEventListener("click", function() {
            showModal (item, index, arr)
        });
    }

    document.body.addEventListener("click", function() {
        hideModal (container)
    });

});
const footer = document.getElementById("footer")

let modal = false



function showModal(item, index, arr) {
    if (modal == false) {
        document.body.style.backgroundColor = "lightgray"
        footer.style.backgroundColor = "lightgray"
        item.classList.remove("project-container")
        item.classList.add("modal")
    for (let i = 0; i < arr.length; i++) {
        console.log (arr[i])
        if (arr[i] != item) {
            arr [i].style.display = "none"
        }
    }
    function modalTrue() {
        modal = true
    }

    setTimeout (modalTrue, 10)

    }
    

}

function hideModal(container) {
    console.log (modal)
    if (modal == true) {
        document.body.style.backgroundColor = "white"
        footer.style.backgroundColor = "white"


        for (let i = 0; i < container.length; i++) {
            console.log (container[i])
                container[i].style.display = "block"
                container[i].classList.remove("modal")
                container[i].classList.add("project-container")
        }
        function modalFalse() {
            modal = false
        }
    
        setTimeout (modalFalse, 10)

    }


}