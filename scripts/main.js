(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  console.log(formHandler);

  var slider = $('#range-input')[0];

  $(slider).on('change', function(e) {
    $('#rangeValueSpan').html(e.target.value);
  });

  $("button[type='reset']").on('click', function(e) {
    $('#rangeValueSpan').html("50");
  });

})(window);
