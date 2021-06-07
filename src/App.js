import './App.css';
//import Navbar from './components/Navbar';
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import AddDoctor from './pages/AddDoctor';
import EditDoctor from './pages/EditDoctor';
import Appointments from './pages/Appointments';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (<>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/doctor/" component={Doctor}/>
    <Route exact path="/doctor/add-doctor/" component={AddDoctor} />
    <Route exact path="/doctor/edit-doctor/" component={EditDoctor} />
    <Route exact path="/doctor/appointments/" component={Appointments} />
    </Switch>
    </>
  );
}

export default App;