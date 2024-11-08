import {OurAppBar} from "../features/appbar/components/OurAppBar";
import {BottomSheet} from "../features/bootomsheet/component/BottomSheet";
import MenuDrawer from "../features/menudrawer/component/MenuDrawer";
import {MenuState} from "../features/menudrawer/context/MenuDrawerContext";


export const MainPage = () => {


  return (
      <div className="page">
        <MenuState>
          <OurAppBar></OurAppBar>

          {/*<APIProvider apiKey={"AIzaSyBFRpk4UEYiH-alS9FP580nAiTsR6Amx2U"}>*/}
          {/*  /!*<OurMap></OurMap>*!/*/}
          {/*</APIProvider>*/}

          <MenuDrawer></MenuDrawer>


          <BottomSheet></BottomSheet>

        </MenuState>
      </div>

  );
}