(function() {
'use strict';

angular.module("ShoppingListCheckOff",[])
.controller("ToBuyShoppingController",ToBuyShoppingController)
.controller("AlreadyBoughtShoppingController",AlreadyBoughtShoppingController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
function ToBuyShoppingController(ShoppingListCheckOffService) {

var buyShoppingList = this;

buyShoppingList.items = ShoppingListCheckOffService.getBuyItems();

buyShoppingList.buyItem = function(index) {
    ShoppingListCheckOffService.moveItems(index);
    
};

};

AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {

var boughtShoppingList = this;

boughtShoppingList.items = ShoppingListCheckOffService.getBoughtItems();

};



function ShoppingListCheckOffService() {

var service = this;

var toBuyItems = [
    {name:"Cookies",quantity:"10"},
    {name:"Cake",quantity:"4"},
    {name:"Xbox One",quantity:"2"},
    {name:"iPhone 7",quantity:"5"},
    {name:"Raspberry Pi",quantity:"3"}

];

var boughtItems = [];

service.getBuyItems = function() {
    return toBuyItems;
};

service.getBoughtItems = function() {
    return boughtItems;
};

service.moveItems = function(index) {

boughtItems.push(toBuyItems[index]);
toBuyItems.splice(index,1);

};


};




})();