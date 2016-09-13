import React from "react"
import { render } from "react-dom"
import ReactComponent from "../../source/_patterns/react-utils/component";
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
import Modal from "../../source/_patterns/01-molecules/modal/modal"
import Chart from "../../source/_patterns/01-molecules/chart/chart"
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
                <Notification header="Notification" visible={this.state.visible} content="Something happened that requires your attention" type={this.state.type} duration={2000} />
                <Btn text="Info" onClickMethod={() => {this.setState({visible: true, type: 'info'})}}/>
                <Btn text="Danger" onClickMethod={() => {this.setState({visible: true, type: 'danger'})}}/>
                <Btn text="Warning" onClickMethod={() => {this.setState({visible: true, type: 'warning'})}}/>
                <Btn text="Success" onClickMethod={() => {this.setState({visible: true, type: 'success'})}}/>
            </div>
        );
    }
}

class ModalLauncher extends ReactComponent {
    getInitState() {
        return {
            visible: false,
            type: 'info'
        }
    }

    handleClick() {
        this.setState({visible: true});
    }

    render() {
        return (
            <div>
                <Modal size="xlarge" headerText="Well hello there" onSearch={(e) => console.log(e)} visible={this.state.visible}
                    onSave={(e) => console.log(e)} hintText="The blue button can be pressed" linkText="Link" linkLocation="#"
                >
                    <h3>Big header</h3>
                    <p>Allowing children to be here makes this element very customizable.</p>
                </Modal>

                <button onClick={::this.handleClick}>Launch modal</button>
            </div>
        );
    }
}

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
            <Tooltip label="Hello world" positioning="left" >
                <button >Click me :)</button>
            </Tooltip>
        </div>

        <div style={{marginLeft: 400}}>
            <PopOver header="Hello world" content="Microsoft sometimes uses additional decimal sub-codes to provide more specific information." positioning="top" >
                <button>Click me :)</button>
            </PopOver>
        </div>

        <Table tableData={[
            { cols: ['Left', 'Right', 'Middle'] },
            { rows: { 0: ['1', '1', '2'], 1: ['class-names:table-success', '2', '1', '3'], 2: ['1', '2', '3'], 3: ['99%', '5%', '0.01%'] } }
        ]} />
        <Test/>

        <ModalLauncher/>

        <Chart config={{
            chart: {
                type: 'arearange',
                zoomType: 'x'
            },

            title: {
                text: 'Temperature variation by day'
            },

            xAxis: {
                type: 'datetime'
            },

            yAxis: {
                title: {
                    text: null
                }
            },

            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: '°C'
            },

            legend: {
                enabled: false
            },

            series: [{
                name: 'Temperatures',
                data: [[1388538000000, 1.1, 4.7],
                    [1388624400000, 1.8, 6.4],
                    [1388710800000, 1.7, 6.9],
                    [1388797200000, 2.6, 7.4],
                    [1388883600000, 3.3, 9.3],
                    [1388970000000, 3.0, 7.9],
                    [1389056400000, 3.9, 6.0],
                    [1389142800000, 3.9, 5.5],
                    [1389229200000, -0.6, 4.5],
                    [1389315600000, -0.5, 5.3],
                    [1389402000000, -0.3, 2.4],
                    [1389488400000, -6.5, -0.4],
                    [1389574800000, -7.3, -3.4],
                    [1389661200000, -7.3, -2.3],
                    [1389747600000, -7.9, -4.2],
                    [1389834000000, -4.7, 0.9],
                    [1389920400000, -1.2, 0.4],
                    [1390006800000, -2.3, -0.1],
                    [1390093200000, -2.0, 0.3],
                    [1390179600000, -5.1, -2.0],
                    [1390266000000, -4.4, -0.5],
                    [1390352400000, -6.4, -2.7],
                    [1390438800000, -3.2, -0.5],
                    [1390525200000, -5.5, -0.8],
                    [1390611600000, -4.4, 2.4],
                    [1390698000000, -4.0, 1.1],
                    [1390784400000, -3.4, 0.8],
                    [1390870800000, -1.7, 2.6],
                    [1390957200000, -3.1, 3.9],
                    [1391043600000, -4.8, -1.9],
                    [1391130000000, -7.0, -2.8],]
            }]
        }}/>
    </div>
);



render(testComponents, document.getElementById("component"));
