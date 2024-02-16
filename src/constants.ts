import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'
import { PublicKey } from '@solana/web3.js'

// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://mainnet.helius-rpc.com/?api-key=1db05468-e227-45cf-bd9f-cea0534b1f18"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = new PublicKey('594WGMyY5TSqPQnGjHHMqoSYYSrtbSFYL3NuXUp8qzkQ')

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'v2-play.gamba.so'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
   {
     mint: new PublicKey("6QsLcMf558wAbGWHYeNFWWkGXj7W5AYuBxtrHvAeyLxS"),
    symbol: 'MIB',
    name: 'Magic Internet Bets',
    image: "https://i.ibb.co/HrLzc08/logo-30.png",
    decimals: 9,
    baseWager: 1 * 1e6,
   }
]
