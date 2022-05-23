console.log("Working...");

//Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible

$("#click").click(function(){
    $("p").hide();
})

$("#show").click(function(){
    $("p").show();
})

//Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page

$("#title").click(function(){
     $.ajax({
         url:"https://jsonplaceholder.typicode.com/todos/12",
         type:"GET",
         success:function(response){
             document.getElementById("text").innerText = response.title;
         }
     })
})