//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll('.star');
    const reviewInput = document.getElementById('review');
    const submitButton = document.getElementById('submit-review');
    const reviewList = document.getElementById('reviews');
    let selectedRating = 0;

    // Menambahkan event listener pada bintang rating
    stars.forEach(star => {
        star.addEventListener('click', function () {
            selectedRating = this.getAttribute('data-value');
            updateStarRating(selectedRating);
        });
    });

    // Fungsi untuk memperbarui tampilan bintang
    function updateStarRating(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    // Event listener untuk tombol kirim ulasan
    submitButton.addEventListener('click', function () {
        const reviewText = reviewInput.value;

        if (selectedRating > 0 && reviewText.trim() !== "") {
            const reviewItem = document.createElement('li');
            reviewItem.classList.add('review-item');
            reviewItem.innerHTML = `
                <div class="star-rating">${generateStarRating(selectedRating)}</div>
                <p>${reviewText}</p>
            `;
            reviewList.appendChild(reviewItem);

            // Reset setelah ulasan ditambahkan
            reviewInput.value = '';
            updateStarRating(0);
        } else {
            alert('Mohon berikan rating dan ulasan sebelum mengirim.');
        }
    });

    // Fungsi untuk menghasilkan tampilan bintang dalam ulasan
    function generateStarRating(rating) {
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            starsHtml += i <= rating ? '&#9733;' : '&#9734;';
        }
        return starsHtml;
    }
});
