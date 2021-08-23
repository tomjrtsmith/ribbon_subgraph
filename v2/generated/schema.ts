// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Vault extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Vault entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Vault entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Vault", id.toString(), this);
  }

  static load(id: string): Vault | null {
    return store.get("Vault", id) as Vault | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get underlyingAsset(): Bytes {
    let value = this.get("underlyingAsset");
    return value.toBytes();
  }

  set underlyingAsset(value: Bytes) {
    this.set("underlyingAsset", Value.fromBytes(value));
  }

  get underlyingName(): string {
    let value = this.get("underlyingName");
    return value.toString();
  }

  set underlyingName(value: string) {
    this.set("underlyingName", Value.fromString(value));
  }

  get underlyingSymbol(): string {
    let value = this.get("underlyingSymbol");
    return value.toString();
  }

  set underlyingSymbol(value: string) {
    this.set("underlyingSymbol", Value.fromString(value));
  }

  get underlyingDecimals(): i32 {
    let value = this.get("underlyingDecimals");
    return value.toI32();
  }

  set underlyingDecimals(value: i32) {
    this.set("underlyingDecimals", Value.fromI32(value));
  }

  get totalPremiumEarned(): BigInt {
    let value = this.get("totalPremiumEarned");
    return value.toBigInt();
  }

  set totalPremiumEarned(value: BigInt) {
    this.set("totalPremiumEarned", Value.fromBigInt(value));
  }

  get numDepositors(): i32 {
    let value = this.get("numDepositors");
    return value.toI32();
  }

  set numDepositors(value: i32) {
    this.set("numDepositors", Value.fromI32(value));
  }

  get depositors(): Array<Bytes> {
    let value = this.get("depositors");
    return value.toBytesArray();
  }

  set depositors(value: Array<Bytes>) {
    this.set("depositors", Value.fromBytesArray(value));
  }

  get vaultAccounts(): Array<string> {
    let value = this.get("vaultAccounts");
    return value.toStringArray();
  }

  set vaultAccounts(value: Array<string>) {
    this.set("vaultAccounts", Value.fromStringArray(value));
  }

  get totalBalance(): BigInt {
    let value = this.get("totalBalance");
    return value.toBigInt();
  }

  set totalBalance(value: BigInt) {
    this.set("totalBalance", Value.fromBigInt(value));
  }

  get cap(): BigInt {
    let value = this.get("cap");
    return value.toBigInt();
  }

  set cap(value: BigInt) {
    this.set("cap", Value.fromBigInt(value));
  }
}

