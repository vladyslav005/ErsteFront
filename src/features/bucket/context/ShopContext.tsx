import React, {createContext, Dispatch, useState} from 'react';
import {BucketInterface} from "../component/BucketList";


interface ShopContextInterface {

}


export const ShopContext = createContext<ShopContextInterface>({

})

interface ShopProviderProps {
  children: React.ReactNode;
}

export const ShopsState = (props: ShopProviderProps) => {
  const [bucketList, setBucketList] = useState<BucketInterface[]>([
    {
      name: "Example Bucket",
      products: ["Product 1", "Product 2"],
    }
  ])

  const contextValue: ShopContextInterface = {


  };

  return (
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
  );

}
