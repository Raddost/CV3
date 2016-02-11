var buttonToContainerMap = {
  "toggl": "personal",
  "toggl1": "work",
  "toggl2": "education",
  "toggl3": "skills"
}

var createClickHandler = function (container) {
  return function () {
    if (container.style.display === 'none') {
      container.style.display = 'block'
    } else {
      container.style.display = 'none'
    }
  }
}

module.exports.init = function () {
  for(var key in buttonToContainerMap) {
    console.log(key)
    console.log(buttonToContainerMap[key])

    var btn = document.getElementById(key)
    var container = document.getElementById(buttonToContainerMap[key])

    if (!container || !btn) return console.error(key, buttonToContainerMap[key], "not found")
    btn.addEventListener('click', createClickHandler(container))
  }

}
