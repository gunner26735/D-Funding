export default function weiToUSD(wei) {
    const etherToUsdRate = Number(2998.88);
    const weiToEther = Number(wei) / Number(10 ** 18);
    const usdValue = weiToEther * etherToUsdRate;    
    return Math.ceil(usdValue);
}
