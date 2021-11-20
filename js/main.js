
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

    // ДЛЯ RADIO КНОПОК В PRODUCTS

    document.addEventListener("click", function(event){
        if (event.target.classList.contains("radio") && event.target.checked) {
            event.target.closest('label').classList.add('radio_checked')
        }

        let allRadio = document.querySelectorAll(".radio")
        for (let radioItem of allRadio) {
            if (radioItem != event.target && event.target.checked) {
                let radioItemLabel =  radioItem.closest("label")
                radioItemLabel.classList.remove('radio_checked')
            }
        }
    });

    // ДЛЯ + и - В ПОЛНОЙ КАРТОЧКЕ ТОВАРА
    let number = document.querySelector(".hoody_quantity").value;
    console.log(number)


    document.addEventListener("click", function(event){ 
        let item = event.target
        if (item.classList.contains("hoody_plus")) {
            number = +number + 1;
        }
        if (item.classList.contains("hoody_minus") && number > 1) {
            number = +number - 1;
        }
        document.querySelector(".hoody_quantity").value = number
    });


    // Открытие списка с возможностью выйти, только для авторизованного пользователя
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("header__login") && event.target.innerHTML != "Войти") {
            document.querySelector(".logout").classList.toggle("logout_visible")
        }
    });

});