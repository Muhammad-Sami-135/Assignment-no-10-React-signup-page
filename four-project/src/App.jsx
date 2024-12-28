import Style from "./App.module.css"
import { Button } from './Components/Button/Button'
import sign from "./assets/signup image.jpg"

function App() {

  return (
    <>
      <div className={Style.main}>
        <div>
          <h1 className={Style.head}>Sign up</h1>
          <p className={Style.Para}>Already have account <a href="">login here</a></p>
          <label className={Style.label}>Ful Name</label>
          <input className={Style.Input} type="text" />
          <br />
          <br />
          <label className={Style.label}>Email Id </label>
          <input className={Style.Input} type="email" />
          <br />
          <br />
          <label className={Style.label}>Password</label>
          <input className={Style.Input} type="password" />
          <br />
          <br />
          <input type="checkbox" /> by signing up to agree to recive update and special offers.
          <br />
          <br />
          <Button />
        </div>
        <div className={Style.Image}>
          <img src={sign} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
