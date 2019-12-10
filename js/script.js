$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});


var modal = document.getElementById('modal-wrapper');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function validasisiswa() {
    var x = document.forms["siswa"]["nis"].value;
    if (x = null || x == "") {
        alert("Isi NIS/NIP!!!");
        return false;
    }
    var x = document.forms["siswa"]["password"].value;
    if (x = null || x == "") {
        alert("Isi PASSWORD!!!");
        return false;
    }
    var x = document.forms["siswa"]["password"].value;
    if (x == "siswa") {
        document.location = "siswa/index.html";
        alert("Selamat datang siswa!!!")
    } else {
        alert("NIP/NIS SALAH");
    }
}


function validasiguru() {
    var x = document.forms["guru"]["nis"].value;
    if (x = null || x == "") {
        alert("Isi NIS/NIP!!!");
        return false;
    }
    var x = document.forms["guru"]["password"].value;
    if (x = null || x == "") {
        alert("Isi PASSWORD!!!");
        return false;
    }
    var x = document.forms["guru"]["password"].value;
    if (x == "guru") {
        alert("Selamat datang GURU!!!")
        return false;
    } else {
        alert("NIP/NIS SALAH");
    }
}

function validasitugasubah() {
    var x = document.forms["ubah"]["no"].value;
    if (x = null || x == "") {
        alert("Isi NO!!!");
        return false;
    }
    var x = document.forms["ubah"]["tgs"].value;
    if (x = null || x == "") {
        alert("Isi TUGAS!!!");
        return false;
    }
    var x = document.forms["ubah"]["ket"].value;
    if (x = null || x == "") {
        alert("Isi KETERANGAN!!!")
        return false;
    }
}

function validasitugastambah() {
    var x = document.forms["tambah"]["no"].value;
    if (x = null || x == "") {
        alert("Isi NO!!!");
        return false;
    }
    var x = document.forms["tambah"]["tgs"].value;
    if (x = null || x == "") {
        alert("Isi TUGAS!!!");
        return false;
    }
    var x = document.forms["tambah"]["ket"].value;
    if (x = null || x == "") {
        alert("Isi KETERANGAN!!!")
        return false;
    }
}