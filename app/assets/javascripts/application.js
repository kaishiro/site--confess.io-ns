// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(function() {

  var emotions = ["anger","contempt","disgust","fear","happiness","sadness","surprise"];

  function changePageEmotion(emotion) {
    // Remove existing emotions
    $(".page").removeClass(function() {
      var classes = "";

      $.each(emotions, function( index, value ) {
        classes += "page--" + value + " ";
      });

      return classes;
    });

    // Add current emotion
    if (emotion) {
      $(".page").addClass("page--" + emotion);
      $(".page").data('verb', emotion);
      $(".page").attr('data-verb', emotion);
    }
  }

  function changeHeaderEmotion(emotion) {
    // Remove existing emotions
    $(".header").removeClass(function() {
      var classes = "";

      $.each(emotions, function( index, value ) {
        classes += "header--" + value + " ";
      });

      return classes;
    });

    // Add current emotion
    if (emotion) {
      $(".header").addClass("header--" + emotion);
    }
  }
  
  function changeFormEmotion(emotion, placeholder) {
    // Remove existing emotions
    $(".form--post").removeClass(function() {
      var classes = "";

      $.each(emotions, function( index, value ) {
        classes += "form--" + value + " ";
      });

      return classes;
    });

    // Add current emotion
    if (emotion) {
      $(".form--post").addClass("form--" + emotion);
      $(".form__verb").val(emotion);
      $(".form__body").attr("placeholder", placeholder);
    }
  }

  function activateOverlay() {
    $(".overlay").addClass("overlay--active");
  }
  
  function deactivateOverlay() {
    $(".overlay").removeClass("overlay--active");
  }

  function activateForm() {
    $(".page").addClass("active-form");
  }
  
  function deactivateForm() {
    $(".page").removeClass("active-form");
  }
 
  function changeFace() {
    $(".face").removeClass('face--active');
    $(this).addClass('face--active');
  }

  $(".face").on("mouseover", function(){
    var formIsActive = $(".page.active-form").length > 0; 

    if (formIsActive) {
    }
    else {
      var emotion = $(this).data('verb');

      changePageEmotion(emotion);
      changeHeaderEmotion(emotion);
    }
  });

  $(".face").on("mouseout", function(){
    var formIsActive = $(".page.active-form").length > 0; 

    if (formIsActive) {
    }
    else {
      changePageEmotion();
      changeHeaderEmotion();
    }
  });

  $(".face").on("click", function(){
    var formIsActive = $(".page.active-form").length > 0; 
    var emotion = $(this).data('verb');
    var emotionOld = $(".page").data('verb');
    var placeholder = $(this).data('placeholder');

    if (formIsActive) {
      if (emotion == emotionOld) {
        $(this).removeClass('face--active');
        deactivateOverlay();
        deactivateForm();
      }
      else {
        changePageEmotion(emotion);
        changeHeaderEmotion(emotion);
        changeFormEmotion(emotion, placeholder);
        activateOverlay();
        changeFace();
      }
    }
    else {
      changePageEmotion(emotion);
      changeHeaderEmotion(emotion);
      changeFormEmotion(emotion, placeholder);
      activateForm();
      activateOverlay();
      changeFace();
    }
  });

  
  $(".overlay").on("click", function(){
    changePageEmotion();
    changeHeaderEmotion();
    changeFormEmotion();
    deactivateForm();
    $(".face").removeClass("face--active");
  });

});
