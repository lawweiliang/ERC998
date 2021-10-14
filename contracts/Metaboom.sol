// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ComposableTopDown.sol";

contract Metaboom is ComposableTopDown {
    constructor() ComposableTopDown("Metaboom", "MTB") {}

    function createNft(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 tokenCount = _safeMint(player);
        _setTokenURI(tokenCount, tokenURI);

        return tokenCount;
    }
}
