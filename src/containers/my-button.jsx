import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import ButtonComponent from '../components/button/button.jsx';
import MenuBarStyles from '../components/menu-bar/menu-bar.css';

var W3CWebSocket = require('websocket').w3cwebsocket;

var modal = null;
var ChartData = null;
var Sensors = [];
var numberOfSensors = 16;
var numberOfDataHistory = 10;
var nameOfSensors = ["ACC_X", "ACC_Y", "ACC_Z", "ACC_AVG",
                    "MAG_X", "MAG_Y", "MAG_Z", "TEMP",
                    "GYRO_X", "GYRO_Y", "GYRO_Z", "LUX",
                    "BTN_1", "BTN_2", "BARO", "ALT"];

var min_raw_number = 2; // 최소한 2는 되야함.
var max_raw_nunmber = 5; // 표시하는 최대 센서의 개수.
var client; // websocket client
var tmp2 = [37.8,30.9,25.4,11.7,11.9,8.8,7.6,12.3,16.9,12.8];

var sensor_data = null;

function Queue() {
    this.dataStore = [];

    this.enqueue = function(element) {
        if (this.dataStore.length >= 10) {
            while (this.dataStore.length > 9) {
                this.dequeue();
            }
        }

        this.dataStore.push(element);
    };

    this.dequeue = function() {
        return this.dataStore.shift();
    };

    this.empty = function() {
        if(this.dataStore.length == 0) {
            return true;
        } else {
            return false;
        }
    };
}

function Sensor(sensorName) {
    this.name = sensorName;
    this.dataQueue = new Queue();
    this.isCheckBoxActive = false;
}

function Charts() {
    this.sensorName = [''];
    this.sensorData = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]];
    this.length = 1;

    this.build = function(Sensors) {
        for(var i = 0; i < 16; i++) {
            if (Sensors[i].isCheckBoxActive == true) {
                this.sensorName[this.length] = Sensors[i].name;

                for (var j = 0; j < 10; j++) {
                    this.sensorData[j][this.length] = Sensors[i].dataQueue.dataStore[j];
                }

                this.length++;
            }
        }
    };
}


function initSensors(Sensors) {
    var tmp = [];

    for (var i = 0; i < numberOfDataHistory; i++) {
        tmp[i] = 0;
    }

    for (var i = 0; i < numberOfSensors; i++) {
        Sensors[i] = new Sensor();
        Sensors[i].name = nameOfSensors[i];

        for (var j = 0; j < numberOfDataHistory; j++) {
            Sensors[i].dataQueue.enqueue(tmp[j]);
        }
    }

    Sensors[0].isCheckBoxActive = true;
}

function drawChart() {
    var data = new google.visualization.DataTable();

    ChartData = new Charts();
    ChartData.build(Sensors);

    for (var i = 0; i < ChartData.length; i++) {
        data.addColumn('number', ChartData.sensorName[i]);
    }

    data.addRows(ChartData.sensorData);

    var options = {
    chart: {
        title: 'Sensor Data',
        subtitle: ''
    },
        width: 450,
        height: 250
    };

    var chart = new google.charts.Line(document.getElementById('chart_div'));
    chart.draw(data, google.charts.Line.convertOptions(options));
}

function showChart() {
    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);
}

function controlCheckBox(checkBox, id) {
    if (checkBox.checked == true) {
        if (ChartData.length >= min_raw_number && ChartData.length < (max_raw_nunmber + 1)) {
            Sensors[id].isCheckBoxActive = true;
        } else {
            checkBox.checked = false;
        }
    } else {
        if (ChartData.length > min_raw_number && ChartData.length <= (max_raw_nunmber + 1)) {
            Sensors[id].isCheckBoxActive = false;
        }  else {
            checkBox.checked = true;
        }
    }
}

