(function(){
    var app = angular.module('store', []);
    app.controller('StoreController', function($http){
        // this.product = gems;
        var store = this;
        store.products = [];
        $http.get('http://127.0.0.1/database/database.json', {contentType:"application/json; charset=utf-8", dataType:"json"}).success(function(results){
                store.products = results;
            });
    });

    // var gems = [
    //     {
    //         name: 'this is name',
    //         price: 2.95,
    //         description:'this is description',
    //         canPurchase: true,
    //         soldOut:false,
    //         reviews: [
    //             {
    //                 stars: 5,
    //                 body: "I love this product",
    //                 author: "remarcbalisi"
    //             },
    //             {
    //                 stars: 5,
    //                 body: "this product is simply amazing",
    //                 author: "remarcbalisi"
    //             },
    //         ],
    //     },
    //     {
    //         name: 'this is name 2',
    //         price: 2.95,
    //         description:'this is description 2',
    //         canPurchase: true,
    //         soldOut:false,
    //         reviews: [
    //             {
    //                 stars: 1,
    //                 body: "this product sucks!",
    //                 author: "remarcbalisi"
    //             },
    //             {
    //                 stars: 1,
    //                 body: "this product is not cool!",
    //                 author: "remarcbalisi"
    //             },
    //         ],
    //     }
    // ];

    //this is move to the directive
    // app.controller('PanelController', function(){
    //     this.tab = 1;
    //
    //     this.selectTab = function(setTab){
    //         this.tab = setTab;
    //     }
    //     this.isSelected = function(selectedTab){
    //         return this.tab === selectedTab;
    //     }
    // });

    app.directive('productPanels', function(){
        return {
            restrict:'E',
            templateUrl: 'product-panels.html',
            controller:function(){
                this.tab = 1;

                this.selectTab = function(setTab){
                    this.tab = setTab;
                }
                this.isSelected = function(selectedTab){
                    return this.tab === selectedTab;
                }
            },
            controllerAs: 'panel'
        }
    });

    app.controller('ReviewController', function(){
        this.review = {};

        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    });

})();
