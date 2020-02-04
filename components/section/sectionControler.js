
class SectionControler {
  constructor(elementConfig) {
    this.section = elementConfig.section;

    this.addData = this.addData.bind(this);
    this.render = this.render.bind(this);
    this.displayAllAnimal = this.displayAllAnimal.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.firstClick="";
    this.result = null;
    this.clickTimes = null;
    this.correctTime = null;
    this.sections = [];
  }
  addData(data) {
    this.sections.push(new SectionModal(data, {
      click: this.handleClick
    }))
  }
  loadSection(sd) {
    sd.forEach(this.addData)
  }
  render(sections) {
    var col2 = sections.map(v => { return v.render() });
    this.section.empty().append(col2);
  }
  displayAllAnimal() {
    this.render(this.sections)
  }
  handleClick(pc) {
    this.clickTimes++;
    console.log("data: ",pc);
    pc.dom.playingCard.addClass('card-shown');
    var className = pc.dom.cardFront[0].className;
    console.log("click Time: ",this.clickTimes);

    if(!this.firstClick){
      this.firstClick = className;
    }else{
      if(this.firstClick == className){
        console.log("they are the same");
      }else{
        console.log("they are different: this is firstClick value: ",this.firstClick +" & this is className Value"+className)
      }
      this.firstClick = '';
    }
   
  }
}