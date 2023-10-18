var p = Object.defineProperty;
var o = (e, r, t) =>
  r in e
    ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (e[r] = t);
var n = (e, r, t) => (o(e, typeof r != "symbol" ? r + "" : r, t), t);
import { as as u, z as c } from "./index-c70ad044.js";
class l {
  constructor(r, t, a) {
    n(
      this,
      "transfer",
      c(
        (() => {
          var r = this;
          return async function (t, a, s) {
            let i =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : [0];
            return r.erc1155.transfer.prepare(t, a, s, i);
          };
        })(),
      ),
    );
    n(
      this,
      "setApprovalForAll",
      c(async (r, t) => this.erc1155.setApprovalForAll.prepare(r, t)),
    );
    n(
      this,
      "airdrop",
      c(
        (() => {
          var r = this;
          return async function (t, a) {
            let s =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : [0];
            return r.erc1155.airdrop.prepare(t, a, s);
          };
        })(),
      ),
    );
    (this.contractWrapper = r),
      (this.storage = t),
      (this.erc1155 = new u(this.contractWrapper, this.storage, a)),
      (this._chainId = a);
  }
  get chainId() {
    return this._chainId;
  }
  onNetworkUpdated(r) {
    this.contractWrapper.updateSignerOrProvider(r);
  }
  getAddress() {
    return this.contractWrapper.readContract.address;
  }
  async get(r) {
    return this.erc1155.get(r);
  }
  async totalSupply(r) {
    return this.erc1155.totalSupply(r);
  }
  async balanceOf(r, t) {
    return this.erc1155.balanceOf(r, t);
  }
  async balance(r) {
    return this.erc1155.balance(r);
  }
  async isApproved(r, t) {
    return this.erc1155.isApproved(r, t);
  }
}
export { l as S };
