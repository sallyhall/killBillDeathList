(function () {
  "use strict";
  angular
    .module('targets')
    .factory('TargetsService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/killbilltargets';

      var addTarget = function (newTarget) {
        $http.post(url, newTarget);
      };

      var getTargets = function () {
        return $http.get(url);
      };

      var removeTarget = function(target){
        $http.delete(url+"/"+target._id);
      }


      return {
        createTarget: addTarget,
        getTargets: getTargets,
        deleteTarget: removeTarget
      };

    });
})();
