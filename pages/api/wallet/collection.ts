// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';


type Data = {
  name: string
}

(async function () {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
});
})();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try{
      const {wallet,chain} =req.query;
      console.log(chain)
      const response = await Moralis.EvmApi.nft.getWalletNFTCollections({
        address: wallet,
        chain: EvmChain[chain.toUpperCase()],
      })
      // console.log(response.toJSON())
      return res.status(200).json(response)
      }catch(err){
        console.error(err.message);

      }
  
}

export const config = {
    api: {
      externalResolver: true,
    },
  }
