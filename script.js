const video = document.querySelector("video"),
    canvas = document.querySelector("canvas"),
    download = document.querySelector(".download")

if (navigator.mediaDevices) {
    navigator.mediaDevices.enumerateDevices().then(devices => {
        const [camera] = devices.filter(device => device.kind === "videoinput")

        navigator.mediaDevices.getUserMedia({ video: { deviceId: camera.deviceId, facingMode: "user" } }).then(stream => {
            video.srcObject = stream
        })
    })
}

capture.addEventListener("click", () => {
    let width = 500, height = 650
    canvas.width = width
    canvas.height = height

    const context = canvas.getContext("2d")

    context.drawImage(video, 0, 0, width, height)
    download.setAttribute("href", canvas.toDataURL())
    download.setAttribute("download", Date.now() + ".png")

    download.click()
})