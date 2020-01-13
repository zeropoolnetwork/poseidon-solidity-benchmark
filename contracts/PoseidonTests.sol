pragma solidity >=0.5.2;

library Poseidon_2_8_55 {
    function poseidon(uint256[] memory) public pure returns(uint256);
}

library Poseidon_6_8_56 {
    function poseidon(uint256[] memory) public pure returns(uint256);
}

library Poseidon_8_8_84 {
    function poseidon(uint256[] memory) public pure returns(uint256);
}

contract Test_Poseidon_2_8_55 {
    uint res = 1;

    function test() public returns(bool) {
        uint[] memory p = new uint[](2);
        p[0]=0xa0a3d8abe6320cd9853f3c855e3a91514527c47b9c592d4e06969ca12777b8da;
        p[1]=0x614ba149328cbd9c3ad110966112f6df5fda2b0f472263535adc7419028768d3;
        res = Poseidon_2_8_55.poseidon(p);
        return true;
    }
}

contract Test_Poseidon_6_8_56 {
    uint res = 1;

    function test() public returns(bool) {
        uint[] memory p = new uint[](6);
        p[0]=0xa0a3d8abe6320cd9853f3c855e3a91514527c47b9c592d4e06969ca12777b8da;
        p[1]=0x614ba149328cbd9c3ad110966112f6df5fda2b0f472263535adc7419028768d3;
        p[2]=0x5f6092440b956fa51fd322e3f9c898baf71f77c349e7390bc9d23eddc3e6feb4;
        p[3]=0x3e15e1f483c703eec8d0e3ebea7cdbed02cfab316fd5927bd427d2cb35650a9c;
        p[4]=0xbd929571f8d5177500e2db60f1d6ba2aede341a0a8d59a82914f1f54810c94fc;
        p[5]=0xbfce4ad86e962fd54e59457cd53688351cb53c202d9ddc8f07d04ac34d81696;
        res = Poseidon_6_8_56.poseidon(p);
        return true;
    }
}


contract Test_Poseidon_8_8_84 {
    uint res = 1;

    function test() public returns(bool) {
        uint[] memory p = new uint[](6);
        p[0]=0xa0a3d8abe6320cd9853f3c855e3a91514527c47b9c592d4e06969ca12777b8da;
        p[1]=0x614ba149328cbd9c3ad110966112f6df5fda2b0f472263535adc7419028768d3;
        p[2]=0x5f6092440b956fa51fd322e3f9c898baf71f77c349e7390bc9d23eddc3e6feb4;
        p[3]=0x3e15e1f483c703eec8d0e3ebea7cdbed02cfab316fd5927bd427d2cb35650a9c;
        p[4]=0xbd929571f8d5177500e2db60f1d6ba2aede341a0a8d59a82914f1f54810c94fc;
        p[5]=0xbfce4ad86e962fd54e59457cd53688351cb53c202d9ddc8f07d04ac34d81696;
        p[6]=0xcd17e92c1576d9619be6e73dc3e54ecdc244e563cb850873fd43b421d6821c84;
        p[7]=0x5dce6c8418f3a2aef0a4fd87d3ca27c89cab648a3e33ee804c5dec4a0880e502;
        res = Poseidon_8_8_84.poseidon(p);
        return true;
    }
}