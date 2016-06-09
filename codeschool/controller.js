(function(){
    var app = angular.module('store', []);
    app.controller('StoreController', function(){
        this.product = gems;
    });

    var gems = [
        {
            name: 'this is name',
            price: 2.95,
            description:'this is description',
            canPurchase: true,
            soldOut:false
        },
        {
            name: 'this is name 2',
            price: 2.95,
            description:'this is description 2',
            canPurchase: true,
            soldOut:false
        }
    ];

    app.controller('PanelController', function(){
        this.tab = 1;

        this.selectTab = 
    });

})();
