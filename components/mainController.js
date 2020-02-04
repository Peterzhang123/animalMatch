
class MainController{
  constructor(configElement){
    this.section = $(configElement.section);
    this.aside = $(configElement.aside);

  }
  loadData(){
    var sc = new SectionControler({
      section:this.section
    })
    sc.loadSection(sectionData);
    sc.displayAllAnimal();
    sc.displayAllAnimal();
  }
}