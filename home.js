//https://stackoverflow.com/questions/8739605/getelementbyid-returns-null

// code that should be taken care of right away

window.onload = init;

function init(){
  // the code to be called when the dom has loaded
  // #document has its nodes
  document.getElementById("addGame").addEventListener("click", addGame)
}

function api_call(options) {
  fetch("api.formicid.io", options)
}

function post(body) {
  api_call({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: body
  }
  )
}

function addGame() {
  post("balls")
}