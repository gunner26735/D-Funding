// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract DonationManagement {
    
    address owner;
    constructor(){
        owner = msg.sender;
    }
    
    // Org Information
    struct org_info {
        string org_name;
        string org_desc;
        uint256 org_goal;
        bool status;
    }
    mapping (address => org_info) org_details;

    //Org Suplicate to fetch all Orgs
    org_info[] private OrgsFetchedList;

    // Org's Addresses
    address[] orgsAddressList;

    // Org Fund donation collections
    mapping (address => uint256) org_collections;

    // Org Donations Details
    struct donation_info {
        address donor_addr;
        uint256 donation;
        string txhash;
    }
    mapping (address => donation_info[]) donation_details;

    // can only be accessed by owner
    function addOrg(address _orgAddress,string memory _orgName,string memory _orgDesc,uint256 _orgGoal) payable  public {
        require(msg.sender == owner,"Only OWner can access it...");
        org_details[_orgAddress].org_name = _orgName;
        org_details[_orgAddress].org_desc = _orgDesc;
        org_details[_orgAddress].org_goal = _orgGoal;
        org_details[_orgAddress].status = true;
        
        //storing org address
        orgsAddressList.push(_orgAddress);

        //storing orgs data into fetched org array 
        OrgsFetchedList.push(
            org_info(_orgName,_orgDesc,_orgGoal,true)
        );
    }

    // TO change Org Status
    // can only be accessed by owner
    function updateOrgStatus(address _orgAddress,bool _status) payable public {
        require(msg.sender == owner,"Only OWner can access it...");
        org_details[_orgAddress].status = _status;
    }

    // list all organtisations
    function listOrgs() view public returns(address[] memory){
        return orgsAddressList;
    }

    // gives details about an organisation
    function getOrgInfo(address _orgAddress) view public returns(org_info memory){
        return org_details[_orgAddress];
    }

    // gives details about all the organisation
    function getAllOrgInfo() view public returns(org_info[] memory){
        return OrgsFetchedList;
    }

    // adds a new donations made by user to an Org
    function makeDonation(address _sender,address _reciver,uint256 amount,string memory _txhash) public payable {
        require(amount > 0, "Donation must be > 0 to proceed");
        org_collections[_reciver] += amount;
        donation_details[_reciver].push(donation_info(_sender,amount,_txhash));
    }

    // to list all the donations of an org
    function listDonations(address _orgAddress) view public returns(donation_info[] memory){
        return donation_details[_orgAddress];
    }

}