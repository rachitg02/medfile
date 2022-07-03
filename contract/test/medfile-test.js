const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Medfile", function () {
  it("Test Medfile contract", async function () {
    const Medfile = await ethers.getContractFactory("Medfile");
    const [user1,user2]= await ethers.getSigners();
    const medfile = await Medfile.deploy();
    await medfile.deployed();

    await medfile.signup("1002","Rachit","Doctor","8218790979");
    console.log("sign in up user for rachit...");

    const user =await medfile.users("1002");
    expect(user.name).to.equal("Rachit");
    expect(user.post).to.equal("Doctor");
    expect(user.pno).to.equal("8218790979");
    console.log("test signup successful");

    const userFromAddress =await medfile.getUser(user1.address);
    expect(userFromAddress.userid).to.equal("1002")
    expect(userFromAddress.name).to.equal("Rachit");
    expect(userFromAddress.post).to.equal("Doctor");
    expect(userFromAddress.pno).to.equal("8218790979");
    console.log("test signup successful for getUser");

    expect(await medfile.userids(user1.address)).to.equal("1002");

    await expect(medfile.signup("","","","")).to.be.revertedWith(
      "User already exists"
    );
    console.log("test user already exists error");
    
    await expect(
      medfile
        .connect(user2)
        .signup("1002", "Rachit", "Doctor", "8218790979")
    ).to.be.revertedWith("Username is taken, please try another one.");
    console.log("test username is taken error");

    await medfile.postPatient("David","Malaria, Alopecia", "Malaria Medicine, Ointment","9456174414","99 Lexington road");
    expect((await medfile.patients(0)).pname).to.equal("David");
    expect((await medfile.patients(0)).report).to.equal("Malaria, Alopecia");
    expect((await medfile.patients(0)).treatment).to.equal("Malaria Medicine, Ointment");
    expect((await medfile.patients(0)).ppno).to.equal("9456174414");
    expect((await medfile.patients(0)).paddress).to.equal("99 Lexington road");
    console.log("test post dweet is successful");

    const patients = await medfile.getPatient();
    expect((await medfile.patients(0)).pname).to.equal("David");
    expect((await medfile.patients(0)).report).to.equal("Malaria, Alopecia");
    expect((await medfile.patients(0)).treatment).to.equal("Malaria Medicine, Ointment");
    expect((await medfile.patients(0)).ppno).to.equal("9456174414");
    expect((await medfile.patients(0)).paddress).to.equal("99 Lexington road");
    console.log("test get dweets is successful");
  });
});
