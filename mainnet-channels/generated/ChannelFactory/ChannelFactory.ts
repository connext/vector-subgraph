// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ChannelCreation extends ethereum.Event {
  get params(): ChannelCreation__Params {
    return new ChannelCreation__Params(this);
  }
}

export class ChannelCreation__Params {
  _event: ChannelCreation;

  constructor(event: ChannelCreation) {
    this._event = event;
  }

  get channel(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ChannelFactory extends ethereum.SmartContract {
  static bind(address: Address): ChannelFactory {
    return new ChannelFactory("ChannelFactory", address);
  }

  createChannel(alice: Address, bob: Address): Address {
    let result = super.call(
      "createChannel",
      "createChannel(address,address):(address)",
      [ethereum.Value.fromAddress(alice), ethereum.Value.fromAddress(bob)]
    );

    return result[0].toAddress();
  }

  try_createChannel(
    alice: Address,
    bob: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createChannel",
      "createChannel(address,address):(address)",
      [ethereum.Value.fromAddress(alice), ethereum.Value.fromAddress(bob)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getChainId(): BigInt {
    let result = super.call("getChainId", "getChainId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getChainId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getChainId", "getChainId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getChannelAddress(alice: Address, bob: Address): Address {
    let result = super.call(
      "getChannelAddress",
      "getChannelAddress(address,address):(address)",
      [ethereum.Value.fromAddress(alice), ethereum.Value.fromAddress(bob)]
    );

    return result[0].toAddress();
  }

  try_getChannelAddress(
    alice: Address,
    bob: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getChannelAddress",
      "getChannelAddress(address,address):(address)",
      [ethereum.Value.fromAddress(alice), ethereum.Value.fromAddress(bob)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getMastercopy(): Address {
    let result = super.call("getMastercopy", "getMastercopy():(address)", []);

    return result[0].toAddress();
  }

  try_getMastercopy(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getMastercopy",
      "getMastercopy():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getProxyCreationCode(): Bytes {
    let result = super.call(
      "getProxyCreationCode",
      "getProxyCreationCode():(bytes)",
      []
    );

    return result[0].toBytes();
  }

  try_getProxyCreationCode(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getProxyCreationCode",
      "getProxyCreationCode():(bytes)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getStoredChainId(): BigInt {
    let result = super.call(
      "getStoredChainId",
      "getStoredChainId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getStoredChainId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getStoredChainId",
      "getStoredChainId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _mastercopy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _chainId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateChannelCall extends ethereum.Call {
  get inputs(): CreateChannelCall__Inputs {
    return new CreateChannelCall__Inputs(this);
  }

  get outputs(): CreateChannelCall__Outputs {
    return new CreateChannelCall__Outputs(this);
  }
}

export class CreateChannelCall__Inputs {
  _call: CreateChannelCall;

  constructor(call: CreateChannelCall) {
    this._call = call;
  }

  get alice(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get bob(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CreateChannelCall__Outputs {
  _call: CreateChannelCall;

  constructor(call: CreateChannelCall) {
    this._call = call;
  }

  get channel(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreateChannelAndDepositAliceCall extends ethereum.Call {
  get inputs(): CreateChannelAndDepositAliceCall__Inputs {
    return new CreateChannelAndDepositAliceCall__Inputs(this);
  }

  get outputs(): CreateChannelAndDepositAliceCall__Outputs {
    return new CreateChannelAndDepositAliceCall__Outputs(this);
  }
}

export class CreateChannelAndDepositAliceCall__Inputs {
  _call: CreateChannelAndDepositAliceCall;

  constructor(call: CreateChannelAndDepositAliceCall) {
    this._call = call;
  }

  get alice(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get bob(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get assetId(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateChannelAndDepositAliceCall__Outputs {
  _call: CreateChannelAndDepositAliceCall;

  constructor(call: CreateChannelAndDepositAliceCall) {
    this._call = call;
  }

  get channel(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
