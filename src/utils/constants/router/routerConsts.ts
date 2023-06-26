export const PATHS = {
  ADMIN: {
    default: '/',
    products: 'products',
    addProducts: 'addproducts/*',
    productId: ':productId',
    not_found: '*',
    orders: 'orders/*',
    orderId: ':orderId',
    reviews: 'reviews'
  },
  MAIN: {
    default: '/',
    catalog: 'catalog',
    productId: ':productID',
    comparison: 'comparison',
    favourites: 'favourites',
    basket: 'basket',
    ordering: 'ordering',
    user: 'user',
    about: 'about',
    delivery: 'delivery',
    faq: 'faq',
    contacts: 'contacts'
  },
  APP: {
    signUp: '/signup',
    logIn: '/login',
    mainRoutes: '/*',
    admin: '/admin/*',
    not_found: '*'
  },
  PERSONAL: {
    personalAccount: 'personalAccount',
    detailsHistory: '/detailsHistory'
  }
}
