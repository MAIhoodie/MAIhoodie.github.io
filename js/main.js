
document.addEventListener("DOMContentLoaded", function(){
    //  Для HEADER
    // Собственно, по нажатию вылазит корзина
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("header__cart") || event.target.classList.contains("header__counter") || event.target.classList.contains("cart-img")) {
            const cartWrapper = document.querySelector(".cart")
            cartWrapper.classList.toggle("cart_visible")
        }
    });

    
    // ДЛЯ FILTER В PRODUCTS
    let tagsList = document.querySelectorAll(".tag")
    console.log(tagsList)
    for (let item of tagsList) {
        if (item.checked) {
            let itemLabel = item.closest('label')
            itemLabel.classList.add("tag_checked")
        }
    }

    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("tag") && event.target.checked) {
            event.target.closest('label').classList.add('tag_checked')
        }

        else if (event.target.classList.contains("tag") && !(event.target.checked)) {
            event.target.closest('label').classList.remove('tag_checked')
        }
    });


    // Открытие списка с возможностью выйти, только для авторизованного пользователя
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("header__login") && event.target.innerHTML != "Войти") {
            document.querySelector(".logout").classList.toggle("logout_visible")
        }
    });

});