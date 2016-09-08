import React from "react"
import { render } from "react-dom"
import ReactComponent from "../../source/_patterns/reactComponent";
import Alert from "../../source/_patterns/01-molecules/alert/alert"
import Jumbotron from "../../source/_patterns/01-molecules/jumbotron/jumbotron"
import ProgressTrackerStep from "../../source/_patterns/00-atoms/progress-tracker-step/progress-tracker-step"
import ProgressTracker from "../../source/_patterns/01-molecules/progress-tracker/progress-tracker"
import ProgressBar from "../../source/_patterns/01-molecules/progress-bar/progress-bar"
import SelectMenu from "../../source/_patterns/00-atoms/forms/select-menu"
import TextArea from "../../source/_patterns/00-atoms/forms/text-area"
import TextField from "../../source/_patterns/00-atoms/forms/text-field"
import Table from "../../source/_patterns/00-atoms/table/table"
import CheckBox from "../../source/_patterns/00-atoms/forms/checkbox"
import Breadcrumb from "../../source/_patterns/01-molecules/breadcrumb/breadcrumb"
import Search from "../../source/_patterns/01-molecules/forms/search"
import InputGroup from "../../source/_patterns/01-molecules/input-group/input-group"
import ListGroup from "../../source/_patterns/01-molecules/list-group/list-group"
import Media from "../../source/_patterns/01-molecules/media/media"
import Nav from "../../source/_patterns/01-molecules/navs/nav"
import Tooltip from "../../source/_patterns/01-molecules/tooltip/tooltip"
import PopOver from "../../source/_patterns/01-molecules/popover/popover"
import Notification from "../../source/_patterns/01-molecules/notification/notification"
import Btn from "../../source/_patterns/00-atoms/button/button"

class Test extends ReactComponent {
    getInitState() {
        return {
            visible: false,
            type: 'info'
        }
    }

    render() {
        return (
            <div>
                <Notification header="Core meltdown imminent" visible={this.state.visible} content="" type={this.state.type} duration="fast"/>
                <Btn text="Info" onClickMethod={() => {this.setState({visible: true, type: 'info'})}}/>
                <Btn text="Danger" onClickMethod={() => {this.setState({visible: true, type: 'danger'})}}/>
                <Btn text="Warning" onClickMethod={() => {this.setState({visible: true, type: 'warning'})}}/>
                <Btn text="Success" onClickMethod={() => {this.setState({visible: true, type: 'success'})}}/>
            </div>
        );
    }
};

const testComponents = (
    <div>
        <Alert classNames="test test2" type="danger" text="This is an alert!" />
        <Jumbotron classNames="test test2">
            <h2>Jumbo</h2>
            <p>I am a jumbotron</p>
        </Jumbotron>
        <ProgressTracker>
            <ProgressTrackerStep active />
            <ProgressTrackerStep />
        </ProgressTracker>
        <ProgressBar value="25" maxValue="100" minWidth="50" text="Hello World" type="danger"/>
        <SelectMenu id="myID" label="sElect" options={[1,2,3,4]} onChangeFunction={(e) => console.log(e.target.value)}/>
        <TextArea placeholder="textarea" onChangeFunction={(e) => console.log(e.target.value)}/>
        <TextField id="custom-text-field" onChangeFunction={(e) => console.log(e.target.value)}/>
        <Table tableData={[
            { cols: ['Left', 'Right'] },
            { rows: { 0: ['25%', '75%'], 1: ['class-names:table-success', '50%', '50%'], 2: ['66%', '33%'] } }
            ]} tableHeadClassNames="thead-inverse"
        />
        <CheckBox text="select me" onFilterSelect={(e, t) => console.log(t)}/>
        <Breadcrumb crumbNames={['Home', 'Archives', '1984']} crumbLocations={['/home', '/home/archives', '']} />
        <Search placeholder="Please search" prompt="Thank you for choosing <Form />" />
        <InputGroup addon={<input type="checkbox" />} input={<input type="text" />} addonPosition="right"/>
        <ListGroup listItems={{disabled: 'Im disabled',
            0: <div>Lines of code<span className="tag tag-default tag-pill pull-xs-right">666</span></div>,
            1: 'Im normal',
            'list-group-item-danger': '9001 errors were found in your code. Fix now?'
        }}/>
        <Media mediaObject={<img alt="64x64" src='data:image/svg+xml;charset=UTF-8,<svg%20width%3D"64"%20height%3D"64"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%2064%2064"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_156eacdb81d%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_156eacdb81d"><rect%20width%3D"64"%20height%3D"64"%20fill%3D"%23777"><%2Frect><g><text%20x%3D"14.2734375"%20y%3D"36.3640625">64x64<%2Ftext><%2Fg><%2Fg><%2Fsvg>'/>}
            mediaBody="Neat image to the left"
               mediaBodyHeader="Neat"
        />
        <Nav listItems={{'Dashboard': ['#', '', 'the-class']}} />
        <div style={{width: 100 + '%', textAlign: 'center'}}>
            <Tooltip label="Hello world" positioning="right" >
                <button >Click me :)</button>
            </Tooltip>
        </div>
        <PopOver header="Hello world" content="Hello and welcome!" positioning="top" >
            <button >Click me :)</button>
        </PopOver>
        <Table tableData={[
            { cols: ['Left', 'Right'] },
            { rows: { 0: ['1', '1'], 1: ['class-names:table-success', '2', '1'] } }
        ]} tableHeadClassNames="thead-inverse"
        />
        <Test/>
    </div>
);



render(testComponents, document.getElementById("component"));
