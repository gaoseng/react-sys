 import React, {Component} from 'react';
 import ReactDOM from 'react-dom';
 import { Provider } from 'react-redux';
//  import 'antd/dist/antd.less';
// import DatePicker from 'antd/lib/date-picker';  // 加载 JS
// import 'antd/lib/date-picker/style/css';        // 加载 CSS
// import 'antd/lib/date-picker/style';         // 加载 LESS
import './styles/base.less';


 import AppRouter from './routers/index';
import configureStore from './middleware/configureStore';

 const store = configureStore();
 store.subscribe( res => {
    //  console.log(store.getState());
 });

class App extends Component {
    render() {
        return (
            <div>1223</div>
        );
    }
}
ReactDOM.render((
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
    
  ), document.getElementById('root'));



// ReactDOM.render(<App />, document.getElementById('root'));