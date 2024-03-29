'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('shop').factory('PhotoService', ['$resource', '$api', '$cordovaCamera', '$cordovaFileTransfer',
  '$ionicModal',
  function($resource, $api, $cordovaCamera, $cordovaFileTransfer, $ionicModal) {
    var $this = this;

    $this.takePicture = function(_id) {
      console.log('takePicture ' + _id);

      if (Camera === undefined) {
        $this.filePicker();
        return;
      };

      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      };

      // udpate camera image directive
      $cordovaCamera.getPicture(options).then(function(imageURI) {
        $this.cameraimage = imageURI;
        var options2 = {

        };

        $cordovaFileTransfer
          .upload($api.actionWithToken('/api/shops/' + _id + '/albums'), imageURI, options2)
          .then(function(result) {
            console.log('transfer success', result);
          }, function(err) {
            console.log('transfer error', err);
          }, function(progress) {
            console.log('transfer progress', progress);
          });

      }, function(err) {
        console.log('Failed because: ' + err);
      });
    };

    $this.filePicker = function() {
      $ionicModal.fromTemplateUrl('modules/shop/views/filepicker.client.view.html', function($ionicModal) {
        $this.modalFile = $ionicModal;
      }, {
        scope: $this,
        animation: 'slide-in-up'
      });

    };

    return {
      takePicture: this.takePicture
    };
  }
]);