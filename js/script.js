let indexSlide = 1; //1, 2, 3

//Kontainer untuk img dan info slide
let listImage = document.getElementsByClassName("banner-img");
let listInfo = document.getElementsByClassName("slide-info");

//Kontainer logo nav mobile
const mobileNavIcon = document.getElementsByClassName('hover-nav')
let mobileNav = document.getElementById('nav-mobile-id')

//Algo untuk memeriksa apabila cursor diatas nav atau tidak
for (var i = 0 ; i < mobileNavIcon.length; i++) {
    mobileNavIcon[i].addEventListener('mouseover', () => {
        mobileNav.style.display = 'flex'
    }) ; 

    mobileNavIcon[i].addEventListener('mouseout', () => {
        mobileNav.style.display = 'none'
    })
}

//Kontainer untuk label eror
let verivLabel = document.getElementById("veriv-label")

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n) {
    console.log(listImage);
    console.log(listInfo);

    //Algoritma utk mereset index slide
    if (n > listImage.length) indexSlide = 1;

    //Algo menghilangkan semua gambar
    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        listInfo[index].style.display = 'none';
        index++;
    }

    //Algo memunculkan satu img saja
    listImage[indexSlide - 1].style.display = 'block';
    listInfo[indexSlide - 1].style.display = 'block';
}

setInterval(() => {nextSlide(1)}, 2000)

//Algoritma validasi form
function validateForm() {
    //Kontainer untuk setiap class form
    let name = document.forms['contact-form']['form-name'].value;
    let email = document.forms['contact-form']['form-email'].value;
    let select = document.forms['contact-form']['form-select'].value;

    //Kontainer untuk pengenalan pattern email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    function errorMessage() {
        verivLabel.style.color = '#ae2d68'
        setTimeout(() => {verivLabel.innerHTML = ""}, 3000)
    }

    if (name == '' || email == '') {
        verivLabel.innerHTML = 'Tidak boleh kosong!'
        errorMessage()
        return false
    }

    else if (emailRegex.test(email) == false) {
        verivLabel.innerHTML = 'Email tidak valid!'
        errorMessage()
        return false
    }

    else if (select == 'Pilih opsi') {
        verivLabel.innerHTML = 'Tidak ada paket terpilih!'
        errorMessage()
        return false
    }

    alert("terimakasih!")
}

function customPackage() {
    //Kontainer
    document.getElementById('default-opt').selected = false;
    document.getElementById('other-opt').selected = true;
    verivLabel.style.color = 'green'
    verivLabel.innerHTML = 'Silahkan isi nama dan email anda :)'
}

