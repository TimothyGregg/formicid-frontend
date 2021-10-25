//https://stackoverflow.com/questions/8739605/getelementbyid-returns-null

// code that should be taken care of right away

window.onload = init;

const endpoint = "api.formicid.io"

function init(){
  // the code to be called when the dom has loaded
  // #document has its nodes
  document.getElementById("addGame").addEventListener("click", addGame(100, 100))
}

function post(relative_url, body) {
  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: body
  }
  fetch(endpoint + relative_url, options)
}

function addGame(size_x, size_y) {
  var addGameOptions = {
    action_type: 1,
    action_name: 'addGame',
    details: {
      size_x: size_x,
      size_y: size_y
    }
  }
  post("/", addGameOptions)
}