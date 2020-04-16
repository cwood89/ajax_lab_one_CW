$(document).ready(function () {
function getAllPosts() {
  $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", function (data) {
    console.log(data)
    let output = $("#output")
    output.text(JSON.stringify(data))
  })
}

function getPost(id) {
  $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=" + id, function (data) {
    console.log(data)
    let output = $("#output")
    output.text(JSON.stringify(data))
  })
}
function getUserPosts(id) {
  $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", {userID: id}, function (data) {
    console.log(data)
    let output = $("#output")
    output.text(JSON.stringify(data))
  })
}

function getComments(id) {
  $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments", {id: id}, function (data) {
    console.log(data)
    let output = $("#output")
    output.text(JSON.stringify(data))
  })
}

function createPost(title, body) {
  $.post("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", { title: title, body: body })
    .done(function (data) {
      console.log(data)
      let output = $("#output")
      output.text(JSON.stringify(data))
  })

}

function replacePost(id, title, body) {
  $.put("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=" + id, { title: title, body: body }, function (data) {
    console.log(data)
    let output = $("#output")
    output.text(JSON.stringify(data))
  })
}

  
  $("#all-posts").on("click", getAllPosts)
  $("#post-10").on("click", function () { getPost(10) })
  $("#comment-12").on("click", function () { getComments(12) })

  $("#user-2").on("click", function () { getUserPosts(2) })

  $("#form1").on("submit", function (e) {
    e.preventDefault();
    let title = $("#title").val();
    let body = $("#body").val();
    $("#title").val('');
    $("#body").val('');
    createPost(title, body)
  })
  $("#form2").on("submit", function (e) {
    e.preventDefault();
    let title = $("#title2").val();
    let body = $("#body2").val();
    $("#title2").val('');
    $("#body2").val('');
    replacePost(12, title, body)
  })
});