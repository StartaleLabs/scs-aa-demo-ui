// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DiceRollLedger {
    mapping(address => uint256[]) private rolls;

    event DiceRollStored(address indexed roller, uint256 result);

    function writeDiceRoll(uint256 result) external {
        require(result >= 1 && result <= 6, "Invalid dice roll result");
        rolls[msg.sender].push(result);
        emit DiceRollStored(msg.sender, result);
    }

    function getLastRolls(address user, uint256 count) external view returns (uint256[] memory) {
        uint256 totalRolls = rolls[user].length;

        if (count > totalRolls) {
            count = totalRolls; // Limit count to available rolls
        }

        uint256[] memory recentRolls = new uint256[](count);
        for (uint256 i = 0; i < count; i++) {
            recentRolls[i] = rolls[user][totalRolls - count + i];
        }

        return recentRolls;
    }

    function getLastRoll(address user) external view returns (uint256) {
        uint256 totalRolls = rolls[user].length;
        require(totalRolls > 0, "No rolls available for this user");
        return rolls[user][totalRolls - 1];
    }

    /**
     * @dev Returns the total number of dice rolls for a specific user.
     */
    function getTotalRolls(address user) external view returns (uint256) {
        return rolls[user].length;
    }

    /**
     * @dev Retrieves all dice rolls for a specific user.
     */
    function getAllRolls(address user) external view returns (uint256[] memory) {
        return rolls[user];
    }
}