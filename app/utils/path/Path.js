const Endpoint = {
    //219 : 
    categories: ['categories'],
    area : ['areas'],
    registration : ['merchants'],//post 
    marchantLogin : ['merchants/login'],
    dashBoard : ['merchants/dashboard'],
    merchant : ['merchants'],//get 
    orderIdentity : ['merchants/order-details?'],
    marchantUpdate : ['merchants/update'],
    changePassword : ['merchants/change-password'],
    postOrder : ['merchants/order'],
    postBulkOrder : ['merchants/bulk-order'],
    weighrRanges : ['weight-ranges'],

    // orders 
    ordersfromDash : ['merchants/order-details?'],

    // payment
    mobileBankingList : ['mobile-banking'],
    addPaymentMethod : ['merchants/add-merchant-account'],
    paymentHistort : ['merchants/payment-status']

}

export default Endpoint;

