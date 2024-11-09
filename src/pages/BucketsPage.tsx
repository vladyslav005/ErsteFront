import {Bucket} from "../features/bucket/component/Bucket";
import {OurMap} from "../features/map/component/OurMap";
import MenuDrawer from "../features/menudrawer/component/MenuDrawer";
import {BottomSheet} from "../features/bootomsheet/component/BottomSheet";
import {BucketList} from "../features/bucket/component/BucketList";

export const BucketsPage = () => {

  return (

      <div className="page">
        {/*<Bucket></Bucket>*/}
        {/*<BasketsContainer></BasketsContainer>*/}

        <BucketList></BucketList>

        {/*<Bucket></Bucket>*/}
      </div>

)
  ;

}