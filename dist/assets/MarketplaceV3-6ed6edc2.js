const e = [
  {
    inputs: [
      { internalType: "address", name: "_pluginMap", type: "address" },
      {
        internalType: "address",
        name: "_royaltyEngineAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: !1,
    inputs: [
      { indexed: !1, internalType: "string", name: "prevURI", type: "string" },
      { indexed: !1, internalType: "string", name: "newURI", type: "string" },
    ],
    name: "ContractURIUpdated",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "platformFeeRecipient",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "flatFee",
        type: "uint256",
      },
    ],
    name: "FlatPlatformFeeUpdated",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "platformFeeRecipient",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "platformFeeBps",
        type: "uint256",
      },
    ],
    name: "PlatformFeeInfoUpdated",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "enum IPlatformFee.PlatformFeeType",
        name: "feeType",
        type: "uint8",
      },
    ],
    name: "PlatformFeeTypeUpdated",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes4",
        name: "functionSelector",
        type: "bytes4",
      },
      {
        indexed: !0,
        internalType: "address",
        name: "pluginAddress",
        type: "address",
      },
    ],
    name: "PluginAdded",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes4",
        name: "functionSelector",
        type: "bytes4",
      },
      {
        indexed: !0,
        internalType: "address",
        name: "pluginAddress",
        type: "address",
      },
    ],
    name: "PluginRemoved",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes4",
        name: "functionSelector",
        type: "bytes4",
      },
      {
        indexed: !0,
        internalType: "string",
        name: "functionSignature",
        type: "string",
      },
      {
        indexed: !0,
        internalType: "address",
        name: "pluginAddress",
        type: "address",
      },
    ],
    name: "PluginSet",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes4",
        name: "functionSelector",
        type: "bytes4",
      },
      {
        indexed: !0,
        internalType: "address",
        name: "oldPluginAddress",
        type: "address",
      },
      {
        indexed: !0,
        internalType: "address",
        name: "newPluginAddress",
        type: "address",
      },
    ],
    name: "PluginUpdated",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      { indexed: !0, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: !0,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: !0,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      { indexed: !0, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: !0,
        internalType: "address",
        name: "account",
        type: "address",
      },
      { indexed: !0, internalType: "address", name: "sender", type: "address" },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      { indexed: !0, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: !0,
        internalType: "address",
        name: "account",
        type: "address",
      },
      { indexed: !0, internalType: "address", name: "sender", type: "address" },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "previousAddress",
        type: "address",
      },
      {
        indexed: !0,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "RoyaltyEngineUpdated",
    type: "event",
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "_selector", type: "bytes4" }],
    name: "_getPluginForFunction",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "bytes4", name: "functionSelector", type: "bytes4" },
          { internalType: "string", name: "functionSignature", type: "string" },
          { internalType: "address", name: "pluginAddress", type: "address" },
        ],
        internalType: "struct IPluginMap.Plugin",
        name: "_plugin",
        type: "tuple",
      },
    ],
    name: "addPlugin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractType",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractVersion",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_pluginAddress", type: "address" },
    ],
    name: "getAllFunctionsOfPlugin",
    outputs: [
      { internalType: "bytes4[]", name: "registered", type: "bytes4[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPlugins",
    outputs: [
      {
        components: [
          { internalType: "bytes4", name: "functionSelector", type: "bytes4" },
          { internalType: "string", name: "functionSignature", type: "string" },
          { internalType: "address", name: "pluginAddress", type: "address" },
        ],
        internalType: "struct IPluginMap.Plugin[]",
        name: "registered",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPlatformFeeInfo",
    outputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint16", name: "", type: "uint16" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "_selector", type: "bytes4" }],
    name: "getPluginForFunction",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "getRoleMember",
    outputs: [{ internalType: "address", name: "member", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleMemberCount",
    outputs: [{ internalType: "uint256", name: "count", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenAddress", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "getRoyalty",
    outputs: [
      {
        internalType: "address payable[]",
        name: "recipients",
        type: "address[]",
      },
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRoyaltyEngineAddress",
    outputs: [
      {
        internalType: "address",
        name: "royaltyEngineAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "hasRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "hasRoleWithSwitch",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_defaultAdmin", type: "address" },
      { internalType: "string", name: "_contractURI", type: "string" },
      {
        internalType: "address[]",
        name: "_trustedForwarders",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_platformFeeRecipient",
        type: "address",
      },
      { internalType: "uint16", name: "_platformFeeBps", type: "uint16" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "forwarder", type: "address" }],
    name: "isTrustedForwarder",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes[]", name: "data", type: "bytes[]" }],
    name: "multicall",
    outputs: [{ internalType: "bytes[]", name: "results", type: "bytes[]" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256[]", name: "", type: "uint256[]" },
      { internalType: "uint256[]", name: "", type: "uint256[]" },
      { internalType: "bytes", name: "", type: "bytes" },
    ],
    name: "onERC1155BatchReceived",
    outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "bytes", name: "", type: "bytes" },
    ],
    name: "onERC1155Received",
    outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "bytes", name: "", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "pluginMap",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "_selector", type: "bytes4" }],
    name: "removePlugin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_uri", type: "string" }],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_platformFeeRecipient",
        type: "address",
      },
      { internalType: "uint256", name: "_platformFeeBps", type: "uint256" },
    ],
    name: "setPlatformFeeInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_royaltyEngineAddress",
        type: "address",
      },
    ],
    name: "setRoyaltyEngine",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "bytes4", name: "functionSelector", type: "bytes4" },
          { internalType: "string", name: "functionSignature", type: "string" },
          { internalType: "address", name: "pluginAddress", type: "address" },
        ],
        internalType: "struct IPluginMap.Plugin",
        name: "_plugin",
        type: "tuple",
      },
    ],
    name: "updatePlugin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];
export { e as default };
