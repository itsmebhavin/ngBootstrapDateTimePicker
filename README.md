ngBootstrapDateTimePicker  (Angular version of Bootstrap Datetime picker widget)
================================

Here is the angular directive for Twitter's bootstrap-datetimepicker widget. 

NOTICE (No further development)
-------------
- DEPRICATED

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
    <script src="~/src/ngBootstrapDateTimePicker.js"></script>
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

Options
-------

```
    pickDate: true,                 //en/disables the date picker
    pickTime: true,                 //en/disables the time picker
    useMinutes: true,               //en/disables the minutes picker
    useSeconds: true,               //en/disables the seconds picker
    useCurrent: true,               //when true, picker will set the value to the current date/time     
    minuteStepping:1,               //set the minute stepping
    minDate:`1/1/1900`,               //set a minimum date
    maxDate: ,     //set a maximum date (defaults to today +100 years)
    showToday: true,                 //shows the today indicator
    language:'en',                  //sets language locale
    defaultDate:"",                 //sets a default date, accepts js dates, strings and moment objects
    disabledDates:[],               //an array of dates that cannot be selected
    enabledDates:[],                //an array of dates that can be selected
    icons = {
        time: 'glyphicon glyphicon-time',
        date: 'glyphicon glyphicon-calendar',
        up:   'glyphicon glyphicon-chevron-up',
        down: 'glyphicon glyphicon-chevron-down'
    }
    useStrict: false,               //use "strict" when validating dates  
    sideBySide: false,              //show the date and time picker side by side
    daysOfWeekDisabled:[]          //for example use daysOfWeekDisabled: [0,6] to disable weekends 
```



Further angularjs help, articles & other programming stuff at my blog
-----------------------------------------------------------------------

``` 
http://itsmebhavin.wordpress.com
```


