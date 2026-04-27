let productsList = document.querySelector('.productsList');

productsList.addEventListener('click', async (ev) => {
    if (ev.target.classList.contains('addToCart')) {
        let button = ev.target;
        let productId = button.getAttribute('productId');
        let originalText = button.innerText;

        button.disabled = true;
        button.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Adding...';

        console.log(productId);
        try {
            let data = await axios.get(`/shop/addToCart?productId=${productId}`);
            console.log(data);
            let cartCount = document.querySelector('.cartCount');
            cartCount.innerText = data.data.cartCount;
            console.log(cartCount);
            let sideView = document.querySelector('.sideView');
            sideView.classList.toggle('showCart');
            
            button.innerText = 'Added!';
            button.classList.remove('btn-primary');
            button.classList.add('btn-success');

            setTimeout(() => {
                button.disabled = false;
                button.innerText = originalText;
                button.classList.remove('btn-success');
                button.classList.add('btn-primary');
            }, 2000);

        } catch (err) {
            console.log(err)
            button.disabled = false;
            button.innerText = originalText;
        }
    }

})


