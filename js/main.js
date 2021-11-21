
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
    // let number = document.querySelector(".hoody_quantity").value;
    document.addEventListener("click", function(event){ 
        let item = event.target
        if (item.classList.contains("hoody_plus")) {
            let number = event.target.nextElementSibling.value
            number = +number + 1;
            event.target.nextElementSibling.value = number
        }

        if (item.classList.contains("hoody_minus")) {
            let number = event.target.previousElementSibling.value
            if (number > 1) {
                console.log(number)
                number = +number - 1;
                event.target.previousElementSibling.value = number
            }
        }
    });


    // ДЛЯ КНОПКИ ПОДРОБНЕЕ И СКРЫТЬ В ПОЛНОЙ КАРТОЧКЕ ТОВАРА
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("about_button")) {
            const listItemFull = document.querySelectorAll(".product_full")
            const listItem = document.querySelectorAll(".product")
            for (let currentItem of listItemFull) {
                currentItem.classList.remove("d-flex")
            }
            for (let currentItem of listItem) {
                currentItem.classList.remove("non-visible")
            }
            const item = event.target.closest('.product')
            const itemID =  item.querySelector(".hoody_id").innerHTML
            const itemFull = item.nextElementSibling
            item.classList.add('non-visible')
            itemFull.classList.add("d-flex")
        }   
    });

    // document.addEventListener("click", function(event) {
    //     if (event.target.classList.contains("hide_button")) {
    //         const itemFull = event.target.closest('.product_full')
    //         const itemID =  item.querySelector(".hoody_id").innerHTML
    //         const item = item.previousElementSibling  
    //         item.classList.remove('non-visible')
    //         itemFull.classList.remove("d-flex")
    //     }   
    // });

    // Открытие списка с возможностью выйти, только для авторизованного пользователя
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("header__login") && event.target.innerHTML != "Войти") {
            document.querySelector(".logout").classList.toggle("logout_visible")
        }
    });

});