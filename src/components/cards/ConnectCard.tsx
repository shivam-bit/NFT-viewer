import { EmojiImage,Button } from 'src/components';
import Image from 'next/image';
import styles from './ConnectCard.module.scss';
import metamaskInstance from 'src/services/MetaMask';

const ConnectCard: any = (props) => {
    const connectWallet = async (e) => {
        // triggerOnClick();
        // const buttonNode = e.currentTarget
        // buttonNode.classList.add('animate');
        // setTimeout(()=>{
        //     buttonNode.classList.remove('animate')
        // },500);
        console.log("🚀 ~ file: ConnectCard.tsx ~ line 17 ~ connectWal ~ MetamaskInstance", metamaskInstance)
        const accounts = await metamaskInstance.onClickConnect();
        console.log("🚀 ~ file: ConnectCard.tsx ~ line 16 ~ connectWal ~ accounts", accounts)
        // metamaskInstance.
        // TODO: Add analytics event
    }
        
  return (
        <div className='card'>
            <Image
      src="/metamask-fox.svg"
      width={200}
      height={200}
    />
    <h2>Connect your MetaMask Wallet</h2>
    <Button triggerOnClick={connectWallet}> Connect Wallet</Button>
            {/* <EmojiImage size="64px" >
            🙃
            </EmojiImage> */}
            
        </div>
  )
}

export default ConnectCard;

