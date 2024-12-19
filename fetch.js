const educationssection = document.getElementById ("educations")
const worksection = document.getElementById ("workplaces")
console.log (educationssection)
async function fetchjson() {
    try {
        console.log ("world!")
        const response = await fetch("./about_me.json");

        if (!response.ok) {
            throw new Error (`HTTP error! status: ${response.status}`)
        }

        const data = await response.json();

        return data
    } catch (error) {
        console.error("Error fetching quiz data:", error)
    }
    
};

createarticle()

async function createarticle() {

    console.log ("hello")

    const data = await fetchjson()
    const educations = data.educations;
    const workexperience = data.workexperience

    for (let i = 0; i < educations.length; i++) {
        let art = document.createElement("article")

        let head = document.createElement("header")
        head.classList.add("article-header")
        art.appendChild(head)

        let h3 = document.createElement("h3")
        let node1 = document.createTextNode(educations[i].field)
        h3.appendChild(node1)
        head.appendChild(h3)

        let div1 = document.createElement("div")
        div1.classList.add("green-text")
        head.appendChild(div1)

        let p1 = document.createElement("p")
        let node2 = document.createTextNode(educations[i].type)
        p1.appendChild(node2)
        div1.appendChild(p1)

        let div2 = document.createElement("div")
        div2.classList.add("article-body")
        art.appendChild(div2)

        let div3 = document.createElement("div")
        div3.classList.add("article-content")
        div2.appendChild(div3)

        let div4 = document.createElement("div")
        div4.classList.add("text-with-icon")
        div3.appendChild(div4)

        let img1 = document.createElement("img")
        img1.src = "./images/mdi_office-building.png"
        div4.appendChild(img1)

        let p2 = document.createElement("p")
        let node3 = document.createTextNode(educations[i].school)
        p2.appendChild(node3)
        div4.appendChild(p2)

        let div5 = document.createElement("div")
        div5.classList.add("text-with-icon")
        div3.appendChild(div5)

        let img2 = document.createElement("img")
        img2.src = "./images/carbon_location.png"
        div5.appendChild(img2)

        let p3 = document.createElement("p")
        let node4 = document.createTextNode(educations[i].location)
        p3.appendChild(node4)
        div5.appendChild(p3)

        let div6 = document.createElement("div")
        div2.appendChild(div6)

        let p4 = document.createElement("p")
        let node5 = document.createTextNode(educations[i].duration)
        p4.appendChild(node5)
        div6.appendChild(p4)




        educationssection.appendChild(art)
        console.log (art)

    }

    for (let i = 0; i < workexperience.length; i++) {
        let art = document.createElement("article")

        let head = document.createElement("header")
        head.classList.add("article-header")
        art.appendChild(head)

        let h3 = document.createElement("h3")
        let node1 = document.createTextNode(workexperience[i].field)
        h3.appendChild(node1)
        head.appendChild(h3)

        let div1 = document.createElement("div")
        div1.classList.add("green-text")
        head.appendChild(div1)

        let p1 = document.createElement("p")
        let node2 = document.createTextNode(workexperience[i].type)
        p1.appendChild(node2)
        div1.appendChild(p1)

        let div2 = document.createElement("div")
        div2.classList.add("article-body")
        art.appendChild(div2)

        let div3 = document.createElement("div")
        div3.classList.add("article-content")
        div2.appendChild(div3)

        let div4 = document.createElement("div")
        div4.classList.add("text-with-icon")
        div3.appendChild(div4)

        let img1 = document.createElement("img")
        img1.src = "./images/mdi_office-building.png"
        div4.appendChild(img1)

        let p2 = document.createElement("p")
        let node3 = document.createTextNode(workexperience[i].companyname)
        p2.appendChild(node3)
        div4.appendChild(p2)

        let div5 = document.createElement("div")
        div5.classList.add("text-with-icon")
        div3.appendChild(div5)

        let img2 = document.createElement("img")
        img2.src = "./images/carbon_location.png"
        div5.appendChild(img2)

        let p3 = document.createElement("p")
        let node4 = document.createTextNode(workexperience[i].location)
        p3.appendChild(node4)
        div5.appendChild(p3)

        let div6 = document.createElement("div")
        div2.appendChild(div6)

        let p4 = document.createElement("p")
        let node5 = document.createTextNode(workexperience[i].duration)
        p4.appendChild(node5)
        div6.appendChild(p4)




        worksection.appendChild(art)
        console.log (art)

    }
}