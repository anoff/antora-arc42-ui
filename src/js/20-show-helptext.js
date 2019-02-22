document.addEventListener('DOMContentLoaded', function () {
  const needsHelp = !!window.location.search
    .substr(1)
    .split('&')
    .map(e => e.split('=')[0])
    .find(e => e.toLowerCase() === 'help')

  function getAllHelptexts () {
    // use Array.slice to turn the HTML collection into a real Array
    return Array.prototype.slice.call(document.getElementsByClassName('helptext'))
  }

  // show all texts
  if (needsHelp) {
    getAllHelptexts().forEach(e => e.classList.add('visible'))
  }
  console.log('INIT HELPS')
})
