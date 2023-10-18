import { at as a, K as r } from "./index-c70ad044.js";
const h = "https://paper.xyz/api",
  u = "2022-08-12",
  o = `${h}/${u}/platform/thirdweb`,
  s = {
    [a.Mainnet]: "Ethereum",
    [a.Goerli]: "Goerli",
    [a.Polygon]: "Polygon",
    [a.Mumbai]: "Mumbai",
    [a.Avalanche]: "Avalanche",
  };
function d(e) {
  return r(e in s, `chainId not supported by paper: ${e}`), s[e];
}
async function p(e, t) {
  const i = d(t),
    c = await (
      await fetch(`${o}/register-contract?contractAddress=${e}&chain=${i}`)
    ).json();
  return r(c.result.id, "Contract is not registered with paper"), c.result.id;
}
const l = {
  expiresInMinutes: 15,
  feeBearer: "BUYER",
  sendEmailOnSuccess: !0,
  redirectAfterPayment: !1,
};
async function P(e, t) {
  const n = await (
    await fetch(`${o}/checkout-link-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contractId: e,
        ...l,
        ...t,
        metadata: { ...t.metadata, via_platform: "thirdweb" },
        hideNativeMint: !0,
        hidePaperWallet: !!t.walletAddress,
        hideExternalWallet: !0,
        hidePayWithCrypto: !0,
        usePaperKey: !1,
      }),
    })
  ).json();
  return (
    r(n.checkoutLinkIntentUrl, "Failed to create checkout link intent"),
    n.checkoutLinkIntentUrl
  );
}
class y {
  constructor(t) {
    this.contractWrapper = t;
  }
  async getCheckoutId() {
    return p(
      this.contractWrapper.readContract.address,
      await this.contractWrapper.getChainID(),
    );
  }
  async isEnabled() {
    try {
      return !!(await this.getCheckoutId());
    } catch {
      return !1;
    }
  }
  async createLinkIntent(t) {
    return await P(await this.getCheckoutId(), t);
  }
}
export { y as P };
