https://dizzy-tuna-twill.cyclic.app/
<br />
# /users

/users            ---------->      GET /Admin/To_get_all_users_data\
/users/:id        ---------->      GET /User/To_get_single_user_data\
/users/:id        ---------->      PATCH /User/To_update_single_user_data \
/users/:id        ---------->      DELETE /Admin/To_delete_single_user_data\
/users/register   ---------->      POST/User/To_add_new_user_data
<br />
/users/login      ---------->      POST/User/To_login_account 

 # /products

/product          ---------->      GET /User/To_get_all_product_data\
/product          ---------->      POST /User/To_add_new_product_data\
/product/:id      ---------->      GET /User/To_get_single_product_data\
/product/:id      ---------->      PATCH /User/To_update_single_product_data\
/product/:id      ---------->      DELETE /User/To_delete_single_product_data\
<br />
Params:-<br />
category, type, title, q, limit, page, sort, order<br />
<br />
 # /cart

/cart            ---------->       GET /User/To_get_all_cart_data\
/cart            ---------->       POST /User/To_add_new_cart_data\
/cart/:id        ---------->       GET /User/To_get_single_cartt_data\
/cart/:id        ---------->       PATCH /User/To_update_single_cart_data
<br />
/cart/:id        ---------->       DELETE /User/To_delete_single_cart_data 
<br />
/cart/clearcart  ---------->       DELETE /User/To_Clear_cart_data
<br />

 # /orders

/orders         ---------->       GET /User/To_get_login_user_orders_data\
/orders/allorders  ---------->    GET /Admin/To_get_all_users_order_data\
/orders/:id    ---------->        GET /User/To_get_single_orders_data 
<br />
/orders/:id    ---------->        PATCH /User/To_update_single_orders_data 
<br />
/orders/:id    ---------->        DELETE /User/To_delete_single_orders_data 
<br />
<br />
/orders        ---------->        POST /User/To_add_orders_data

 # /Data Type For Post Request

register_data_type=\
{\
    first_name: { type: String, required: true },\
    last_name: { type: String, required: true },\
    phone_number: { type: Number, required: true },\
    date_of_birth: { type: String, required: true },\
    email: { type: String, required: true },\
    password: { type: String, required: true },\
    gender: { type: String, required: false, default: "Male" },\
    admin: { type: Boolean, required: false, default: false },\
}
<br /><br /><br />
login_data_type=\
{\
    email: { type: String, required: true },\
    password: { type: String, required: true } 
}
<br /><br /><br />
card_data_type=\
{\
    quantity: { type: Number, default: 1 },\
    size: { type: String, default: "5-6Y" },\
    product: {type:String}
}
<br /><br /><br />
product_data_type=\
{\
    category: { type: String },\
    title: { type: String },\
    type: { type: String },\
    subtitle: { type: String },\
    discounted_price: { type: Number },\
    strike_price: { type: Number },\
    discount: { type: String },\
    images: { type: [String] },\
    size: { type: [String] },\
    rating: { type: Number },\
    rating_count: { type: String },
}
<br /><br /><br />
orders_data_type=\
{\
    booking_date: { type: String, required: true },\
    address: { type: String, default: "46-D Nagin Nagar,Indore" },\
    status: { type: String, default: "Pending" },\
    products: {type: [String]}
 
  }












