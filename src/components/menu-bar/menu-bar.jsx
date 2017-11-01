import classNames from 'classnames';
import React from 'react';

import Box from '../box/box.jsx';
import LoadButton from '../../containers/load-button.jsx';
import SaveButton from '../../containers/save-button.jsx';
import MyButton from '../../containers/my-button.jsx';
import MyMenu from '../../containers/my-menu.jsx';
import LanguageSelector from '../../containers/language-selector.jsx';

import styles from './menu-bar.css';
import ipopconLogo from './ipopconLogo2.svg';

const MenuBar = function MenuBar () {
	return (
		<Box
			className={classNames({
				[styles.menuBar]: true
			})}
		>
			<div className={classNames(styles.logoWrapper, styles.menuItem)}>
				<img
					className={styles.ipopconLogo}
					src={ipopconLogo}
				/>
			</div>

			<div className={classNames(styles.logoWrapper, styles.dropdown)}>
				<MyMenu className={styles.menuItem} />
				<div id="myDropdown" className={styles.dropdownContent}>
					<a href="#">Link 1</a>
					<a href="#">Link 2</a>
					<a href="#">Link 3</a>
				</div>
			</div>

			<div className={classNames(styles.logoWrapper, styles.dropdown)}>
				<MyButton className={styles.menuItem} />
				<div id="myModal" className={styles.modal} >
				    <div className={styles.modalContent} >
					    <span className={styles.close}>&times;</span>
					    <p id="connectBox"></p>
					    <button id="openChartBtn">센서값 그래프 보기</button>
              <button id="connectIpopBtn">아이팝콘 연결하기</button>

					    <div id="chartModal" className={styles.modal} >
					    	<div className={styles.modalChartcontent} >
					    		<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
					    		<span className={styles.closechart}>&times;</span>
					   			<div id="chart_div"></div>
					   			<div className={styles.checkmarkBox}>
						   			<h6></h6>
									<label className={styles.container}>ACC_X
										<input id="ACC_X" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
									<label className={styles.container}>ACC_Y
										<input id="ACC_Y" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
									<label className={styles.container}>ACC_Z
										<input id="ACC_Z" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
									<label className={styles.container}>ACC_AVG
										<input id="ACC_AVG" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
									<label className={styles.container}>IR_TEMP
										<input id="IR_TEMP" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
								</div>
								<div className={styles.checkmarkBox}>
						   			<h6></h6>
									<label className={styles.container}>MAG_X
										<input id="MAG_X" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
									<label className={styles.container}>MAG_Y
										<input id="MAG_Y" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
									<label className={styles.container}>MAG_Z
										<input id="MAG_Z" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
									<label className={styles.container}>TEMP
										<input id="TEMP" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
								</div>
								<div className={styles.checkmarkBox}>
						   			<h6></h6>
									<label className={styles.container}>GYRO_X
										<input id="GYRO_X" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
									<label className={styles.container}>GYRO_Y
										<input id="GYRO_Y" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
									<label className={styles.container}>GYRO_Z
										<input id="GYRO_Z" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
									<label className={styles.container}>LUX
										<input id="LUX" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
								</div>
								<div className={styles.checkmarkBox}>
						   			<h6></h6>
									<label className={styles.container}>BTN_1
										<input id="BTN_1" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
									<label className={styles.container}>BTN_2
										<input id="BTN_2" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
									<label className={styles.container}>BARO
										<input id="BARO" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
									<label className={styles.container}>ALT
										<input id="ALT" type="checkbox" />
										<span className={styles.checkmark}></span>
									</label>
								</div>
					    	</div>
					    </div>
				    </div>
				</div>
			</div>
			<LanguageSelector className={styles.menuItem} />
		</Box>
	);
};

export default MenuBar;
