import React, {Fragment} from 'react';
import ImageBox from './components/ImageBox'

const App = () => {
    const [total] = React.useState(15)
    let [remainder, updateRemainder] = React.useState(15)
    let [selected, updateSelected] = React.useState([])
    let [picData, setPicData] = React.useState(null)

    
    const imgClick = (id, options) => {
      console.log("_______ID_________")
      console.log(id)
      // console.log(e.target.getAttribute("data-value"))
      console.log("SELECTED")
      console.log(selected)
      const price = picData[id].price
      if(selected.indexOf(id) >= 0){
        updateSelected(selected.filter(oldId => oldId !== id))
        updateRemainder(remainder + price)
        return
      }
      else{
        if(remainder - price < 0){
          alert('youre out of dollars')
          return
        }
        updateRemainder(remainder - price)
        updateSelected([...selected, id])
      }
      return
    }

    const makePics = () => {

      const make = () => {
      const imgCount = 25
      let i = 0
      let pics = []
      let counter = 0
      let dollarValue = 5

      let generatedPicData = {}

        for (i; i < imgCount; i++) {
          const id = `picker-${i}`
          pics = [...pics, <ImageBox 
            key={`imageBox-${i}`}
            id={id}
            selected={selected.indexOf(id) >= 0}
            src={`img/t-posen${i}.jpg`}
            onClick={(e) => { 
              imgClick(id)} 
            }
            />]
          generatedPicData = {...generatedPicData, [`picker-${i}`]: {price: dollarValue, selected: false, src: `img/t-posen${i}.jpg`}}
          counter+=1
          if(counter === 5){
            counter = 0
            dollarValue -= 1
          }
        }
        if(!picData){
          setPicData(generatedPicData)
        }
        return pics
      }
      return make()
    }

    const renderSelected = () => {
      if(selected.length > 0){
        return selected.map(id => {
          // return <img 
          // key={`selected-${id}`}
          // src={picData[id].src} 
          // onClick={() => {
          //   imgClick(id)}}
          // alt={`${selected}`}
          // />
          return <ImageBox 
          key={`imageBox-selected-${id}`}
          src={picData[id].src}
          onClick={() => { 
            imgClick(id)} 
          }
          />
      })
    }
      else return null
    }

    React.useEffect(() => {
    })

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
              {makePics().map(img => img)}
            </div>
          </section>
          <section className="selected-wrapper">
            {/* <div className="dollar-left">{`You have $${remainder} left`}</div> */}
            <div className="dollar-left">You have <span>{remainder} $</span> left</div>
            <div className="preview-wrapper">
              {renderSelected()}
            </div>
          </section>
        </main>
        </div>
      </Fragment>
    );
  }
export default App