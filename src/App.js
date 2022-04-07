import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button } from "react-bootstrap";
import Nft from "./nft"

function App() {
  const [accountAdress, setAccountAdress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [nftCollection, setNftCollection] = useState({});
  const [viewAsset, setViewAsset] = useState(false);
  const  connectWallet = async () =>{
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccountAdress(accounts[0]);
      
    }
    

    return "Install MetaMask before you can proceed";
  }
    const fetchAssets = async () => {
      const url = `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${accountAdress}`;
      const response = await fetch(url);
      const nftData = await response.json();
      console.log(nftData);
      setNftCollection( nftData.items );
     setViewAsset(true);

     
    };
    
  return (
    <div className="App">
      <div className="container">
        <h1>
          Wallet Adress:
          <br />
        </h1>
        <h5 className="address">{accountAdress}</h5>
        <Button variant="primary" onClick={connectWallet}>
          Connect Wallet{" "}
        </Button>

        <Button variant="primary" onClick={fetchAssets}>
          View Assets
        </Button>
      </div>

      {viewAsset && (
        <div className="nfts">
          <div>
            <h1>NFT's</h1>
            {nftCollection.length == 0 ? (
              "You dont have any Non-Fungible tokens on this wallet"
            ) : (
              <div className='nft-container'>
                <Nft />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
 