export class VaultShortPosition extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save VaultShortPosition entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save VaultShortPosition entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("VaultShortPosition", id.toString(), this);
  }

  static load(id: string): VaultShortPosition | null {
    return store.get("VaultShortPosition", id) as VaultShortPosition | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vault(): string {
    let value = this.get("vault");
    return value.toString();
  }

  set vault(value: string) {
    this.set("vault", Value.fromString(value));
  }

  get option(): Bytes {
    let value = this.get("option");
    return value.toBytes();
  }

  set option(value: Bytes) {
    this.set("option", Value.fromBytes(value));
  }

  get depositAmount(): BigInt {
    let value = this.get("depositAmount");
    return value.toBigInt();
  }

  set depositAmount(value: BigInt) {
    this.set("depositAmount", Value.fromBigInt(value));
  }

  get withdrawAmount(): BigInt | null {
    let value = this.get("withdrawAmount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set withdrawAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("withdrawAmount");
    } else {
      this.set("withdrawAmount", Value.fromBigInt(value as BigInt));
    }
  }

  get mintAmount(): BigInt {
    let value = this.get("mintAmount");
    return value.toBigInt();
  }

  set mintAmount(value: BigInt) {
    this.set("mintAmount", Value.fromBigInt(value));
  }

  get loss(): BigInt | null {
    let value = this.get("loss");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set loss(value: BigInt | null) {
    if (value === null) {
      this.unset("loss");
    } else {
      this.set("loss", Value.fromBigInt(value as BigInt));
    }
  }

  get isExercised(): boolean {
    let value = this.get("isExercised");
    return value.toBoolean();
  }

  set isExercised(value: boolean) {
    this.set("isExercised", Value.fromBoolean(value));
  }

  get initiatedBy(): Bytes {
    let value = this.get("initiatedBy");
    return value.toBytes();
  }

  set initiatedBy(value: Bytes) {
    this.set("initiatedBy", Value.fromBytes(value));
  }

  get strikePrice(): BigInt {
    let value = this.get("strikePrice");
    return value.toBigInt();
  }

  set strikePrice(value: BigInt) {
    this.set("strikePrice", Value.fromBigInt(value));
  }

  get expiry(): BigInt {
    let value = this.get("expiry");
    return value.toBigInt();
  }

  set expiry(value: BigInt) {
    this.set("expiry", Value.fromBigInt(value));
  }

  get openedAt(): BigInt {
    let value = this.get("openedAt");
    return value.toBigInt();
  }

  set openedAt(value: BigInt) {
    this.set("openedAt", Value.fromBigInt(value));
  }

  get closedAt(): BigInt | null {
    let value = this.get("closedAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set closedAt(value: BigInt | null) {
    if (value === null) {
      this.unset("closedAt");
    } else {
      this.set("closedAt", Value.fromBigInt(value as BigInt));
    }
  }

  get premiumEarned(): BigInt {
    let value = this.get("premiumEarned");
    return value.toBigInt();
  }

  set premiumEarned(value: BigInt) {
    this.set("premiumEarned", Value.fromBigInt(value));
  }

  get openTxhash(): Bytes {
    let value = this.get("openTxhash");
    return value.toBytes();
  }

  set openTxhash(value: Bytes) {
    this.set("openTxhash", Value.fromBytes(value));
  }

  get closeTxhash(): Bytes | null {
    let value = this.get("closeTxhash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set closeTxhash(value: Bytes | null) {
    if (value === null) {
      this.unset("closeTxhash");
    } else {
      this.set("closeTxhash", Value.fromBytes(value as Bytes));
    }
  }

  get trades(): Array<string> {
    let value = this.get("trades");
    return value.toStringArray();
  }

  set trades(value: Array<string>) {
    this.set("trades", Value.fromStringArray(value));
  }
}

export class GnosisAuction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save GnosisAuction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save GnosisAuction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("GnosisAuction", id.toString(), this);
  }

  static load(id: string): GnosisAuction | null {
    return store.get("GnosisAuction", id) as GnosisAuction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get optionToken(): Bytes {
    let value = this.get("optionToken");
    return value.toBytes();
  }

  set optionToken(value: Bytes) {
    this.set("optionToken", Value.fromBytes(value));
  }
}

export class VaultOptionTrade extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save VaultOptionTrade entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save VaultOptionTrade entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("VaultOptionTrade", id.toString(), this);
  }

  static load(id: string): VaultOptionTrade | null {
    return store.get("VaultOptionTrade", id) as VaultOptionTrade | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vault(): string {
    let value = this.get("vault");
    return value.toString();
  }

  set vault(value: string) {
    this.set("vault", Value.fromString(value));
  }

  get vaultShortPosition(): string {
    let value = this.get("vaultShortPosition");
    return value.toString();
  }

  set vaultShortPosition(value: string) {
    this.set("vaultShortPosition", Value.fromString(value));
  }

  get sellAmount(): BigInt {
    let value = this.get("sellAmount");
    return value.toBigInt();
  }

  set sellAmount(value: BigInt) {
    this.set("sellAmount", Value.fromBigInt(value));
  }

  get premium(): BigInt {
    let value = this.get("premium");
    return value.toBigInt();
  }

  set premium(value: BigInt) {
    this.set("premium", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get txhash(): Bytes {
    let value = this.get("txhash");
    return value.toBytes();
  }

  set txhash(value: Bytes) {
    this.set("txhash", Value.fromBytes(value));
  }
}

export class VaultTransaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save VaultTransaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save VaultTransaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("VaultTransaction", id.toString(), this);
  }

  static load(id: string): VaultTransaction | null {
    return store.get("VaultTransaction", id) as VaultTransaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vault(): string {
    let value = this.get("vault");
    return value.toString();
  }

  set vault(value: string) {
    this.set("vault", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get txhash(): Bytes {
    let value = this.get("txhash");
    return value.toBytes();
  }

  set txhash(value: Bytes) {
    this.set("txhash", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get underlyingAmount(): BigInt {
    let value = this.get("underlyingAmount");
    return value.toBigInt();
  }

  set underlyingAmount(value: BigInt) {
    this.set("underlyingAmount", Value.fromBigInt(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }
}

export class VaultAccount extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save VaultAccount entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save VaultAccount entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("VaultAccount", id.toString(), this);
  }

  static load(id: string): VaultAccount | null {
    return store.get("VaultAccount", id) as VaultAccount | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vault(): string {
    let value = this.get("vault");
    return value.toString();
  }

  set vault(value: string) {
    this.set("vault", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get updateCounter(): i32 {
    let value = this.get("updateCounter");
    return value.toI32();
  }

  set updateCounter(value: i32) {
    this.set("updateCounter", Value.fromI32(value));
  }

  get totalYieldEarned(): BigInt {
    let value = this.get("totalYieldEarned");
    return value.toBigInt();
  }

  set totalYieldEarned(value: BigInt) {
    this.set("totalYieldEarned", Value.fromBigInt(value));
  }

  get totalDeposits(): BigInt {
    let value = this.get("totalDeposits");
    return value.toBigInt();
  }

  set totalDeposits(value: BigInt) {
    this.set("totalDeposits", Value.fromBigInt(value));
  }

  get totalBalance(): BigInt {
    let value = this.get("totalBalance");
    return value.toBigInt();
  }

  set totalBalance(value: BigInt) {
    this.set("totalBalance", Value.fromBigInt(value));
  }

  get shares(): BigInt {
    let value = this.get("shares");
    return value.toBigInt();
  }

  set shares(value: BigInt) {
    this.set("shares", Value.fromBigInt(value));
  }

  get totalStakedShares(): BigInt {
    let value = this.get("totalStakedShares");
    return value.toBigInt();
  }

  set totalStakedShares(value: BigInt) {
    this.set("totalStakedShares", Value.fromBigInt(value));
  }

  get totalStakedBalance(): BigInt {
    let value = this.get("totalStakedBalance");
    return value.toBigInt();
  }

  set totalStakedBalance(value: BigInt) {
    this.set("totalStakedBalance", Value.fromBigInt(value));
  }
}

export class BalanceUpdate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BalanceUpdate entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BalanceUpdate entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BalanceUpdate", id.toString(), this);
  }

  static load(id: string): BalanceUpdate | null {
    return store.get("BalanceUpdate", id) as BalanceUpdate | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vault(): string {
    let value = this.get("vault");
    return value.toString();
  }

  set vault(value: string) {
    this.set("vault", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get yieldEarned(): BigInt {
    let value = this.get("yieldEarned");
    return value.toBigInt();
  }

  set yieldEarned(value: BigInt) {
    this.set("yieldEarned", Value.fromBigInt(value));
  }

  get isWithdraw(): boolean {
    let value = this.get("isWithdraw");
    return value.toBoolean();
  }

  set isWithdraw(value: boolean) {
    this.set("isWithdraw", Value.fromBoolean(value));
  }

  get stakedBalance(): BigInt {
    let value = this.get("stakedBalance");
    return value.toBigInt();
  }

  set stakedBalance(value: BigInt) {
    this.set("stakedBalance", Value.fromBigInt(value));
  }
}

export class ERC20Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ERC20Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ERC20Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ERC20Token", id.toString(), this);
  }

  static load(id: string): ERC20Token | null {
    return store.get("ERC20Token", id) as ERC20Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get numHolders(): i32 {
    let value = this.get("numHolders");
    return value.toI32();
  }

  set numHolders(value: i32) {
    this.set("numHolders", Value.fromI32(value));
  }

  get holders(): Array<Bytes> {
    let value = this.get("holders");
    return value.toBytesArray();
  }

  set holders(value: Array<Bytes>) {
    this.set("holders", Value.fromBytesArray(value));
  }

  get tokenAccounts(): Array<string> {
    let value = this.get("tokenAccounts");
    return value.toStringArray();
  }

  set tokenAccounts(value: Array<string>) {
    this.set("tokenAccounts", Value.fromStringArray(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }
}

export class ERC20TokenAccount extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ERC20TokenAccount entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ERC20TokenAccount entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ERC20TokenAccount", id.toString(), this);
  }

  static load(id: string): ERC20TokenAccount | null {
    return store.get("ERC20TokenAccount", id) as ERC20TokenAccount | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }
}
