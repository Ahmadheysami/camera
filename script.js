const video = document.querySelector("video"),
    canvas = document.querySelector("canvas"),
    download = document.querySelector(".download")

if (navigator.mediaDevices) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.srcObject = stream
    })
}

btn.addEventListener("click", () => {
    let width = 500, height = 650
    canvas.width = width
    canvas.height = height

    const context = canvas.getContext("2d")

    context.drawImage(video, 0, 0, width, height)
    download.setAttribute("href", canvas.toDataURL())

    download.click()
})