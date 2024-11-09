import {OurAppBar} from "../features/appbar/components/OurAppBar";
import {BottomSheet} from "../features/bootomsheet/component/BottomSheet";
import MenuDrawer from "../features/menudrawer/component/MenuDrawer";
import {MenuState} from "../features/menudrawer/context/MenuDrawerContext";
import {useUserLocation} from "../common/hook/LocationHook";
import {Bucket} from "../features/bucket/component/Bucket";
import {Map} from "@vis.gl/react-google-maps";
import {OurMap} from "../features/map/component/OurMap";
import {APIProvider} from '@vis.gl/react-google-maps';


export const MainPage = () => {

  return (
      <div className="page">



          <APIProvider apiKey={"AIzaSyBFRpk4UEYiH-alS9FP580nAiTsR6Amx2U"}>
            <OurMap></OurMap>
          </APIProvider>

          <MenuDrawer></MenuDrawer>


          <BottomSheet></BottomSheet>

      </div>

  );
}