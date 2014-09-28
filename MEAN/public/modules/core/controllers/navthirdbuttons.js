'use strict';


angular.module('core').directive('navthirdbuttons', ['$compile', '$animate', function ($compile, $animate) {
    return {
        require: '^ionNavBar',
        restrict: 'E',
        compile: function ($element, $attrs) {
            
            var content = $element.contents().remove();
            return function ($scope, $element, $attrs, navBarCtrl) {
                console.log('compile');
                var navElement = $attrs.side === 'right' ?
                  navBarCtrl.rightButtonsElement :
                  navBarCtrl.leftButtonsElement;

                //Put all of our inside buttons into their own span,
                //so we can remove them all when this element dies -
                //even if the buttons have changed through an ng-repeat or the like,
                //we just remove their div parent and they are gone.
                var buttons = angular.element('<span style="width:100%">').append(content);

                //Compile buttons inside content so they have access to everything
                //something inside content does (eg parent ionicScroll)
                navBarCtrl.leftButtonsElement.css('width', '100%');
                
                $element.append(buttons);
                $compile(buttons)($scope);

                //Append buttons to navbar
                ionic.requestAnimationFrame(function () {
                    //If the scope is destroyed before raf runs, be sure not to enter
                    if (!$scope.$$destroyed) {
                        $animate.enter(buttons, navElement);
                    }
                });

                //When our ion-nav-buttons container is destroyed,
                //destroy everything in the navbar
                $scope.$on('$destroy', function () {
                    console.log('destroy');
                    $animate.leave(buttons);
                });

                // The original element is just a completely empty <ion-nav-buttons> element.
                // make it invisible just to be sure it doesn't change any layout
                $element.css('display', 'none');
            };
        }
    };
}]);