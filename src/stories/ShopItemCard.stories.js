import ShopItemCard from '../components/shop_item_card/ShopItemCard'

export default {
    title: 'Components/Shop Item Card',
    component: ShopItemCard,
      parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
}

const Template = args => <ShopItemCard {...args}/>

export const Default = Template.bind({})
Default.args = {
  title: "Air Jordan 1 Retro High OG",
  category: "Shoes",
  price: 719,
  currency: "₪",
  discount: 50,
  status: "NEW COLLECTION",
  imageSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e7695a1-3a51-4c22-98e3-3bad6274cee1/air-jordan-1-retro-high-og-shoes.png",
  onItemClick: () => console.log("ITEM CLICKED"),
  onLikeClick: (isLike) => console.log(`ITEM ${isLike ? '':'DIS'}LIKED`),
  onCartClick: (isCart) => console.log(`ITEM ${isCart ? 'ADDED TO':'REMOVED FROM'} CART`),
  onCategoryClick: () => console.log("CATEGORY CLICKED")  
}