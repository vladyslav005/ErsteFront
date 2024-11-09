import {OurAppBar} from "../features/appbar/components/OurAppBar";
import {BottomSheet} from "../features/bootomsheet/component/BottomSheet";
import MenuDrawer from "../features/menudrawer/component/MenuDrawer";
import {MenuState} from "../features/menudrawer/context/MenuDrawerContext";
import {useUserLocation} from "../common/hook/LocationHook";


export const MainPage = () => {




  return (
      <div className="page">
        <MenuState>
          <OurAppBar></OurAppBar>


          {/*<a onClick={() => {*/}
          {/*  requestLocation()*/}

          {/*  console.log(location)}}*/}
          {/*>*/}
          {/*  frgtgrgrgrg*/}
          {/*</a>*/}

          {/*<APIProvider apiKey={"AIzaSyBFRpk4UEYiH-alS9FP580nAiTsR6Amx2U"}>*/}
          {/*  /!*<OurMap></OurMap>*!/*/}
          {/*</APIProvider>*/}

          <MenuDrawer></MenuDrawer>


          <BottomSheet></BottomSheet>

        </MenuState>
      </div>

  );
}