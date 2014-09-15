angular-bootstrap-datetimepicker
================================

Here is the angular directive for Twitter's bootstrap-datetimepicker widget. 

Minimum requirements / dependancies
-----------------------------------

CSS
    ```
    <link href="~/src/bootstrap-datetimepicker.css" rel="stylesheet" /></pre>
    ```
    
Scripts
 ```js
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.2/moment.js"></script>
    <script src="~/src/bootstrap-datetimepicker.js"></script>
  ```


Usage
------
1. add "ngBootstrapDateTimePicker" module to your angular app's module list
  <br/ >
  ```
  var myApp = angular.module("demoDateTimePicker", ["ngBootstrapDateTimePicker"]);
  ```

2. In your html, define date picker or datetime picker depending on your need  -

  * Add "datez" attribute if you need only date picker.

  ```DatePickerOnly
    <div id="date" class="input-append date" datez ng-model="user.IncidentDate">
          <input type="text" id="IncidentDate" name="IncidentDate"></input>
          <span class="addon">
              <i class="fa fa-calendar"></i>
          </span>
      </div>
  ```
  
  * Add "datetimez" attribute if you need datetime picker.
   
  ```DatePickerOnly
    <div id="date" class="input-append date" datetimez ng-model="user.IncidentDate">
          <input type="text" id="IncidentDate" name="IncidentDate" required></input>
          <span class="addon">
              <i class="fa fa-calendar"></i>
          </span>
      </div>
  ```
  
Demo
----

* coming soon

