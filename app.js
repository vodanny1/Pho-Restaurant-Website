const fb = document.querySelector("#facebook")
const ig = document.querySelector("#instagram")
const email = document.querySelector("#email")
// const ubereats = document.querySelector("#ubereats")
const ubereats = document.querySelector(".uberFrame")


fb.addEventListener('click', function (e) {
    location.href = "https://www.facebook.com/Pho-Dui-Bo-Stoney-Creek-103024974930397"
})
ig.addEventListener('click', function (e) {
    location.href = "https://www.instagram.com/phoduibostoneycreek/"
})
email.addEventListener('click', function (e) {
    window.location = "mailto:info@pho-daubo.com"
})
ubereats.addEventListener('click', function (e) {
    location.href = "https://www.ubereats.com/ca/store/pho-dui-bo-stoney-creek/L_3QxGCET9KKrJu6eT_bqA?diningMode=DELIVERY"
})

const border = document.querySelector(".border")
const height = window.innerHeight
const width = window.innerWidth

border.style.border = "50px double white"
border.style.width = width
border.style.height = height
