import "./App.css";
import { useAccount } from "wagmi";
import { Account } from "./Account";
import { SmartAccount } from "./SmartAcc";
import { WalletOptions } from "./WaletOptions";
function App() {
  return (
    <>
      <div>Testing AA</div>
      <div>
        <ConnectWallet />
      </div>

      <div>
        <SmartAccount />
      </div>
    </>
  );
}

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}

export default App;
