$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
  
      var newDevouredState = {
        devoured: true
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#new_burger").val().trim(),
        devoured: false
      };
      
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
});
  