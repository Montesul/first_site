"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let req = {
            login: document.getElementById('input_login').value,
            password: document.getElementById('input_password').value
        }

        let data = new FormData();
        data.append("json", JSON.stringify(req));

        let formDate = new FormData(form);

        let error = formValidate(form);

        if (error === 0) {

            let response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                //body: JSON.stringify(req)
                body: formDate
            });

            if (response.ok) {
                let result = await response.json();
                console.log(result);
            }

        } else {
            console.log("login or password is emptey");
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');
    

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];

            if (input.value === "") {
                formAddError(input);
                error++;
            } else {
                formRemoveError(input);
                if (error > 0 ) {
                    error--;
                }
            }

        }

        return error;
    }

    function formAddError(input) {
        //input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        //input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

});