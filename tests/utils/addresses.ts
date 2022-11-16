import {
  ROUTER_ADDRESS as MAINNET_ROUTER_ADDRESS,
  PERMIT2_ADDRESS as MAINNET_PERMIT2_ADDRESS,
} from '../../src/utils/constants'

export const PERMIT2_ADDRESS =
  process.env.USE_MAINNET_DEPLOYMENT === 'true' ? MAINNET_PERMIT2_ADDRESS : '0x4a873bdd49f7f9cc0a5458416a12973fab208f8d'
// Universal Router address in tests
export const ROUTER_ADDRESS =
  process.env.USE_MAINNET_DEPLOYMENT === 'true' ? MAINNET_ROUTER_ADDRESS : '0xe808c1cfeebb6cb36b537b82fa7c9eef31415a05'
