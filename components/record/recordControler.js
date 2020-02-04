
class RecordControler{
  constructor(elementConfig) {
    this.aside = elementConfig.aside;
    this.asides = [];
  }
  addData(data) {
    this.asides.push(new SectionModal(data, {
      click: this.handleClick
    }))
  }
  loadSection(asideData) {
    asideData.forEach(this.addData)
  }
  render(asides) {
    var col = asides.map(v => { return v.render() });
    this.asides.empty().append(col);
  }
  displayAllAnimal() {
    this.render(this.asides)
  }
  handleClick(data) {
    console.log(data);
  }
}