window.onclick = function(event) {
    var span = document.getElementsByClassName(MenuBarStyles.close)[0];
    var spanChart = document.getElementsByClassName(MenuBarStyles.closechart)[0];
    var openChartBtn = document.getElementById('openChartBtn');
    var chartModal = document.getElementById('chartModal');

    //////////////////// Group 1 ///////////////////////
    var cb_ACC_X = document.getElementById('ACC_X');
    var cb_ACC_Y = document.getElementById('ACC_Y');
    var cb_ACC_Z = document.getElementById('ACC_Z');
    var cb_ACC_AVG = document.getElementById('ACC_AVG');
     //////////////////// Group 2 ///////////////////////
    var cb_MAG_X = document.getElementById('MAG_X');
    var cb_MAG_Y = document.getElementById('MAG_Y');
    var cb_MAG_Z = document.getElementById('MAG_Z');
    var cb_TEMP = document.getElementById('TEMP');
    //////////////////// Group 3 ///////////////////////
    var cb_GYRO_X = document.getElementById('GYRO_X');
    var cb_GYRO_Y = document.getElementById('GYRO_Y');
    var cb_GYRO_Z = document.getElementById('GYRO_Z');
    var cb_LUX = document.getElementById('LUX');
    //////////////////// Group 4 ///////////////////////
    var cb_BTN_1 = document.getElementById('BTN_1');
    var cb_BTN_2 = document.getElementById('BTN_2');
    var cb_BARO = document.getElementById('BARO');
    var cb_ALT = document.getElementById('ALT');

    //////////////////////  ysm
//    for (var i = 0; i < 10; i++) {
//        Sensors[1].dataQueue.enqueue(tmp2[i]);
//    }

//    Sensors[1].dataQueue.enqueue(60);
//    /////////////////////

    span.onclick = function() {
        chartModal.style.display = "none";
        modal.style.display = "none";

        cb_ACC_X.checked = false;
        cb_ACC_Y.checked = false;
        cb_ACC_Z.checked = false;
        cb_ACC_AVG.checked = false;

        cb_MAG_X.checked = false;
        cb_MAG_Y.checked = false;
        cb_MAG_Z.checked = false;
        cb_TEMP.checked = false;

        cb_GYRO_X.checked = false;
        cb_GYRO_Y.checked = false;
        cb_GYRO_Z.checked = false;
        cb_LUX.checked = false;

        cb_BTN_1.checked = false;
        cb_BTN_2.checked = false;
        cb_BARO.checked = false;
        cb_ALT.checked = false;
    }

    spanChart.onclick = function() {
        chartModal.style.display = "none";
    }

    openChartBtn.onclick = function() {
        showChart();
        chartModal.style.display = "block";
    }

    connectIpopBtn.onclick = function() {

        if (client.readyState === client.OPEN) {
      //    var number = Math.round(Math.random() * 0xFFFFFF);
      //    client.send(number.toString());
      //    setTimeout(sendNumber, 1000);

            client.send("$discover_ipopcon")

        }

        else
          alert("소켓 연결이 되지 않았습니다.");

    }

    //////////////////// Group 1 ///////////////////////
    cb_ACC_X.onclick = function() {
        controlCheckBox(cb_ACC_X, 0);
        showChart();
    }
    cb_ACC_Y.onclick = function() {
        controlCheckBox(cb_ACC_Y, 1);
        showChart();
    }
    cb_ACC_Z.onclick = function() {
        controlCheckBox(cb_ACC_Z, 2);
        showChart();
    }
    cb_ACC_AVG.onclick = function() {
        controlCheckBox(cb_ACC_AVG, 3);
        showChart();
    }
    //////////////////// Group 2 ///////////////////////
    cb_MAG_X.onclick = function() {
        controlCheckBox(cb_MAG_X, 4);
        showChart();
    }

    cb_MAG_Y.onclick = function() {
        controlCheckBox(cb_MAG_Y, 5);
        showChart();
    }

    cb_MAG_Z.onclick = function() {
        controlCheckBox(cb_MAG_Z, 6);
        showChart();
    }

    cb_TEMP.onclick = function() {
        controlCheckBox(cb_TEMP, 7);
        showChart();
    }

    //////////////////// Group 3 ///////////////////////
    cb_GYRO_X.onclick = function() {
        controlCheckBox(cb_GYRO_X, 8);
        showChart();
    }

    cb_GYRO_Y.onclick = function() {
        controlCheckBox(cb_GYRO_Y, 9);
        showChart();
    }

    cb_GYRO_Z.onclick = function() {
        controlCheckBox(cb_GYRO_Z, 10);
        showChart();
    }

    cb_LUX.onclick = function() {
        controlCheckBox(cb_LUX, 11);
        showChart();
    }

    //////////////////// Group 4 ///////////////////////
    cb_BTN_1.onclick = function() {
        controlCheckBox(cb_BTN_1, 12);
        showChart();
    }

    cb_BTN_2.onclick = function() {
        controlCheckBox(cb_BTN_2, 13);
        showChart();
    }

    cb_BARO.onclick = function() {
        controlCheckBox(cb_BARO, 14);
        showChart();
    }

    cb_ALT.onclick = function() {
        controlCheckBox(cb_ALT, 15);
        showChart();
    }
}


