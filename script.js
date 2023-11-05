const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".container__thanks")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rateScore = document.querySelectorAll(".rating__btn")


//Submit button
submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

//Rate again button
rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "block"
})


//Rate score
rateScore.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})