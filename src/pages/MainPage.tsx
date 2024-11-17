import {BottomSheet} from "../features/bootomsheet/component/BottomSheet";
import MenuDrawer from "../features/menudrawer/component/MenuDrawer";
import {APIProvider} from "@vis.gl/react-google-maps";
import {OurMap} from "../features/map/component/OurMap";


export const MainPage = () => {

  return (
      <div className="page">


        <APIProvider apiKey={"AIzaSyBFRpk4UEYiH-alS9FP580nAiTsR6Amx2U"}>
          <OurMap></OurMap>
        </APIProvider>


        <BottomSheet></BottomSheet>

      </div>

  );
}