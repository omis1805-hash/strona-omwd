document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener('click', (e) => {
        const adres = link.getAttribute('href');

        if (!adres || adres.startsWith('#') || adres.startsWith('http') || link.target === '_blank') {
            return;
        }

        e.preventDefault();
        document.body.classList.add('wychodzenie');

        setTimeout(() => {
            window.location.href = adres;
        }, 300);
    });
});

document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener('click', (e) => {
        const adres = link.getAttribute('href');

        if (!adres || adres.startsWith('#') || adres.startsWith('http') || link.target === '_blank') {
            return;
        }

        e.preventDefault();
        document.body.classList.add('wychodzenie');

        setTimeout(() => {
            window.location.href = adres;
        }, 300);
    });
});

const czyTelefon = window.matchMedia('(max-width: 850px)');
const klasyPozycji = ['zdjecie-glowne', 'zdjecie-bok', 'zdjecie-lewe', 'zdjecie-prawe'];

function pobierzKlasyPozycji(img) {
    return klasyPozycji.filter((klasa) => img.classList.contains(klasa));
}

function ustawKlasyPozycji(img, noweKlasy) {
    img.classList.remove(...klasyPozycji);
    img.classList.add(...noweKlasy);
}

document.querySelectorAll('.stos-zdjec').forEach((stos) => {
    stos.addEventListener('click', (e) => {
        if (!czyTelefon.matches) return;

        const klikniete = e.target.closest('img');
        if (!klikniete || !stos.contains(klikniete)) return;

        const srodkowe = stos.querySelector('.zdjecie-glowne');
        if (!srodkowe || srodkowe === klikniete) return;

        const klasyKliknietego = pobierzKlasyPozycji(klikniete);
        const klasySrodkowego = pobierzKlasyPozycji(srodkowe);

        ustawKlasyPozycji(klikniete, klasySrodkowego);
        ustawKlasyPozycji(srodkowe, klasyKliknietego);
    });
});