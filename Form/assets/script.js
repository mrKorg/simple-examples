(function () {
    "use strict";
    let form = document.getElementById('form');
    const inputsArr = form.querySelectorAll('input');
    const validations = {
        text: function (value) {
            return value && /^([^0-9]*).{1,100}$/.test(value);
        },
        email: function (value) {
            return value && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        },
        password: function (value) {
            return value && /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,100}$/.test(value);
        }
    }

    function clearErrors() {
        inputsArr.forEach(input => {
            const parent = input.closest(".form__item");
            parent.classList.remove("has-error");
        })
        form.classList.remove("has-error");
    }

    function clearForm() {
        inputsArr.forEach(input => {
            input.value = '';
        })
    }

    function initForm() {
        inputsArr.forEach(input => {
            input.addEventListener('input', function () {
                clearErrors();
            })
        })
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let i = 0;
            let isValid = true
            while (i < inputsArr.length) {
                let validationName = inputsArr[i].getAttribute('data-validation');
                const parent = inputsArr[i].closest(".form__item");
                if (!validations[validationName](inputsArr[i].value)) {
                    parent.classList.add("has-error");
                    form.classList.add("has-error");
                    isValid = false;
                }
                i++;
            }
            if (isValid) {
                alert('Submit form');
                clearForm();
            } else {
                setTimeout(() => {
                    clearErrors();
                }, 10000)
            }

        }, false)
    }

    initForm();
}());
