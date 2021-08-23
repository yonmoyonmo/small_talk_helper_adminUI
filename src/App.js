import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./login/Login";
import AdminHome from "./sugguestion/AdminHome";
import NotFound from "./NotFound";
import useToken from "./useToken"

function App() {
  const { token, setToken } = useToken();

  if(!token){
    return <Login setToken={setToken}/>
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={AdminHome}></Route>\
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

//투두리스트
//관리자 여원모의 로그인 화면
//대화 주제 전부를 보여주는 리스트 : 타입 별로 관리 가능하게
//대화 주제 CRUD
