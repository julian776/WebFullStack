let canvs = document.getElementById("canvas")
lienzo = canvs.getContext("2d")

function get_time(){
    let hour = new Date()
    let minutes = hour.getMinutes()
    let seconds = hour.getSeconds()
    hour = hour.getHours()
    return hour+":"+minutes+":"+seconds
}

function write(){
    lienzo.fillStyle = "black"
    lienzo.fillRect(0,0,canvs.width,canvs.height);
    lienzo.font = "350px Arial"
    lienzo.fillStyle = "white"
    lienzo.fillText(get_time(), 50, 500)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function update_time() {
    write()
    await sleep(1000)
    
    while(true) {
        write()
        await sleep(1000)
    }
}

update_time()
