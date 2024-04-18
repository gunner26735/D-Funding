const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("DonationModule", (m) => {
  
    const deployedDonationManagement = m.contract("DonationManagement");

  return { deployedDonationManagement };
});
