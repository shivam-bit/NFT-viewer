import styles from "./ChainsMenu.module.scss"
import { useState,useContext } from "react"
import {AppContext,UserContext} from "src/context/";
const ChainMenu: any = () => {
  const {supportedChains} = useContext(AppContext);
  const {activeChain,setActiveChain} = useContext(UserContext);
  
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

export default ChainMenu;
