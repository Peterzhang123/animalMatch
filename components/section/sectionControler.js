
class SectionControler {
  constructor(elementConfig) {
    this.section = elementConfig.section;

    this.addData = this.addData.bind(this);
    this.render = this.render.bind(this);
    this.displayAllAnimal = this.displayAllAnimal.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.firstClick = "";
    this.result = null;
    this.clickTimes = null;
    this.correctTime = null;
    this.sections = [];
    this.boolean = false;
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
    if(this.boolean){
      alert("you cant click now")
      return;
    } 

    console.log("boolean value : " + this.boolean + " clicked times: "+ this.clickTimes)

    this.clickTimes++;
    // console.log("data: ", pc);
   
    // console.log("click Time: ", this.clickTimes);
    var secondElement = pc.dom.playingCard;
    secondElement.addClass('card-shown');
    var id = pc.data.id;

    if (!this.firstClick) {
      this.firstClick = id;
      this.firstClickElement = secondElement;
    } else {
      if (this.firstClick == id) {
        console.log("they are the same");
        secondElement.off("click");
        this.firstClickElement.off("click");
        secondElement = {};
        this.firstClickElement = {};
      } else {
          setTimeout(()=>{
            secondElement.removeClass("card-shown");
            this.firstClickElement.removeClass("card-shown");
            secondElement = {};
            this.firstClickElement = {};
            this.boolean = false;
          }, 1500);
          this.boolean = true;
          console.log("they are different: this is firstClick value: ", this.firstClick + " & this is id Value: " + id)
        }
      this.firstClick = "";
      id = "";
      
    }
  }
}