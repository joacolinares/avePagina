
/* To connect using MetaMask */
async function connect() {
    if (window.ethereum) {

        await window.ethereum.request({ method: "eth_requestAccounts" });
        window.web3 = new Web3(window.ethereum);
        console.log(web3.eth.accounts.givenProvider.selectedAddress)
    } else {
        console.log("No wallet");
    }
}
