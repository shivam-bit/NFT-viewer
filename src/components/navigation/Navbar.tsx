import styles from "./Navigation.module.scss"
import { useState,useContext } from "react"
import {AppContext} from "src/context/App.tsx";
const Navbar: any = () => {
  const {supportedChains,activeChain,setActiveChain} = useContext(AppContext);

  return (
        <nav 
        className={styles.navbar}
        >
          {
            supportedChains.map((chain,index)=>{
            return <div 
            key={index}
            className={"switch "+ (activeChain===chain ? 'switch-active' : '')}
            onClick={()=>setActiveChain(chain)}
            >
            <span>{chain}</span>
          </div>
          })
          }
        </nav>
  )
}

export default Navbar;
