import { Chain } from '../../constants'

export const Avalanche: Chain = {
  chainId: 43113,
  chainName: 'Avalanche',
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0x3D015943d2780fE97FE3f69C97edA2CCC094f78c',
  getExplorerAddressLink: (address: string) => `https://test.snowtrace.io/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://test.snowtrace.io/tx/${transactionHash}`,
}

export default { Avalanche }