class MyButton extends React.Component {



    constructor (props) {
        super(props);
        bindAll(this, [
            'handleClick'
        ]);

    }



    componentWillMount () {
      const script = document.createElement("script");

      script.src = "https://www.gstatic.com/charts/loader.js";
      script.async = true;

      document.body.appendChild(script);
    }


    handleClick () {
      var cb_ACC_X = document.getElementById('ACC_X');
      modal = document.getElementById('myModal');
      modal.style.display = "block";

      initSensors(Sensors);
      cb_ACC_X.checked = true;

      client = new W3CWebSocket('ws://localhost:8080/', 'ipopcon_connection');
      document.getElementById("connectBox").innerHTML = "아이팝콘을 찾는중...";

      client.onerror = function() {
        console.log('Connection Error');
        document.getElementById("connectBox").innerHTML = "아이팝콘 매니저와의 연결을 실패하였습니다.!";
        };

      client.onopen = function() {
        console.log('WebSocket Client Connected');
        document.getElementById("connectBox").innerHTML = "아이팝콘 매니저와의 연결을 성공하였습니다.!";
      };

      client.onclose = function() {
        console.log('Ipopcon_connection Client Closed');
      };

      client.onmessage = function(e) {

        var object = JSON.parse(e.data);

        if(object["id"] != null )
          document.getElementById("connectBox").innerHTML = object["id"];


        if(object["data"] != null ) {
          console.log("Received sensor values");
          console.dir(object["data"]);
          sensor_data = object["data"];

          mybutton.sensor_data = sensor_data;

          Sensors[0].dataQueue.enqueue(object["data"].accel_x);
          Sensors[1].dataQueue.enqueue(object["data"].accel_y);
          Sensors[2].dataQueue.enqueue(object["data"].accel_z);
          Sensors[3].dataQueue.enqueue(object["data"].accel_average);
          Sensors[4].dataQueue.enqueue(object["data"].magnetometer_x);
          Sensors[5].dataQueue.enqueue(object["data"].magnetometer_y);
          Sensors[6].dataQueue.enqueue(object["data"].magnetometer_z);
          Sensors[7].dataQueue.enqueue(object["data"].temperature);
          Sensors[8].dataQueue.enqueue(object["data"].gyro_x);
          Sensors[9].dataQueue.enqueue(object["data"].gyro_y);
          Sensors[10].dataQueue.enqueue(object["data"].gyro_z);
          Sensors[11].dataQueue.enqueue(object["data"].lux);
          Sensors[12].dataQueue.enqueue(object["data"].left_button);
          Sensors[13].dataQueue.enqueue(object["data"].right_button);
          Sensors[14].dataQueue.enqueue(object["data"].baro);
          Sensors[15].dataQueue.enqueue(object["data"].altitude);
          showChart();

        }

      };

    }

    render () {
        const {
            saveProjectSb3, // eslint-disable-line no-unused-vars
            ...props
        } = this.props;
        return (
            <ButtonComponent
                onClick={this.handleClick}
                {...props}
            >
                연결
            </ButtonComponent>
        );
    }
}

//MyButton.sensor_data = sensor_data;

MyButton.propTypes = {
    saveProjectSb3: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    saveProjectSb3: state.vm.saveProjectSb3.bind(state.vm)
});

/*
export default connect(
    mapStateToProps,
    () => ({}) // omit dispatch prop
)(MyButton);
*/


var mybutton = connect(
   mapStateToProps,
   () => ({}) // omit dispatch prop
)(MyButton)



export default mybutton;
