$(document).ready(function() {

  $(".arrow").click(function(e) {
    e.preventDefault();
    goToByScroll("about");
  });
  $("#Dropdown > a").click(function(e) {
    e.preventDefault();
    goToByScroll(this.id);
  });

  $(function() {
    setTimeout('topArrow()');
  });

  var width = ($( window ).width() / 2) - 12.5;
  $( ".downArrow" ).css("left", width);

  $( window ).resize(function() {
    var width = ($( window ).width() / 2) - 12.5;
    $( ".downArrow" ).css("left", width / 2);
  });



  var myChart = new Chart($("#chart_web"), {
    type: 'horizontalBar',
    data: {
      labels: ["HTML", "JavaScript", "Frameworks", "PHP", "Python"],
      datasets: [{
        data: [4, 2.5, 2, 1, 1],
        backgroundColor: ['#96ceb4', '#ffeead', '#e6d72a', '#ffcc5c', '#ff6f69'],
      }]
    },
    options: chart_option("Web Development", true),
  });

  myChart = new Chart($("#chart_twoyear"), {
    type: 'doughnut',
    data: {
      labels: ["Web Platforms", "Prototyping", "Mobile Apps", "Algotherm Developments", "Platform Maintance"],
      datasets: [{
        data: [0.8, 0.2, 0.5, 0.3, 0.2],
        backgroundColor: ['#ff6f69', '#ffeead', '#96ceb4', '#e6d72a', '#ffcc5c'],
      }]
    },
    options: chart_option("In the last two years, I worked on...", false),
  });

  myChart = new Chart($("#chart_oop"), {
    type: 'horizontalBar',
    data: {
      labels: ["Java", "JavaScript", "Python", "C", "Haskel", "Assembly"],
      datasets: [{
        data: [5, 4, 2, 2, 1, 1],
        backgroundColor: ['#f18d94', '#ffeead', '#e6d72a', '#ff6f69', '#ffcc5c', '#98dbc6'],
      }]
    },
    options: chart_option("Programing Languages", true),
  });

  // // modal
  // $.modal.defaults = {
  //   showClose: false,
  //   clickClose: true,
  //   closeExisting: true,
  // }
  // $('a.open-modal').click(function(event) {
  //   $(this).modal({
  //     fadeDuration: 250
  //   });
  //   return false;
  // });

  var typed = new Typed('#typed', {
    strings: ["Coder.", "Dreamer.", "Programmer.", "Swimmer."],
    typeSpeed: 100,
    backSpeed: 90,
    startDelay: 300,
    loop: true,
  });

  $(".splash_nav_animate").hover(function() {
    $(this).filter(':not(:animated)').animate({
      fontSize: "30px"
    });
    $(this).addClass('clicked');

  }, function() {
    $(this).animate({
      fontSize: "20px"
    });
    $(this).removeClass('clicked');
  });

});

function topArrow() {
  $('#topArrow').animate({
    marginBottom: '-=15px'
  }, 800).animate({
    marginBottom: '+=15px'
  }, 800);
  setTimeout('topArrow()', 1600);
}

function chart_option(chart_title, legend) {
  return {
    // "deferred": { "delay": 5000 },
    title: {
      display: true,
      fontColor: 'white',
      fontSize: 19,
      text: chart_title,
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          color: 'white',
          drawBorder: legend,
        },
        ticks: {
          display: legend,
          fontColor: 'white',
          beginAtZero: true
        },
        scaleLabel: {
          display: legend,
          fontColor: 'white',
          labelString: "Years",
        },
      }],
      yAxes: [{
        gridLines: {
          display: false,
          color: 'white',
          drawBorder: legend,
        },
        ticks: {
          display: legend,
          fontColor: 'white',
          beginAtZero: true
        },
        scaleLabel: {
          display: false,
        },
      }]
    },
    legend: {
      display: !legend,
      labels: {
        fontColor: 'white'
      }
    },

  };
}

function goToByScroll(id_in) {
  var id = id_in.replace("link", "");
  $('html,body').animate({
      scrollTop: $("#" + id).offset().top
    },
    'slow');
}

function mobile_nav() {
  var x = document.getElementById("nav_bar");
  if (x.className === "floating topnav") {
    x.className = "topnav";
  }
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "floating topnav";
  }
}

function timeline(input) {
  var target = "." + input;
  var target_id = "#" + input;
  var target_text = $(".timeline_text").find(target);
  var target_highlight = $(".timeline").find(target_id);

  if (target_text.hasClass("close")) {
    var last = $(".timeline_text").find(".open").css("display", "none");
    var target_highlight_temp = $(".timeline").find(".complete");
    timeline_close(last, target_highlight_temp);

    target_text.css("display", "flex");
    target_text.hide();
    target_text.fadeIn(0, function() {
      target_text.removeClass("close").addClass("open");
    });
    target_highlight.addClass("complete");
  } else {
    timeline_close(target_text, target_highlight);
  }
}

function timeline_close(target_text, target_highlight) {
  target_text.fadeOut(10, function() {
    target_text.removeClass("open").addClass("close");
  });
  target_highlight.removeClass("complete");
}

function tab() {
  document.getElementById("Dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
