pragma solidity ^0.8.0;

contract PropertyRegistry {
    struct Property {
        uint256 id;
        string name;
        string location;
        address owner;
    }

    mapping(uint256 => Property) public properties;
    uint256 public nextId;

    function registerProperty(string memory name, string memory location) public {
        properties[nextId] = Property(nextId, name, location, msg.sender);
        nextId++;
    }

    function getProperty(uint256 id) public view returns (Property memory) {
        return properties[id];
    }

    function updateProperty(uint256 id, string memory name, string memory location) public {
        require(properties[id].owner == msg.sender, "Only the owner can update the property");
        properties[id].name = name;
        properties[id].location = location;
    }
}
