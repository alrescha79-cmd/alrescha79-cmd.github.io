// Free Qrcode Generator

function generateQR() {
    const downloadQR = document.querySelector(".btn-download");
    const clear = document.querySelector(".btn-clear");
    let qrInput = document.getElementById("input-qr");
    let canvas = document.getElementById("canvas-qr");

    QRCode.toCanvas(canvas, qrInput.value, function (error) {
        // if (error) console.error(error);
        // if value is empty
        if (qrInput.value === "") {
            alert("Silahkan isi terlebih dahulu");
        } 
    });

    // clear text input
    clear.addEventListener("click", () => {
        qrInput.value = "";
    });

    // download qrcode
    downloadQR.addEventListener('click', () => {
        // if value is empty
        if (qrInput.value === "") {
            alert("Tidak ada data yang akan diunduh");
        } else {
        var link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = document.getElementById("input-qr").value + " by MultiTools";
        link.click(); }
        
    });
}


// Back to previous page
const back = document.querySelector('header img');

back.addEventListener('click', () => {
    window.history.back();
} );