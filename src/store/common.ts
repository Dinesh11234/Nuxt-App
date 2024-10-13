import collectionData from '../../menWearData.json';
export const useStore: any = defineStore('storeInfo', () => {
    let cartProducts: Ref<any> = ref([]);
    let mensWearCollection = ref(collectionData.mensWear.map((product: any) => ({
        ...product,
        addedToCart: false,
    })));
    function addToCart(product: any) {
      if (!cartProducts.value.some((p: { name: any; }) => p.name === product.name)) {
          cartProducts.value.push({
            ...product,
            quantity: 1,    
            selectedSize: 'M'
          });
        }
        const mensWearProduct = mensWearCollection.value.find(p => p.name === product.name);
        if (mensWearProduct) {
            mensWearProduct.addedToCart = true;
        }
    }
    function updateSize(product: any, size: string) {
      const cartProduct = cartProducts.value.find((p: { name: any; }) => p.name === product.name);
      if (cartProduct) {
        cartProduct.selectedSize = size;
      }
    }
    function updateQuantity(product: any, newQuantity: number) {
      const cartProduct = cartProducts.value.find((p: { name: any; }) => p.name === product.name);
      if (cartProduct) {
        cartProduct.quantity = newQuantity;
      }
    }
    function removeFromCart(product: any) {
      cartProducts.value = cartProducts.value.filter((p: any) => p.name !== product.name);
  
      const mensWearProduct = mensWearCollection.value.find(p => p.name === product.name);
      if (mensWearProduct) {
        mensWearProduct.addedToCart = false;
      }
    }
    function clearCart() {
      cartProducts.value = [];
    }
    return {
      cartProducts,
      mensWearCollection,
      addToCart,
      updateSize,
      updateQuantity,
      removeFromCart,
      clearCart
    };
  });
  
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
  }
  