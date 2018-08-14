$(document).ready(function() {

  $("button").submit(function(event) {
    event.preventDefault();

    var countTo = $("#input1").val();
    var countBy = $("#input2").val();

    if (isNan(countTo) || isNan(countBy) || countTo === undefined || countBy === undefined) {
      alert("Enter a number in both fields.")
    } else {
      $(".output").append("Count to: " + countTo);
      $(".output").append("Count by:" + countBy);

      var loops = Math.floor(countTo / countBy);
      var runningCount = 0;
      for (i = 0; i < loops; i++) {
        runningCount += countBy;
        $(".output").append(runningCount + ", ");
      };



    }

  });

  });
});
