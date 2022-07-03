//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Medfile {
    struct User {
        address wallet;
        string name;
        string userid;
        string post;
        string pno;
    
    }

    struct Patient{
        address author;
        string pname;
        string report;
        string treatment;
        string ppno;
        string paddress;
    }

    Patient[] public patients;

    mapping(address => string) public userids;
    mapping(string => User) public users;

    function signup(string memory _userid, string memory _name, string memory _post, string memory _pno) public {
       require(bytes(userids[msg.sender]).length == 0, "User already exists");
       require(users[_userid].wallet == address(0), "Username is taken, please try another one.");
       
       users[_userid] = User({
           wallet: msg.sender,
           name: _name,
           userid: _userid,
           post: _post,
           pno: _pno
       });
       userids[msg.sender] = _userid;
    }

    function getUser(address _wallet) public view returns(User memory){
        return users[userids[_wallet]];
    }

    function postPatient(string memory _pname, string memory _report, string memory _treatment, string memory _ppno, string memory _paddress) public {
        require(bytes(userids[msg.sender]).length>0,"You must sign up to post Patient details.");
        require(bytes(_pname).length>0,"You must write the patient name.");
        require(bytes(_report).length>0,"You must write the disease analysis.");
        require(bytes(_report).length<=300,"The report is too long.");
        require(bytes(_treatment).length>0,"You must write the treatment suggested.");
        require(bytes(_treatment).length<=300,"The Treatment suggested is too long.");
        require(bytes(_ppno).length>0,"You must write the patients phone number.");
        require(bytes(_ppno).length<=10,"The phone number must not be more than 10 digits.");
        require(bytes(_paddress).length>0,"You must write the patients address.");
        require(bytes(_paddress).length<=300,"The Patients address is too long.");


        Patient memory patient = Patient({
            author:msg.sender,
            pname: _pname,
            report: _report,
            treatment: _treatment,
            ppno: _ppno,
            paddress: _paddress
        });
        patients.push(patient);
    }
    function getPatient() public view returns (Patient[] memory){
        return patients;
    }

}