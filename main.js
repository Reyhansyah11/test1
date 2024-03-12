document.addEventListener('DOMContentLoaded', function() {

    const angkaBoom = Math.floor(Math.random() * 100) + 1;
    let rentangMin = 1;
    let rentangMax = 100;

    const inputField = document.querySelector('.input-user');
    const tombolCheck = document.querySelector('.check');
    const tampilanHasil = document.querySelector('.result');
    const tampilanRentang = document.querySelector('.tebak-angka');


    tampilanRentang.textContent = `${rentangMin} - ${rentangMax}`;

    tombolCheck.addEventListener('click', function() {
        const tebakanPengguna = parseInt(inputField.value);

        if (isNaN(tebakanPengguna)) {
            tampilanHasil.textContent = 'Harap masukkan tebakan Anda!';
            tampilanHasil.style.color = 'white'; 
            return; 
        }

        if (tebakanPengguna === angkaBoom) {
            tampilanHasil.textContent = 'BOOM!';
            tampilanHasil.style.color = 'green';
        } else {
            
            if (tebakanPengguna < angkaBoom) {
                rentangMin = Math.max(rentangMin, tebakanPengguna + 1);
            } else {
                rentangMax = Math.min(rentangMax, tebakanPengguna - 1);
            }

            tampilanRentang.textContent = `${rentangMin} - ${rentangMax}`;

            const jarak = Math.abs(angkaBoom - tebakanPengguna);

            if (jarak <= 10) {
                tampilanHasil.style.color = 'yellow'; 
            } else {
                tampilanHasil.style.color = 'red'; 
            }

            tampilanHasil.textContent = 'Ayo, Tebak lagi!';
        }

        if (rentangMin >= rentangMax) {
            tampilanHasil.textContent = 'BOOM!';
            tombolCheck.disabled = true;
        }

    });

});
