// Slide Logic
let slide_index = 0;
const slides = document.querySelectorAll('.slide');

const hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active');
    });
}

const showSlide = () => {
    hideAllSlide();
    slides[slide_index].classList.add('active');
}

const nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1;

const prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1;

// Control slideshow navigation
document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide();
    showSlide();
});

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide();
    showSlide();
});

// Product Data
let products = [
    
    {
        name: 'Crompton 750W Mixer ',
        image1: './images/G-Disk.jpg',
        image2: './images/Zolo.jpg',
        old_price: '₹ 700',
        curr_price: '₹ 600'
    },
    {
        name: 'GreatWhite Trivo White Socket',
        image1: './images/greatwhite-fiana-white-3-pin-10-a-2-module-socket-2.jpeg',
        image2: './images/greatwhite-trivo-white-3-pin-16-a-2-module-socket-1.jpeg',
        old_price: '₹ 80',
        curr_price: '₹ 66'
    },
    {
        name: 'Nostrum Switches',
        image1: './images/nostrum switches.jpg',
        image2: './images/nostrum-aura-grizzle-grey-modular-switch-board-dw8dagpk.avif',
        old_price: '₹ 80',
        curr_price: '₹ 70'
    },
    {
        name: 'Nostrum Power Strip',
        image1: './images/multi-sockets-power-extension-board-260nw nostrum.webp',
        image2: './images/soket.webp',
        old_price: '₹ 170',
        curr_price: '₹ 160'
    },
    {
        name: 'Multicore-Cable',
        image1: './images/Multicore-Cable nostrum.jpg',
        image2: './images/Twincore-Cable-500x500.jpg',
        old_price: '₹ 1000',
        curr_price: '₹ 900'
    },
    {
        name: 'Crompton Fans',
        image1: './images/Fan 2nd.webp',
        image2: './images/crompton fans catalogue 2022.webp',
        old_price: '₹ 19,999',
        curr_price: '₹ 16,999'
    },
    {
        name: '6A Modular Switches',
        image1: './images/titanium-range.jpg',
        image2: './images/modular-switches-5.webp',
        old_price: '₹ 700',
        curr_price: '₹ 500'
    },
    {
        name: 'Nostrum MCB-9 ',
        image1: './images/nostrum MCB-9.jpg',
        image2: './images/MCB2.webp',
        old_price: '₹ 500',
        curr_price: '₹ 650'
    },
    {
        name: 'Led Magnetic Track Light ',
        image1: './images/LED2.avif',
        image2: './images/Magnetic-Series light lafit.png',
        old_price: '₹ 1,200',
        curr_price: '₹ 1,000'
    },
    {
        name: 'Black Magnetic LED',
        image1: './images/A046 CD 7W UR Lighting.png',
        image2: './images/light 2.PNG',
        old_price: '₹ 1,200',
        curr_price: '₹ 1,050'
    },
    {
        name: 'Crompton LED Bulb  ',
        image1: './images/New-Project-44-1.jpg',
        image2: './images/Crompton Lyor LED Bulb - Energy-Efficient & Eco-Friendly Night Lamp.webp',
        old_price: '₹ 200',
        curr_price: '₹ 140'
    },
    {
        name: 'Crompton 750W Mixer ',
        image1: './images/acgm-ameo-crompton-original-mixer.webp',
        image2: './images/mixer 2.webp',
        old_price: '₹ 7,000',
        curr_price: '₹ 5,600'
    },
];

// Render Products
let product_list = document.querySelector('#latest-products');

function renderProducts(productsToRender) {
    product_list.innerHTML = ''; // Clear current products
    productsToRender.forEach(e => {
        let prod = `
            <div class="col-3 col-md-6 col-sm-12 product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        `;
        product_list.insertAdjacentHTML("beforeend", prod);
    });
}

renderProducts(products); // Initial render


