
class MainController {
  constructor(configElement) {
    this.section = $(configElement.section);
    this.aside = $(configElement.aside);
    this.temp;

  }
  loadData(sd) {
    var sc = new SectionControler({
      section: this.section
    })
    sc.loadSection(sd);
    // sc.shuffle(sectionData);
    sc.displayAllAnimal();
  }
  shuffle(sd) {
    for (var i = 0; i < sd.length; i++) {
      console.log(sd)
      var mix = Math.floor(Math.random() * (i + 1))
      this.temp = sd[i];
      sd[i] = sd[mix];
      sd[mix] = this.temp;
    }
    this.loadData(sd);
  }
}