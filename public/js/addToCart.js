let productsList = document.querySelector('.productsList');

productsList.addEventListener('click', async (ev) => {
    let button = ev.target.closest('.addToCart');
    if (button) {
        let productId = button.getAttribute('productId');
        let originalHTML = button.innerHTML;

        button.disabled = true;
        button.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Adding...';

        console.log(productId);
        try {
            let data = await axios.get(`/shop/addToCart?productId=${productId}`);
            console.log(data);
            let cartCount = document.querySelector('.cartCount');
            cartCount.innerText = data.data.cartCount;
            console.log(cartCount);
            let sideView = document.querySelector('.sideView');
            sideView.classList.toggle('showCart');
            
            button.innerHTML = 'Added!';
            button.classList.remove('btn-primary');
            button.classList.add('btn-success');

            setTimeout(() => {
                button.disabled = false;
                button.innerHTML = originalHTML;
                button.classList.remove('btn-success');
                button.classList.add('btn-primary');
            }, 2000);

        } catch (err) {
            console.log(err)
            button.disabled = false;
            button.innerHTML = originalHTML;
        }
    }

})


