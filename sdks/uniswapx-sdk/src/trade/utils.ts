import { ChainId, Currency } from "@nizaglobal/sdk-core";
import { constants } from "ethers";

export enum NativeAssets {
  MATIC = "MATIC",
  BNB = "BNB",
  AVAX = "AVAX",
  ETH = "ETH",
  NIZA = "NIZA",
}

function nativeCurrencyAddressString(chainId: number): string {
  switch (chainId) {
    case ChainId.POLYGON:
      return NativeAssets.MATIC;
    case ChainId.BNB:
      return NativeAssets.BNB;
    case ChainId.AVALANCHE:
      return NativeAssets.AVAX;
    case ChainId.NIZA:
      return NativeAssets.NIZA;
    default:
      return NativeAssets.ETH;
  }
}

export function areCurrenciesEqual(
  currency: Currency,
  address: string | null,
  chainId: number
) {
  if (currency.chainId !== chainId) return false;

  if (currency.isNative) {
    return (
      address === constants.AddressZero ||
      address === nativeCurrencyAddressString(chainId)
    );
  }

  return currency.address.toLowerCase() === address?.toLowerCase();
}
