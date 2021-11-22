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

export class Auction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Auction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Auction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Auction", id.toString(), this);
  }

  static load(id: string): Auction | null {
    return store.get("Auction", id) as Auction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get auctionToken(): Bytes {
    let value = this.get("auctionToken");
    return value.toBytes();
  }

  set auctionToken(value: Bytes) {
    this.set("auctionToken", Value.fromBytes(value));
  }

  get biddingToken(): Bytes {
    let value = this.get("biddingToken");
    return value.toBytes();
  }

  set biddingToken(value: Bytes) {
    this.set("biddingToken", Value.fromBytes(value));
  }

  get orderCancellationEndDate(): BigInt {
    let value = this.get("orderCancellationEndDate");
    return value.toBigInt();
  }

  set orderCancellationEndDate(value: BigInt) {
    this.set("orderCancellationEndDate", Value.fromBigInt(value));
  }

  get auctionEndDate(): BigInt {
    let value = this.get("auctionEndDate");
    return value.toBigInt();
  }

  set auctionEndDate(value: BigInt) {
    this.set("auctionEndDate", Value.fromBigInt(value));
  }

  get auctionedSellAmount(): BigInt {
    let value = this.get("auctionedSellAmount");
    return value.toBigInt();
  }

  set auctionedSellAmount(value: BigInt) {
    this.set("auctionedSellAmount", Value.fromBigInt(value));
  }

  get vault(): string {
    let value = this.get("vault");
    return value.toString();
  }

  set vault(value: string) {
    this.set("vault", Value.fromString(value));
  }

  get orderCounter(): i32 {
    let value = this.get("orderCounter");
    return value.toI32();
  }

  set orderCounter(value: i32) {
    this.set("orderCounter", Value.fromI32(value));
  }

  get sellOrders(): Array<string> {
    let value = this.get("sellOrders");
    return value.toStringArray();
  }

  set sellOrders(value: Array<string>) {
    this.set("sellOrders", Value.fromStringArray(value));
  }
}

export class AuctionSellOrder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AuctionSellOrder entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AuctionSellOrder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AuctionSellOrder", id.toString(), this);
  }

  static load(id: string): AuctionSellOrder | null {
    return store.get("AuctionSellOrder", id) as AuctionSellOrder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get auction(): string {
    let value = this.get("auction");
    return value.toString();
  }

  set auction(value: string) {
    this.set("auction", Value.fromString(value));
  }

  get buyAmount(): BigInt {
    let value = this.get("buyAmount");
    return value.toBigInt();
  }

  set buyAmount(value: BigInt) {
    this.set("buyAmount", Value.fromBigInt(value));
  }

  get sellAmount(): BigInt {
    let value = this.get("sellAmount");
    return value.toBigInt();
  }

  set sellAmount(value: BigInt) {
    this.set("sellAmount", Value.fromBigInt(value));
  }

  get bidderAddress(): Bytes {
    let value = this.get("bidderAddress");
    return value.toBytes();
  }

  set bidderAddress(value: Bytes) {
    this.set("bidderAddress", Value.fromBytes(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }
}
