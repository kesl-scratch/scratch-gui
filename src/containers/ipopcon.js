/**
* Created by YSM on 2017/08/19.
*/
var USE_READ = true;
var Ipopcon_device;// = require('sensortag');
//var async = require('async');
var path = require('path');

import MyButton from './my-button.jsx';

//console.dir(MyButton);

var Ipopcon = function (runtime) {   // it's replaced .. <- function (runtime)
    this.runtime = runtime
    this.color = {
        "primary": "#FF7F00",
        "secondary": "#FF4D6A",
        "tertiary": "#FF3355"
    };

};

Ipopcon.prototype.getBlocks = function () {
    var color = this.color;

    return {
	    'ipopcon_get_accelerometer_x':{
		    /**
		     * descript :
		     * @this Blockly.Block
		     **/
		    init: function() {
			    this.jsonInit({
				    "message0": "가속도x(g)",
				    "args0": [
				    ],

				    "inputsInline": true,
				    "output": "Number",
				    "colour": color.primary,
				    "colourSecondary": color.secondary,
				    "colourTertiary": color.tertiary,
				    "outputShape": 2

			    });
		    }
	    },
	    'ipopcon_get_accelerometer_y':{
		    /**
		     * descript :
		     * @this Blockly.Block
		     **/
		    init: function() {
			    this.jsonInit({
				    "message0": "가속도y(g)",
				    "args0": [
				    ],

				    "inputsInline": true,
				    "output": "Number",
				    "colour": color.primary,
				    "colourSecondary": color.secondary,
				    "colourTertiary": color.tertiary,
				    "outputShape": 2

			    });
		    }
	    },
	    'ipopcon_get_accelerometer_z':{
		    /**
		     * descript :
		     * @this Blockly.Block
		     **/
		    init: function() {
			    this.jsonInit({
				    "message0": "가속도z(g)",
				    "args0": [
				    ],

				    "inputsInline": true,
				    "output": "Number",
				    "colour": color.primary,
				    "colourSecondary": color.secondary,
				    "colourTertiary": color.tertiary,
				    "outputShape": 2

			    });
		    }
	    },
	    'ipopcon_get_accelerometer_average':{
		    /**
		     * descript :
		     * @this Blockly.Block
		     **/
		    init: function() {
			    this.jsonInit({
				    "message0": "가속도 평균(g)",
				    "args0": [
				    ],

				    "inputsInline": true,
				    "output": "Number",
				    "colour": color.primary,
				    "colourSecondary": color.secondary,
				    "colourTertiary": color.tertiary,
				    "outputShape": 2

			    });
		    }
	    },
      'ipopcon_get_magnetometer_x':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "자기장x(μT)",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_magnetometer_y':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "자기장y(μT)",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_magnetometer_z':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "자기장z(μT)",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_gyro_x':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "자이로스코프x︒/s",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_gyro_y':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "자이로스코프y︒/s",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_gyro_z':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "자이로스코프z︒/s",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_button_1':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "왼쪽 버튼",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_button_2':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "오른쪽 버튼",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_temperature':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "온도℃",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_lux':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "밝기(lux)",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_baro':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "기압(mbar)",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      },
      'ipopcon_get_altitude':{
        /**
         * descript :
         * @this Blockly.Block
         **/
        init: function() {
          this.jsonInit({
            "message0": "고도(m)",
            "args0": [
            ],

            "inputsInline": true,
            "output": "Number",
            "colour": color.primary,
            "colourSecondary": color.secondary,
            "colourTertiary": color.tertiary,
            "outputShape": 2

          });
        }
      }
    };
};

