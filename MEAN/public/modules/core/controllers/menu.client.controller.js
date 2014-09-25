'use strict';


angular.module('core').controller('MenuController', [
    '$scope', '$interval', '$state',
    function($scope, $interval, $state) {

        $scope.profile = [];
        $scope.profile.name = 'Pony Somrattanach';
        $scope.profile.booked = 15;
        $scope.profile.favorites = 245;

        $scope.menus = [
            { label: 'HOME', icon: 'fa-home', state: 'main.tab.home' },
            { label: 'SEARCH', icon: 'fa-search', page: 'modules/home/views/home.client.view.html' },
            { label: 'MY BOOKING', icon: 'fa-gear', page: 'modules/home/views/home.client.view.html' },
            { label: 'SCHEDULE', icon: 'fa-calendar', state: 'main.tab.schedule' },
            { label: 'CHAT', icon: 'fa-comments', state: 'main.tab.chat' },
            { label: 'NOTIFICATIONS', icon: 'fa-exclamation-circle', state: 'main.tab.notifications' },
            { label: 'MY FAVORITES', icon: 'fa-exclamation-circle', page: 'modules/home/views/home.client.view.html' },
            { label: 'SETTINGS', icon: 'fa-gear', state: 'main.tab.settings' },
            { label: 'ABOUT BOOKTIME', icon: 'fa-gear', page: 'modules/home/views/home.client.view.html', className: 'menu-about' },
            { label: 'SIGN OUT', icon: 'fa-gear', page: 'modules/home/views/home.client.view.html', className: 'menu-signout' }
        ];

        $scope.showDetail = function($index) {
            var selectedMenu = $scope.menus[$index];
            if (selectedMenu.state != undefined)
                $state.go(selectedMenu.state, null, { reload: true });
            else
                alert(selectedMenu.label);
        };

        $scope.getClass = function($index) {
            var menu = $scope.menus[$index];
            if (menu.className) {
                return menu.className;
            }
            return '';
        };

        var i = 0;
        var stop = $interval(function() {
            i = (i + 1) % 3;
            $scope.profile.booked = Math.round(Math.random() * 20);
            $scope.profile.name = ['Pony Somrattanach', 'Poony Soomrattanach', 'Pooony Sooomrattanach'][i];
            $scope.profile.favorites = Math.round(Math.random() * 5000);
        }, 5000);

        $scope.$on('$destroy', function() {
            $interval.cancel(stop);
            stop = undefined;
        });
    }
]).directive('navthirdbuttons', ['$compile', '$animate', function ($compile, $animate) {
    return {
        require: '^ionNavBar',
        restrict: 'E',
        compile: function ($element, $attrs) {
            console.log('hello------------------');
            var content = $element.contents().remove();
            return function ($scope, $element, $attrs, navBarCtrl) {
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
                    $animate.leave(buttons);
                });

                // The original element is just a completely empty <ion-nav-buttons> element.
                // make it invisible just to be sure it doesn't change any layout
                $element.css('display', 'none');
            };
        }
    };
}]);