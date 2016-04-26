(function(angular) {
  'use strict';
  angular.module('heroApp', []).controller('mainCtrl', function() {
    this.hero = {
      name: 'Spawn'
    };
     console.log(this.hero);
  });

})(window.angular);
