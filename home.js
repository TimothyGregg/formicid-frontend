document.getElementById("addGame").addEventListener("click", addGame())

function api_call(options) {
  return fetch("api.formicid.io", options)
}

function post(body) {
  return fetch({
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