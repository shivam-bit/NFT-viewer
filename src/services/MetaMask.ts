class MetaMask{
    updateEthereum = () => {
        this.ethereum = window?.ethereum;
    }
    isMetaMaskInstalled = () => {
        //Have to check the ethereum binding on the window object to see if it's installed
        this.updateEthereum()
        return Boolean(this.ethereum && this.ethereum.isMetaMask);
      };
    onClickConnect = async () => {
        try {
          // Will open the MetaMask UI
          // You should disable this button while the request is pending!
          this.updateEthereum();
          const accounts = await this.ethereum.request({ method: 'eth_requestAccounts' });
          return accounts;
        } catch (error) {
          console.error(error);
        }
      };
}

export default new MetaMask();