import React, {createContext, Dispatch, useState} from 'react';
import {BucketInterface} from "../component/BucketList";


interface BucketContextInterface {
  bucketList : BucketInterface[],
  setBucketList : (bucketList : BucketInterface[]) => void,
}


export const BucketContext = createContext<BucketContextInterface>({
  bucketList: [{
    name: "Example Bucket",
    products: ["Product 1", "Product 2"],
  }],

  setBucketList : (bucketList : BucketInterface[]) => {},

})

interface BucketProviderProps {
  children: React.ReactNode;
}

export const BucketsState = (props: BucketProviderProps) => {
  const [bucketList, setBucketList] = useState<BucketInterface[]>([
    {
      name: "Example Bucket",
      products: ["Product 1", "Product 2"],
    }
  ])

  const contextValue: BucketContextInterface = {
    bucketList,
    setBucketList
  };

  return (
      <BucketContext.Provider value={contextValue}>
          {props.children}
      </BucketContext.Provider>
  );

}
