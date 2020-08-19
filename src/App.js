import React, {Fragment} from 'react';
import ImageBox from './components/ImageBox'

export default class App extends React.Component{
  constructor (props) {
    super(props)
    this.state = { 
      startCounter: 15,
      currentCounter: 15,
      selected: []
    }
    this.imgClick = (e, options) => {
      // console.log(e.target.getAttribute("data-value"))
      const value = Number(e.target.getAttribute("data-value"))
      let newState = {...this.state}
      let selected = newState.selected

      let newCounter = newState.currentCounter
      if(options && options.remove || e.target.classList.contains("clicked")){
        newCounter = newCounter + value
        newState.selected = selected.filter(img => img !== e.target.src)
      }
      else{
        if(newCounter - value < 0){
          alert('youre out of dollars')
          return
        }
        newCounter = newCounter - value
        newState.selected = [...selected, e.target.src]
      }
      newState.currentCounter = newCounter
      console.log("newCounter")
      console.log(newCounter)

      e.target.classList.toggle("clicked")
      this.setState(newState)
    }
    this.makePics = () => {

      const make = () => {
      const imgCounter = 25
      let i = 0
      let pics = []
      let counter = 0
      let dollarValue = 5

        for (i; i < imgCounter; i++) {
          pics = [...pics, <ImageBox 
            key={`imageBox-${i}`}
            className={this.state.currentCounter < dollarValue ? "clicked" : ""}
            value={dollarValue} 
            src={`img/t-posen${i}.jpg`}
            onClick={e => {
              this.imgClick(e)
              }
            }
            />]
          counter+=1
          if(counter === 5){
            counter = 0
            dollarValue -= 1
          }
        }
        return pics
      }
      return make()
      }
    }


  render(){
    return (
      <Fragment>
        <div className="app-wrapper">
        <h3 className="title">You have 15$ to choose what you want for your physical form</h3>
        <main>
          <section className="PickImg-wrapper">
            <div className="cost">
              <div><span>$5</span></div>
              <div><span>$4</span></div>
              <div><span>$3</span></div>
              <div><span>$2</span></div>
              <div><span>$1</span></div>
            </div>
            <div className="images">
              {this.makePics().map(img => img)}
            </div>
          </section>
          <section className="selected-wrapper">
            <div className="dollar-left">{`You have $${this.state.currentCounter} left`}</div>
            <div className="preview-wrapper">
              {this.state.selected.map(selected => {
                return <img 
                key={`selected-${selected}`}
                src={selected} 
                onClick={(e) => {this.imgClick(e)}}
                alt={`${selected}`}
                />
              })}
            </div>
          </section>
        </main>
        </div>
      </Fragment>
    );
  }
}
