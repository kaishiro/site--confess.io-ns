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

  $(".face").on("mouseover", function(){
    if ($("body").hasClass("active-form")) {
    }
    else {
      verb = $(this).data('verb');
      $("body").attr('class', 'page page--' + verb);
    }
  });

  $(".face").on("mouseout", function(){
    if ($("body").hasClass("active-form")) {
    }
    else {
      $("body").attr('class', 'page');
    }
  });

  $(".face").on("click", function(){
    verb = $(this).data('verb');
    verbOld = $("body").data('verb');
    if ($("body").hasClass("active-form")) {
      if (verb == verbOld) {
        $("body").attr('class', 'page page--' + verb);
        $(this).removeClass('face--active');
        $(".form__verb").val("");
      }
      else {
        $("body").attr('class', 'page page--' + verb + ' active-form');
        $("body").data('verb', verb);
        $("body").attr('data-verb', verb);
        $(".face").removeClass('face--active');
        $(this).addClass('face--active');
        $(".form__verb").val(verb);
      }
    }
    else {
      $("body").attr('class', 'page page--' + verb + ' active-form');
      $("body").data('verb', verb);
      $("body").attr('data-verb', verb);
      $(".face").removeClass('face--active');
      $(this).addClass('face--active');
      $(".form__verb").val(verb);
    }
  });


});
