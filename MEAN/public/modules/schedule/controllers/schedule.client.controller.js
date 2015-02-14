'use strict';

angular.module('schedules').controller('ScheduleController', [
  '$scope', '$timeout', '$locale', 'uiCalendarConfig', 'Schedules', '$compile',
  function($scope, $timeout, $locale, uiCalendarConfig, Schedules, $compile) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.changeTo = 'English';
    $scope.events = [{
      title: 'All Day Event222',
      start: new Date(y, m, 2)
    }];
    $scope.eventSources = [$scope.events];
    $scope.events.push({
      title: 'Event333',
      start: new Date(y, m, 3)
    });

    $scope.init = function() {
      //$scope.eventSources = [];
      Schedules.query(function(items) {
        //console.log(items);

        angular.forEach(items, function(item) {
          var d = new Date(item.bookDateTime);
          $scope.events.push({
            title: item.shop.name,
            start: d,
            end: d + 60 * 60 * 10
              //start: new Date(y, m, 2)
          });
        });
        //$scope.addEvent();
        $scope.eventSources = [$scope.events];
        //console.log('uiCalendarConfig.calendars.myCalendar.', uiCalendarConfig.calendars.myCalendar);
        uiCalendarConfig.calendars.myCalendar.fullCalendar('refetchEvents');
        //uiCalendarConfig.calendars.myCalendar.fullCalendar('render');
      });
    };

    /* event source that calls a function on every view switch */
    $scope.eventsF = function(start, end, timezone, callback) {
      console.log('xx');
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{
        title: 'Feed Me ' + m,
        start: s + (50000),
        end: e + (100000),
        allDay: false,
        className: ['customFeed']
      }];
      callback(events);
    };

    /* alert on eventClick */
    $scope.alertOnEventClick = function(date, jsEvent, view) {
      //$scope.alertMessage = (date.title + ' was clicked ');
      alert(date.title + ' was clicked ');
    };
    /* alert on Drop */
    $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view) {
      $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view) {
      $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources, source) {
      var canAdd = 0;
      angular.forEach(sources, function(value, key) {
        if (sources[key] === source) {
          sources.splice(key, 1);
          canAdd = 1;
        }
      });
      if (canAdd === 0) {
        sources.push(source);
      }
    };
    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['openSesame']
      });
    };
    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index, 1);
    };
    /* Change View */
    $scope.changeView = function(view, calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
      console.log('renderCalender', calendar);
      if (uiCalendarConfig.calendars[calendar]) {
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    };
    /* Render Tooltip */
    $scope.eventRender = function(event, element, view) {
      //console.log('eventRender', event);
      element.attr({
        'tooltip': event.title,
        'tooltip-append-to-body': true
      });
      $compile(element)($scope);
    };
    /* config object */
    $scope.uiConfig = {
      calendar: {
        height: 450,
        editable: true,
        header: {
          left: 'prev',
          center: 'title',
          right: 'next'
            //right: 'today prev,next'
        },
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };

  }
]);