async function rupesh() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg")
        }, 2000)
    })

    let mumbaiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("20 Deg")
        }, 5000)
    })

    // delhiWeather.then(alert);
    // mumbaiWeather.then(alert);
    console.log("Fetching Delhi Weather Please Wait....")
    let delhiW = await delhiWeather
    console.log("Featched Delhi Weather: " + delhiW)
    console.log("Feathing Mumbai Weather Please wait...")
    let mumbaiW = await mumbaiWeather
    console.log("Featched Mumbai Weather: " + mumbaiW)
    return [delhiW, mumbaiW]
}
console.log("Welcome to weather control room")
let a = rupesh()
a.then((value) => {
    console.log(value)
})
// console.log(a)