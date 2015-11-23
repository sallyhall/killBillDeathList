(function() {


    angular
        .module('targets')
        .controller('TargetsController', function($scope, TargetsService) {

            var updateTargets = function() {
                TargetsService.getTargets().success(function(
                    targets) {
                    $scope.targets = targets;
                });
            };

            updateTargets();

            var clearForm = function(){
              $scope.newTarget.name="";
              $scope.newTarget.pseudonym="";
            };

            $scope.addTarget = function(newTarget) {
                TargetsService.createTarget(newTarget);
                setTimeout(updateTargets, 100);
                setTimeout(clearForm,25);
            };
            $scope.deleteTarget = function(target) {
                TargetsService.deleteTarget(target);
                setTimeout(updateTargets, 100);
            };
        });

})();
