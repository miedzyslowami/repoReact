import React from 'react';
import ReactDOM from 'react-dom';
import ButtonDatePicker from './ButtonDatePicker.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
    render() {
        return (<div style={{display:"grid",width:"100vw",height:"100vh", justifyItems: "center",aligItems:"center"}}>
            <div style={{alignSelf: "center"}}>
            <MuiThemeProvider >
                <ButtonDatePicker/>
            </MuiThemeProvider>
            </div>
          </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
