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
import { Login } from './app/pages';

 const store = configureStore();
//  console.log(store);
 store.subscribe( res => {
    //  console.log(store.getState());
 });

class App extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );
        
    }
}
ReactDOM.render(<App />, document.getElementById('root'));