Ipopcon.prototype.getPrimitives = function() {
	return {
		'ipopcon_get_accelerometer_x': this.getAccelvalue_x,
		'ipopcon_get_accelerometer_y': this.getAccelvalue_y,
		'ipopcon_get_accelerometer_z': this.getAccelvalue_z,
		'ipopcon_get_accelerometer_average': this.getAccelvalue_average,
		'ipopcon_get_magnetometer_x' : this.getMagnetometer_x,
		'ipopcon_get_magnetometer_y' : this.getMagnetometer_y,
		'ipopcon_get_magnetometer_z' : this.getMagnetometer_z,
		'ipopcon_get_gyro_x' : this.getGyro_x,
		'ipopcon_get_gyro_y' : this.getGyro_y,
		'ipopcon_get_gyro_z' : this.getGyro_z,
		'ipopcon_get_button_1' : this.getButton_1,
		'ipopcon_get_button_2' : this.getButton_2,
		'ipopcon_get_temperature' : this.gettemperature,
		'ipopcon_get_lux' : this.getLux,
		'ipopcon_get_baro' : this.getBaro,
		'ipopcon_get_altitude' : this.getAltitude
	};
};

Ipopcon.prototype.getAccelvalue_x = function(argValues, util) {

    return MyButton.sensor_data.accel_x;
};

Ipopcon.prototype.getAccelvalue_y = function(argValues, util) {

    return MyButton.sensor_data.accel_y;
};
Ipopcon.prototype.getAccelvalue_z = function(argValues, util) {

    return MyButton.sensor_data.accel_z;
};
Ipopcon.prototype.getAccelvalue_average = function(argValues, util) {

    return MyButton.sensor_data.accel_average;
};

Ipopcon.prototype.getMagnetometer_x = function(argValues, util) {

  return MyButton.sensor_data.magnetometer_x;
  };
Ipopcon.prototype.getMagnetometer_y = function(argValues, util) {
  return MyButton.sensor_data.magnetometer_y;
};
Ipopcon.prototype.getMagnetometer_z = function(argValues, util) {

  return MyButton.sensor_data.magnetometer_z;
};
Ipopcon.prototype.getGyro_x = function(argValues, util) {

  return MyButton.sensor_data.gyro_x;
};
Ipopcon.prototype.getGyro_y = function(argValues, util) {

  return MyButton.sensor_data.gyro_y;
};
Ipopcon.prototype.getGyro_z = function(argValues, util) {

  return MyButton.sensor_data.gyro_z;
};
Ipopcon.prototype.getButton_1 = function(argValues, util) {

  return MyButton.sensor_data._device.left_button;
};
Ipopcon.prototype.getButton_2 = function(argValues, util) {
  return MyButton.sensor_data._device.right_button;
};
Ipopcon.prototype.gettemperature = function(argValues, util) {

  return MyButton.sensor_data._temperature;
};
Ipopcon.prototype.getLux = function(argValues, util) {

  return MyButton.sensor_data.lux;
};
Ipopcon.prototype.getBaro = function(argValues, util) {
  return MyButton.sensor_data.baro;
};
Ipopcon.prototype.getAltitude = function(argValues, util) {


  return MyButton.sensor_data.altitude;
};

Ipopcon.prototype.getToolbox = function () {
	return '<category name="아이팝콘" colour="#FFA500" secondaryColour="#FFA000">'+
			'<block type="ipopcon_get_accelerometer_x">'+
			'</block>'+
      '<block type="ipopcon_get_accelerometer_y">'+
      '</block>'+
      '<block type="ipopcon_get_accelerometer_z">'+
      '</block>'+
      '<block type="ipopcon_get_accelerometer_average">'+
      '</block>'+
      '<block type="ipopcon_get_magnetometer_x">'+
      '</block>'+
      '<block type="ipopcon_get_magnetometer_y">'+
      '</block>'+
      '<block type="ipopcon_get_magnetometer_z">'+
      '</block>'+
      '<block type="ipopcon_get_gyro_x">'+
      '</block>'+
      '<block type="ipopcon_get_gyro_y">'+
      '</block>'+
      '<block type="ipopcon_get_gyro_z">'+
      '</block>'+
      '<block type="ipopcon_get_button_1">'+
      '</block>'+
      '<block type="ipopcon_get_button_2">'+
      '</block>'+
      '<block type="ipopcon_get_temperature">'+
      '</block>'+
      '<block type="ipopcon_get_lux">'+
      '</block>'+
      '<block type="ipopcon_get_baro">'+
      '</block>'+
      '<block type="ipopcon_get_altitude">'+
      '</block>'+
			'</category>';

}

module.exports = Ipopcon;
