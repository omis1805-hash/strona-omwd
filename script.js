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

const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('is-open');
        burgerBtn.classList.toggle('is-open', isOpen);
        burgerBtn.setAttribute('aria-expanded', String(isOpen));
        burgerBtn.setAttribute('aria-label', isOpen ? 'Zamknij menu' : 'Otw�rz menu');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('is-open');
            burgerBtn.classList.remove('is-open');
            burgerBtn.setAttribute('aria-expanded', 'false');
            burgerBtn.setAttribute('aria-label', 'Otw�rz menu');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
            navMenu.classList.remove('is-open');
            burgerBtn.classList.remove('is-open');
            burgerBtn.setAttribute('aria-expanded', 'false');
            burgerBtn.setAttribute('aria-label', 'Otw�rz menu');
        }
    });
}

const grid = document.querySelector(".example-grid");
const examples = [
    "Mechanik",
    "Fryzjer / Barber",
    "Kosmetologia",
    "Remonty",
    "Hydraulik / Elektryk",
    "Auto detailing"
];

function renderPaczke(ukrytaDlaCzytnikow = false) {
    for (let i = 0; i < examples.length; i++) {
        const box = document.createElement("button");
        box.type = "button";
        box.classList.add("example-box");
        box.textContent = examples[i];

        if (ukrytaDlaCzytnikow) {
            box.setAttribute("aria-hidden", "true");
            box.tabIndex = -1;
        }


        grid.appendChild(box);
    }
}

function exampleMarquee() {
    if (!grid) return;
    grid.innerHTML = "";

    renderPaczke(false);
    renderPaczke(true);
}

exampleMarquee();
