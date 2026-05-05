let productsList = document.querySelector('.productsList');

productsList.addEventListener('click', async (ev) => {
    let button = ev.target.closest('.addToCart');
    if (button) {
        let productId = button.getAttribute('productId');
        let originalText = button.innerHTML; // Using innerHTML to preserve potential icon

        button.disabled = true;
        button.innerHTML = '<span class="spinner-border spinner-border-sm" aria-hidden="true"></span> <span role="status">Adding...</span>';

        console.log(productId);
        try {
            let data = await axios.get(`/shop/addToCart?productId=${productId}`);
            console.log(data);
            let cartCount = document.querySelector('.cartCount');
            cartCount.innerText = data.data.cartCount;
            console.log(cartCount);
            let sideView = document.querySelector('.sideView');
            sideView.classList.toggle('showCart');
            
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill me-1" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg> Added!';
            button.classList.remove('btn-primary');
            button.classList.add('btn-success');

            setTimeout(() => {
                button.disabled = false;
                button.innerHTML = originalText;
                button.classList.remove('btn-success');
                button.classList.add('btn-primary');
            }, 2000);

        } catch (err) {
            console.log(err)
            button.disabled = false;
            button.innerHTML = originalText;
        }
    }

})
