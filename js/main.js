let selectedNumber = 0
let stage = "not rated"

document.addEventListener("DOMContentLoaded", function () {
  let ratingLabels = document.getElementsByClassName("for-rating")
  const thanksContent = document.getElementById("thanks")
  const ratingContent = document.getElementById("rating-window")
  const ratingNumber = document.getElementById("selected-num")
  for (let i = 0; i < ratingLabels.length; i++) {
    ratingLabels[i].addEventListener("click", function () {
      selectedNumber = i + 1
      console.log("clicked " + selectedNumber)
    })
  }
  let submitButton = document.getElementById("submit-rating")
  submitButton.addEventListener("click", function () {
    if (selectedNumber > 0) {
      ratingContent.style.display = "none"
      thanksContent.style.display = "flex"
      ratingNumber.innerHTML = selectedNumber
    }
  })
})
