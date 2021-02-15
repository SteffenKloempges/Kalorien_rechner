let height = document.getElementById('height')
let weight = document.getElementById('weight')
let age = document.getElementById('age')
let male = document.getElementById('male')
let female = document.getElementById('female')
let activity = document.getElementById('activity')
let grundumsatzOutput = document.getElementById('grundumsatzOutput')
let gesamtumsatzOutput = document.getElementById('gesamtumsatzOutput')




function Kalorie() {

    let a = weight.value * 13.7
    let b = height.value * 5
    let c = age.value * 6.8
    let d = 664.7 + a + b - c
    console.log(d)


    if (male.checked) {
        let a = weight.value * 13.7
        let b = height.value * 5
        let c = age.value * 6.8
        let d = 664.7 + a + b - c

        grundumsatzOutput.innerHTML = Number(d).toFixed(2)
        if (activity.value == "sleep") {
            gesamtumsatzOutput.innerHTML = (d * 0.95).toFixed(2)
        } else if (activity.value == "sit") {
            gesamtumsatzOutput.innerHTML = (d * 1.2).toFixed(2)
        } else if (activity.value == "sittingWork") {
            gesamtumsatzOutput.innerHTML = (d * 1.5).toFixed(2)
        } else if (activity.value == "workWithWalk") {
            gesamtumsatzOutput.innerHTML = (d * 1.7).toFixed(2)
        } else if (activity.value == "standingWork") {
            gesamtumsatzOutput.innerHTML = (d * 1.9).toFixed(2)
        } else if (activity.value == "hardWork") {
            gesamtumsatzOutput.innerHTML = (d * 2.2).toFixed(2)
        }
    }

    if (female.checked) {
        let a = weight.value * 9.6
        let b = height.value * 1.8
        let c = age.value * 4.7
        let d = 655.1 + a + b - c

        grundumsatzOutput.innerHTML = Number(d).toFixed(2)
        if (activity.value == "sleep") {
            gesamtumsatzOutput.innerHTML = (d * 0.95).toFixed(2)
        } else if (activity.value == "sit") {
            gesamtumsatzOutput.innerHTML = (d * 1.2).toFixed(2)
        } else if (activity.value == "sittingWork") {
            gesamtumsatzOutput.innerHTML = (d * 1.5).toFixed(2)
        } else if (activity.value == "workWithWalk") {
            gesamtumsatzOutput.innerHTML = (d * 1.7).toFixed(2)
        } else if (activity.value == "standingWork") {
            gesamtumsatzOutput.innerHTML = (d * 1.9).toFixed(2)
        } else if (activity.value == "hardWork") {
            gesamtumsatzOutput.innerHTML = (d * 2.2).toFixed(2)
        }
    }
}
