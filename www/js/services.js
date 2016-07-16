angular.module('app.services', ['ionic'])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('CommonProp', function() {
    var user = '';
 
    return {
        getUser: function() {
            return user;
        },
        setUser: function(value) {
            user = value;
        }
    };
})

.service('$ionicSideMenuDelegate', ionic.DelegateService([
 
  'toggleLeft',

  'toggleRight',
  
  'getOpenRatio',
  
  'isOpen',
  
  'isOpenLeft',
  
  'isOpenRight',
  
  'canDragContent',
  
  
  'edgeDragThreshold'
 
]));

