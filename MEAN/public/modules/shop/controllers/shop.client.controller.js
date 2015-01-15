'use strict';

angular.module('shop').controller('ShopController', [
  '$scope', '$timeout', '$ionicModal', '$upload', '$stateParams', 'ShopsApi', '$cordovaCamera',
  '$cordovaFileTransfer', '$api',
  function($scope, $timeout, $ionicModal, $upload, $stateParams, ShopsApi, $cordovaCamera, $cordovaFileTransfer,
    $api) {

    $ionicModal.fromTemplateUrl('modules/shop/views/booking.client.view.html', function($ionicModal) {
      $scope.modal = $ionicModal;
    }, {
      // Use our scope for the scope of the modal to keep it simple
      scope: $scope,
      // The animation we want to use for the modal entrance
      animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('modules/shop/views/booked.client.view.html', function($ionicModal) {
      $scope.modalBooked = $ionicModal;
    }, {
      // Use our scope for the scope of the modal to keep it simple
      scope: $scope,
      // The animation we want to use for the modal entrance
      animation: 'slide-in-up'
    });

    /* $scope.comment = 'test comment';
    $scope.commantRemain = $scope.maxlen = 400;

    $scope.commentChanged = function() {

        $scope.commantRemain =  $scope.maxlen - $scope.comment.length;
        console.log($scope.comment, $scope.commantRemain );
    }; */

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $scope.closeBooked = function() {
      $scope.modalBooked.hide();
    };

    $scope.getDirection = function() {
      alert('Get Direction');
    };


    var mock = function() {
      var basepath = 'res/shops/1/';
      return {
        id: ['1', '2', '3'].random(),
        name: ['Bangkok Shokudo', 'Sushi Masa', 'Staw wery'].random(),
        rank: [3, 4, 5].random(),
        address: ['162 Paholyothin 5 Samsennai Phyathai'].random(),
        address2: ['Bangkok Thailand 10400'].random(),
        lastBooked: ['45min ago', '10sec ago', '10days ago'].random(),
        catalog: ['Pet Care', 'Dessert/Bakery', 'Cinema'].random(),
        distance: ['2.4km away', '14km away', '0.4km away'].random(),
        booked: ['3.4k', '200', '15k'].random(),
        comments: ['224', '5', '11', '35'].random(),
        operationTime: ['TUE-SON 10am-11pm'].random(),
        image: basepath + ['main.jpg'].random(),
        albums: [
          basepath + 'a1.jpg',
          basepath + 'a2.jpg',
          basepath + 'a3.jpg',
          basepath + 'a4.jpg',
          basepath + 'a5.jpg',
          basepath + 'a6.jpg',
          basepath + 'a7.jpg',
          basepath + 'a8.jpg',
          basepath + 'a9.jpg'
        ]
      };
    };

    $scope.getData = function() {
      $scope.it = mock();
    };

    //$scope.getData();

    $scope.findOne = function() {
      ShopsApi.get({
        shopId: $stateParams.shopId
      }, function(shop) {
        var moc = mock();
        shop.lastBooked = shop.lastBooked || moc.lastBooked;
        shop.distance = shop.distance || moc.distance;
        shop.albums = shop.albums || moc.albums;
        shop.image = shop.image || moc.image;
        $scope.it = shop;


      });
    };

    $scope.gotBooking = function(booking) {
      $scope.booking = booking;
      $scope.modalBooked.show();
    };


    //-------------------
    $scope.takePicture = function() {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      };

      // udpate camera image directive
      $cordovaCamera.getPicture(options).then(function(imageURI) {
        $scope.cameraimage = imageURI;

        var options2 = {

        };
        $cordovaFileTransfer
          .upload($api.actionWithToken('/api/shops/images'), imageURI, options2)
          .then(function(result) {
            // Success!
            console.log('transfer success', result);
          }, function(err) {
            // Error
            console.log('transfer error', err);
          }, function(progress) {
            // constant progress updates
            console.log('transfer progress', progress);
          });

      }, function(err) {
        console.log('Failed because: ' + message);
      });
    };

  }
]);
