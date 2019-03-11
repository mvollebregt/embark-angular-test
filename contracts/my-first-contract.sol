pragma solidity ^0.4.4;

contract MyFirstContract {

  function get() public view returns (string) {
    return 'Absolutely Fabulous';
  }

  function whoAmI() public view returns (address) {
    return msg.sender;
  }
}
