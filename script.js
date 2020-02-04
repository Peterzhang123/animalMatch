
$(document).ready(initialized);

function initialized() {
  const maincontroller = new MainController({
    section:'.section',
    aside:'aside'
  })
  maincontroller.loadData(sectionData);

}