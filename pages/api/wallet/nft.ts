// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// import fetch from 'node-fetch';

type Data = {
  name: string
}

const baseURL = 'https://deep-index.moralis.io/api/v2';
const options = {method: 'GET', headers: {Accept: 'application/json', 'X-API-Key': 'test'}};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try{
        const {wallet,chain} =req.query;
    // console.log(req.query);
        const resp = await fetch(`${baseURL}/${wallet}/nft/collections?chain=${chain}`, options)
      const jsonResponse = await resp.json();
      console.log("🚀 ~ file: NftSdk.ts ~ line 27 ~ NftSDK ~ getWalletNFTs ~ jsonResponse", jsonResponse)
    //   return jsonResponse;
      return res.status(200).json(jsonResponse)
      }catch(err){
        console.error(err.message);
      }
  
}

export const config = {
    api: {
      externalResolver: true,
    },
  }
