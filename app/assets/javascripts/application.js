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
//= require jquery.isotope.min
//= require_tree .
$(function() {

  // Isotope Launcher
  $('.posts').isotope({
    itemSelector: '.post',
    containerClass: 'posts--isotope',
    itemClass: 'post--isotope',
    containerStyle: {position: 'relative'},
    layoutMode: 'masonry'
  });





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
      $(".form--post .form__verb").val(emotion);
      $(".form--post .form__body").attr("placeholder", placeholder);
    }
  }

  function activateOverlay(visible) {
    if (visible == 1) {
      $(".overlay").addClass("overlay--active overlay--visible");
    }
    else {
      $(".overlay").addClass("overlay--active");
    }
  }
  
  function deactivateOverlay() {
    $(".overlay").removeClass("overlay--active overlay--visible");
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

  $(".header .face--normal").on("mouseover", function(){
    var formIsActive = $(".page.active-form").length > 0; 

    if (formIsActive) {
    }
    else {
      var emotion = $(this).data('verb');

      changePageEmotion(emotion);
      changeHeaderEmotion(emotion);
    }
  });

  $(".header .face--normal").on("mouseout", function(){
    var formIsActive = $(".page.active-form").length > 0; 

    if (formIsActive) {
    }
    else {
      changePageEmotion();
      changeHeaderEmotion();
    }
  });

  $(".header .face--normal").on("click", function(){
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
    deactivateOverlay();
    $(".face").removeClass("face--active");
    $('.feature').html("");
  });

  $(".comments .comments__link").on("click", function(){
    var clone = $(this).parent().parent().clone(true, true); 

    activateOverlay(1);

    clone.removeClass('post--isotope');

    clone.addClass('post--featured');

    clone.attr('style', '');

    $('.feature').append(clone);

  });
  
  $(".form--comment .face").on("click", function(){
    var emotion = $(this).data('verb');

    $(".form--comment").removeClass(function() {
      var classes = "";

      $.each(emotions, function( index, value ) {
        classes += "form--" + value + " ";
      });

      return classes;
    });

    $(".form--comment").data('emotion', emotion);
    $(".form--comment").attr('data-emotion', emotion);
    $(".form--comment").addClass("form--" + emotion);

    $(".form--comment .face").removeClass('face--active');
    $(this).addClass('face--active');

    $(".form--comment .form__verb").val(emotion);

  });

  $("#new_post").on("ajax:success", function(e, data, status, xhr) {
    alert("OK");
  });

});
