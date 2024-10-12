<template>
    <Header />
    <div v-if="orderPlaced" class="order-success-message">
        <img class="thank-you-img" src="../assets/images/thank-you.svg" />
        <div class="empty-cart">Your Order Placed Successfully</div>
        <div>Thank you for shopping with us!</div>
    </div>
    <div v-else>
        <div v-if="cartProducts.length === 0" class="empty-cart-message">
            <img class="empty-cart-img" src="../assets/images/no-cart-item.svg" />
            <div class="empty-cart">Cart Is Empty</div>
            <div>Browse products and add them to your cart.</div>
        </div>
        <div v-else id="cart-cards">
            <div class="products">
                <div v-for="(product, index) in cartProducts" :key="index" class="products-data">
                    <img :src="`/_nuxt/assets/images/${product.src}.avif`" alt="Product Image" />
                    <div class="product-deatils">
                        <div class="product-name">{{ product.name }}</div>
                        <div class="product-description">{{ product.description }}</div>
                    </div>
                    <div id="select-size">
                        <div v-for="size in sizes" :key="size" :class="['product-size', {'selected-size': product.selectedSize === size}]" @click="commonStore.updateSize(product, size)(product, size)">
                            {{ size }}
                        </div>
                    </div>
                    <div id="quantity">
                        <button class="decrease-quantity" @click="decrement(product)">-</button>
                        <input class="total-quantity" type="text" v-model="product.quantity" readonly />
                        <button class="increase-quantity" @click="increment(product)">+</button>
                    </div>
                    <div class="product-price">₹{{ product.price }}</div>
                </div>
            </div>
            <div class="order-details">
                <div class="order-title">Order Details</div>
                <div class="order-item">
                <span>Total Order</span>
                <span>₹{{ totalPrice }}</span>
                </div>
                <div class="order-item">
                <span>Order discount</span>
                <span class="discount">- ₹{{ discount }}</span>
                </div>
                <div class="order-item">
                </div>
                <div class="order-item">
                <span>Delivery Fee</span>
                <span>₹99.00</span>
                </div>
                <hr>
                <div class="order-total">
                <span>Order Total</span>
                <span>₹{{ finalTotal }}</span>
                </div>
                <button class="proceed-button" @click="placeOrder">Place Order</button>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script setup lang="ts">
import Footer from '~/components/footer.vue';

const commonStore: any = useStore()
const { cartProducts }: any = storeToRefs(commonStore);
const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const orderPlaced = ref(false);
const increment = (product: any) => {
  const newQuantity = product.quantity + 1;
  commonStore.updateQuantity(product, newQuantity);
};
const decrement = (product: any) => {
  if (product.quantity > 1) {
    const newQuantity = product.quantity - 1;
    commonStore.updateQuantity(product, newQuantity);
  }
  else{
    commonStore.removeFromCart(product);
  }
};
const totalPrice = computed(() => {
  return cartProducts.value.reduce((total: number, product: any) => {
    return total + (product.price * product.quantity);
  }, 0);
});
const discount = computed(() => {
  return totalPrice.value * 0.20;
});
const finalTotal = computed(() => {
  return totalPrice.value - discount.value + 99;
});
function placeOrder(): void {
  commonStore.clearCart();
  commonStore.mensWearCollection.forEach((product: any) => {
    product.addedToCart = false;
  });
  orderPlaced.value = true;
}
</script>
<style lang="scss">
.order-success-message, .empty-cart-message{
    @apply flex justify-center flex-col items-center h-[80vh] items-center;
    .empty-cart{
        @apply text-[25px] font-semibold;
    }
    .empty-cart-img, .thank-you-img{
        @apply w-[30%];
    }
}
#cart-cards{
    @apply pt-[60px] flex px-[150px] pb-2;
    .products{
        @apply w-[80%];
    }
    .products-data{
        @apply flex border rounded-md shadow-sm h-[250px] gap-12;
        .product-deatils{
            @apply flex items-center flex-col justify-center;
        }
        .product-name, .product-description, .product-price{
            @apply flex justify-center text-center;
        }
        .product-name{
            @apply font-medium;
            color: #866528;
        }
        .product-description, .product-price{
            @apply text-[14px];
        }
        .product-price{
            @apply flex justify-center items-center font-semibold;
        }
        #select-size{
            @apply flex justify-center items-center gap-1;
            .product-size{
                @apply flex justify-center items-center cursor-pointer border rounded-2xl w-[30px] h-[30px] text-[13px];
            }
        }
        .selected-size {
            background-color: #2C4152;
            color: white;
        }
        #quantity{
            @apply flex justify-center items-center relative mt-[4px];
            .decrease-quantity, .increase-quantity, .total-quantity{
                @apply w-[25px] flex text-center border items-center justify-center px-[5px];
            }
        }
    }
    .order-details{
        @apply ml-[20px] p-4 border h-[400px] w-[300px];
        .order-details-container {
            @apply w-[300px] p-5 bg-white border border-gray-300 rounded-md;
        }
        .order-title {
            @apply text-lg font-bold mb-2;
        }
        .order-item {
            @apply flex justify-between my-2;
        }
        .discount {
            @apply text-red-600;
        }
        .order-total {
            @apply flex justify-between text-xl font-bold my-2;
        }
        .proceed-button {
            @apply w-full py-2 mt-4 bg-[#795f2b] text-white rounded-lg font-semibold uppercase hover:bg-[#5a4722];
        }
    }
}
body::-webkit-scrollbar{
    @apply hidden;
}
</style>