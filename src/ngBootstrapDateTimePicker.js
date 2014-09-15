'use strict';

/**
 * @description
 * AUTHOR: Bhavin Patel (CAPS, University of Alabama)
 * Download & more info at 
 *      https://github.com/bapatel1/angular-bootstrap-datetimepicker
 * This module is depending on jQuery's bootstrap-datetimepicker.js 
 * for information regarding bootstrap-datetimepicker, please visit - 
 *       http://eonasdan.github.io/bootstrap-datetimepicker
 * I have just created directives so that we can use this widget in our
 * angular web apps.
 *
 * system for displaying notifications of varying degree to it's users. 
 *
 */
angular.module('ngBootstrapDateTimePicker', [])
.directive('datez', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            element.datetimepicker({
                dateFormat: 'MM/dd/yyyy',
                language: 'en',
                pickTime: false
            }).on('changeDate', function (e) {
                console.log(moment(e.target.date).format("MM/DD/YYYY"));
                ngModelCtrl.$setViewValue(moment(e.target.date).format("MM/DD/YYYY"));
                scope.$apply();
            });
        }
    };
})
.directive('datetimez', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            element.datetimepicker({
                dateFormat: 'MM/dd/yyyy hh:mm:ss',
                language: 'en',
                pickTime: true
            }).on('changeDate', function (e) {
                console.log(moment(e.target.date).format("MM/DD/YYYY h:mm:ss a"));
                ngModelCtrl.$setViewValue(moment(e.target.date).format("MM/DD/YYYY h:mm:ss a"));
                scope.$apply();
            });
        }
    };
});
