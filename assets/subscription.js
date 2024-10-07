document.addEventListener('DOMContentLoaded', function() {
  const heroProduct = document.querySelector('#heroProduct');
  const productVariants = document.querySelectorAll('.product-variant');
  const productButtonPrice = document.querySelector('.product-button-price');
  const form = document.querySelector('#product-add-form');
  const submitButton = form ? form.querySelector('button[type="submit"]') : null;
  
  // Function to show the hero product section
  function triggerHeroProduct() {
    if (heroProduct) {
      heroProduct.removeAttribute('hidden');
      heroProduct.setAttribute('aria-hidden', 'false');
      heroProduct.style.display = 'block';
      heroProduct.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Event delegation for buttons triggering hero product visibility
  document.body.addEventListener('click', function(event) {
    if (event.target.matches('[data-action="trigger-hero-product"]')) {
      triggerHeroProduct();
    }
  });

  // Change the button price based on the selected variant
  function updateButtonPrice(event) {
    const variantInput = event.currentTarget.querySelector('input[type="radio"]');
    if (variantInput && variantInput.disabled) {
      event.preventDefault();
      return;
    }
    const variantPrice = event.currentTarget.getAttribute('data-variant-price');
    if (variantPrice) {
      productButtonPrice.textContent = Shopify.formatMoney(variantPrice);
    }
  }

  productVariants.forEach(variant => {
    variant.addEventListener('click', updateButtonPrice);
  });

  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const selectedVariant = form.querySelector('input[name="id"]:checked');
      const productName = selectedVariant ? selectedVariant.getAttribute('product-name') : null;

      if (!selectedVariant) {
        console.error('No variant selected');
        return;
      }

      // Update the button to indicate submission
      const buttonTextToChange = submitButton.querySelector('.button-text-to-change');
      buttonTextToChange.textContent = 'Submitting...';

      // Prepare and send the form data
      const formData = new FormData();
      formData.append('id', selectedVariant.value);
      formData.append('quantity', 1);

      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(() => {
        triggerPageMessage('success', `${productName} was successfully added to cart!`);
        buttonTextToChange.textContent = 'Added to Cart';
      })
      .catch(() => {
        triggerPageMessage('error', 'Failed to add product to cart. Please try again.');
        buttonTextToChange.textContent = 'Add to Cart';
      });
    });
  }
});