export const SocialRecoveryAbi = [
  {
    inputs: [{ internalType: "address", name: "smartAccount", type: "address" }],
    name: "AlreadyInitialized",
    type: "error",
  },
  { inputs: [], name: "CannotRemoveGuardian", type: "error" },
  {
    inputs: [{ internalType: "address", name: "guardian", type: "address" }],
    name: "InvalidGuardian",
    type: "error",
  },
  { inputs: [], name: "InvalidSignature", type: "error" },
  { inputs: [], name: "InvalidThreshold", type: "error" },
  { inputs: [], name: "LinkedList_AlreadyInitialized", type: "error" },
  {
    inputs: [{ internalType: "address", name: "entry", type: "address" }],
    name: "LinkedList_EntryAlreadyInList",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "entry", type: "address" }],
    name: "LinkedList_InvalidEntry",
    type: "error",
  },
  { inputs: [], name: "LinkedList_InvalidPage", type: "error" },
  { inputs: [], name: "MaxGuardiansReached", type: "error" },
  {
    inputs: [{ internalType: "address", name: "smartAccount", type: "address" }],
    name: "NotInitialized",
    type: "error",
  },
  { inputs: [], name: "NotSortedAndUnique", type: "error" },
  { inputs: [], name: "ThresholdNotSet", type: "error" },
  { inputs: [], name: "UnsupportedOperation", type: "error" },
  {
    inputs: [{ internalType: "bytes", name: "contractSignature", type: "bytes" }],
    name: "WrongContractSignature",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "s", type: "uint256" },
      { internalType: "uint256", name: "contractSignatureLen", type: "uint256" },
      { internalType: "uint256", name: "signaturesLen", type: "uint256" },
    ],
    name: "WrongContractSignatureFormat",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "account", type: "address" },
      { indexed: false, internalType: "address", name: "guardian", type: "address" },
    ],
    name: "GuardianAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "account", type: "address" },
      { indexed: false, internalType: "address", name: "guardian", type: "address" },
    ],
    name: "GuardianRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: "address", name: "account", type: "address" }],
    name: "ModuleInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: "address", name: "account", type: "address" }],
    name: "ModuleUninitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "account", type: "address" },
      { indexed: false, internalType: "uint256", name: "threshold", type: "uint256" },
    ],
    name: "ThresholdSet",
    type: "event",
  },
  {
    inputs: [{ internalType: "address", name: "guardian", type: "address" }],
    name: "addGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "getGuardians",
    outputs: [{ internalType: "address[]", name: "guardiansArray", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "guardianCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "smartAccount", type: "address" }],
    name: "isInitialized",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "typeID", type: "uint256" }],
    name: "isModuleType",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "bytes32", name: "", type: "bytes32" },
      { internalType: "bytes", name: "", type: "bytes" },
    ],
    name: "isValidSignatureWithSender",
    outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
    name: "onInstall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    name: "onUninstall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "prevGuardian", type: "address" },
      { internalType: "address", name: "guardian", type: "address" },
    ],
    name: "removeGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_threshold", type: "uint256" }],
    name: "setThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "threshold",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "sender", type: "address" },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          { internalType: "bytes", name: "initCode", type: "bytes" },
          { internalType: "bytes", name: "callData", type: "bytes" },
          { internalType: "bytes32", name: "accountGasLimits", type: "bytes32" },
          { internalType: "uint256", name: "preVerificationGas", type: "uint256" },
          { internalType: "bytes32", name: "gasFees", type: "bytes32" },
          { internalType: "bytes", name: "paymasterAndData", type: "bytes" },
          { internalType: "bytes", name: "signature", type: "bytes" },
        ],
        internalType: "struct PackedUserOperation",
        name: "userOp",
        type: "tuple",
      },
      { internalType: "bytes32", name: "userOpHash", type: "bytes32" },
    ],
    name: "validateUserOp",
    outputs: [{ internalType: "ERC7579ValidatorBase.ValidationData", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "pure",
    type: "function",
  },
];
