(function() {
'use strict';

angular.module('data')
.component('itemList', {
    templateUrl: 'src/templates/itemList.template.html',
    bindings: {
        items: '<'
    }
});

})();