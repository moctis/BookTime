'use strict';

angular.module('shop').controller('ShopController', [
  '$scope', '$timeout', '$ionicModal', '$upload', '$stateParams', 'ShopsApi', '$cordovaCamera',
  '$cordovaFileTransfer', '$api',
  function($scope, $timeout, $ionicModal, $upload, $stateParams, ShopsApi, $cordovaCamera, $cordovaFileTransfer,
    $api) {

    $ionicModal.fromTemplateUrl('modules/shop/views/booking.client.view.html', function($ionicModal) {
      $scope.modal = $ionicModal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('modules/shop/views/booked.client.view.html', function($ionicModal) {
      $scope.modalBooked = $ionicModal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });

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
          basepath + 'a7.jpg'
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
        console.log('shop', shop);
        shop.lastBooked = shop.lastBooked || moc.lastBooked;
        shop.distance = shop.distance || moc.distance;
        shop.albums = shop.albums || moc.albums;
        shop.image = shop.image || moc.image;
        $scope.it = shop;
      });
    };


    $scope.initAlbums = function() {
      console.log('initAlbums');
    }

    $scope.gotBooking = function(booking) {
      $scope.booking = booking;
      $scope.modalBooked.show();
    };


    //-------------------
    $scope.takePicture = function(_id) {
      console.log('takePicture ' + _id);
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
          .upload($api.actionWithToken('/api/shops/' + _id + '/albums'), imageURI, options2)
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

    $scope.imgSrc = function(_id) {
      return $api.actionWithToken('/api/images/' + _id);
    };
  }
]);