
import { Switch, Route } from "react-router-dom";
import HomeRouter from "./home"
import { useRecoilValue } from "recoil";
import { auth } from "../recoils/index"


export const RouterIndex = () => {

  const isAuthenticate = useRecoilValue(auth)

  return (
    <Switch>
      <Route path="/">
        <HomeRouter authenticate={isAuthenticate}></HomeRouter>
      </Route>
      
    </Switch>
  )
}