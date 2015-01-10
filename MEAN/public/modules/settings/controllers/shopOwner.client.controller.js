'use strict';


angular.module('settings').controller('ShopOwnerController', [
  '$scope', '$interval', '$state', '$stateParams', '$location', 'ShopOwners', '$ionicModal', '$ionicNavBarDelegate',
  function($scope, $interval, $state, $stateParams, $location, ShopOwners, $ionicModal, $ionicNavBarDelegate) {
    var mock = function() {
      var basepath = 'res/shops/1/';
      return {
        id: ['1', '2', '3'].random(),
        enabled: true,
        name: ['Bangkok Shokudo', 'Sushi Masa', 'Staw wery'].random(),
        rank: [3, 4, 5].random(),
        address: ['162', '12/3 akemai', '23 CTW '].random() + ' ' + ['Samsennai', 'sukumvit'].random() + ' ' + [
          'Phyathai', 'Wattna', 'Donmung'
        ].random(),
        address2: ['Bangkok Thailand 10400'].random(),
        lastBooked: ['45min ago', '10sec ago', '10days ago'].random(),
        catalog: ['Pet Care', 'Dessert/Bakery', 'Cinema'].random(),
        distance: ['2.4km away', '14km away', '0.4km away'].random(),
        booked: [3400, 200, 1523].random(),
        reviews: [224, 5, 11, 35].random(),
        photos: [25, 18, 2, 4].random(),
        operationTime: ['TUE-SON 10am-11pm'].random(),
        image: basepath + ['main.jpg'].random(),
        detail: 'Recognised for many years as one of the best Thai Restaurants in Bangkok, Suan Kularb is not your everyday local eatery.' +
          'This is the kind of place to invite your discerning friends or when you want to impress visitors who think they' +
          'have tried it all before. With its understated luxury, this beautiful restaurant and its small garden hidden in' +
          'a narrow street off Pahonyothin 5 perfectly deserves its reputation as one of 10 best restaurants in Bangkok recommended' +
          'by Bangkok Post.',
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

    console.log('ShopOwnerController');
    $scope.init = function() {
      $scope.shop = {};
      $scope.isUpdate = false;
      console.log('ShopOwnerController.init');
      if ($stateParams.shopId) {
        $scope.isUpdate = true;
        $scope.findOne();
      } else {
        $scope.isUpdate = false;
        $scope.shop = mock();
      }
    };

    $scope.initService = function() {
      console.log('xxx');
    };

    $scope.createOrUpdate = function(isValid) {
      if (isValid) {
        if ($scope.isUpdate)
          $scope.update();
        else
          $scope.save(isValid);
      } else {
        $scope.submitted = true;
      }
    };

    // Save the new shop
    $scope.save = function(isValid) {
      if (isValid) {
        var shop = new ShopOwners($scope.shop);
        shop.$save(function(response) {
          console.log('response', response);
          //$location.path('/main/tab/owner/list');
          $ionicNavBarDelegate.back();

        }, function(error) {
          console.log('error', error.status, error.statusText);
        });
      } else {
        $scope.submitted = true;
      }
    };


    $scope.remove = function(shop) {
      if (shop) {
        shop.$remove();

        for (var i in $scope.shops) {
          if ($scope.shops[i] === shop) {
            $scope.shops.splice(i, 1);
          }
        }
        console.log('removed');
      } else {
        $scope.shop.$remove(function() {
          $ionicNavBarDelegate.back();
        });
      }
    };

    $scope.update = function() {
      var shop = $scope.shop;

      shop.$update(function() {
        $ionicNavBarDelegate.back();

      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };


    // Find all shops
    $scope.find = function() {
      ShopOwners.query(function(items) {
        $scope.shops = items;

        angular.forEach(items, function(item) {
          var moc = mock();
          item._id = item._id || moc.id;
          item.image = item.image || moc.image;
        });
      });
    };

    $scope.findOne = function() {
      $scope.shop = ShopOwners.get({
        shopId: $stateParams.shopId
      });
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $scope.myGoBack = function() {
      //$ionicNavBarDelegate.back();
      console.log('goback');
    };

    $scope.editImage = function() {
      //$scope.modal.show();
      console.log('edit Image');

      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        var image = document.getElementById('myImage');
        image.src = 'data:image/jpeg;base64,' + imageData;
        console.log('getPicture', imageData);
      }, function(err) {
        // error
      });
    };


    $scope.editService = function() {
      $ionicModal.fromTemplateUrl('modules/settings/views/shopOwner-service-edit.client.view.html', function(
        $ionicModal) {
        $scope.modal = $ionicModal;
        $scope.modal.show();
      }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
      });
    };
    $scope.closeService = function() {
      $scope.modal.hide();
    };

    $scope.createOrUpdateService = function() {
      $scope.modal.hide();
    };


  }
]);