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
            <div className={styles.header_wrap}>
                <div className={styles.header}>
                    <a href="javascript:;" className={styles.bar}></a>
                    <h1><a href="/"><img src={require('../../../public/images/logo.png')} alt="ipopcon" /></a></h1>

                    <ul className={styles.menu}>
                        <li>
                            <a href="javascript:;" class={styles.file}>파일</a>
                            <ul className={styles.depth}>
                                <li><a href="javascript:;">새로 만들기</a></li>
                                <li><a href="javascript:test();">월드에 저장</a></li>
                                <li><a href="javascript:;">내 방으로 이동</a></li>
                                <li><a href="javascript:;">프로젝트 올리기</a></li>
                                <li><a href="javascript:;">프로젝트 내려받기</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:;">연결</a></li>
                    </ul>

                    <div className={styles.drop_wrap}>
                        <div class={styles.default_wrap}><a href="javascript:;" class={styles.default}>한글</a></div>
                        <ul class={styles.drop_menu + ' ' + styles.hide}>
                            <li><a href="javascript:;">한글</a></li>
                            <li><a href="javascript:;">영어</a></li>
                            <li><a href="javascript:;">중국어</a></li>
                        </ul>
                    </div>

                    <div className={styles.bluetooth}>
                        <a href="javascript:;"></a>
                    </div>

                    <div className={styles.login_info + ' ' + styles.hide}>
                        <div className={styles.user}><span>이혜리</span>님<span className={styles.message}>10</span></div>
                        <div className={styles.point}>2500<span>P</span></div>
                        <a href="javascript:;" className={styles.coin_img}><img src={require('../../../public/images/img01.jpg')} alt="회원" /></a>
                    </div>
                    <div className={styles.join_info}>
                        <a href="javascript:bpop_open('save_pop')" className={styles.join}>회원가입</a>
                        <p className={styles.coin_img}><img src={require('../../../public/images/img_join.jpg')} alt="회원가입" /></p>
                    </div>
                    <div className={styles.unlogin_info + ' ' + styles.hide}>
                        <div className={styles.unlogin}>비회원</div>
                        <p className={styles.coin_img}><img src={require('../../../public/images/img_unlogin.jpg')} alt="회원가입" /></p>
                    </div>
                </div>
            </div>
            {/*월드에 저장하기*/}
            <div class={styles.pop + ' ' + styles.save_pop01 + ' ' + styles.hide}>
                <div class={styles.pop_top}>
                    <p class={styles.tit_st01}>월드에 저장하기</p>
                    <a href="javascript:;" class={'b-close' + ' ' + styles.btn_close}><img src={require('../../../public/images/btn_close.png')} alt="닫기" /></a>
                </div>
                <div class={styles.pop_inner}>
                    <div class={styles.form_wrap}>
                        <div>
                            <p class={styles.txt_st02}>제목</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p class={styles.txt_st02}>콘텐츠<br/>즐기는 방법</p>
                            <textarea placeholder="조작 방법 등 콘텐츠를 즐길 수 있게 기입해주세요"></textarea>
                        </div>
                        <div>
                            <p class={styles.txt_st02}>콘텐츠<br/>아이디어</p>
                            <textarea placeholder="어디서 영감을 얻었나요? 또는 하고 싶은 말들을 여기에 기록해주세요"></textarea>
                        </div>
                    </div>
                    <div class={styles.chk_wrap}>
                        <input type="checkbox" id="chk01" />
                        <label for="chk01">아이팝콘 하드웨어 사용여부</label>
                    </div>
                    <div class={styles.btn_wrap}>
                        <a href="javascript:;" class={styles.btn_st01}>취소</a>
                        <a href="javascript:;" class={styles.btn_st01}>저장</a>
                        <a href="javascript:;" class={styles.btn_st01 + ' ' + styles.orange}>월드에 게시</a>
                    </div>
                </div>
            </div>

            {/*월드에 저장 완료*/}
            <div class={styles.pop + ' ' + styles.save_pop02 + ' ' + styles.hide}>
                <div class={styles.pop_top}>
                    <p class={styles.tit_st01}>월드에 저장</p>
                    <a href="javascript:;" class={'b-close ' + styles.btn_close}><img src={require('../../../public/images/btn_close.png')} alt="닫기" /></a>
                </div>
                <div class={styles.pop_inner}>
                    <p class={styles.icon}><img src={require('../../../public/images/icon_ipopcon_w90.png')} alt="아이팝콘" /></p>
                    <p class={styles.txt_st01}>월드에 콘텐츠가 성곡적으로 저장 되었습니다</p>
                    <div class={styles.btn_wrap}>
                        <a href="javascript:;" class={styles.btn_st01}>계속하기</a>
                        <a href="javascript:;" class={styles.btn_st01 + ' ' + styles.orange}>프로젝트 보러가기</a>
                    </div>
                </div>
            </div>

            {/*블루투스 연결안됨*/}
            <div class={styles.pop + ' ' + styles.bluetooth + ' ' + styles.hide}>
                <div class={styles.pop_top}>
                    <p class={styles.tit_st01}>연결 알림</p>
                    <a href="javascript:;" class={'b-close' + ' ' + styles.btn_close}><img src={require('../../../public/images/btn_close.png')} alt="닫기" /></a>
                </div>
                <div class={styles.pop_inner}>
                    <p class={styles.icon}><img src={require('../../../public/images/btn_close.png')} alt="아이팝콘" /></p>
                    <p class={styles.txt_st01}><span>아이팝콘 매니저와 연결되지 않았습니다</span></p>
                    <div class={styles.btn_wrap}>
                        <a href="javascript:;" class={styles.btn_st01}>그래프 보기</a>
                        <a href="javascript:;" class={styles.btn_st01 + ' ' + styles.orange}>아이팝콘 연결하기</a>
                    </div>
                </div>
            </div>

            <div class={styles.pop + ' ' + styles.sound_pop + ' ' + styles.hide}>
                <div class={styles.pop_top}>
                    <p class={styles.tit_st01}>소리 녹음</p>
                    <a href="javascript:;" class={'b-close' + ' ' + styles.btn_close}><img src={require('../../../public/images/btn_close.png')} alt="닫기" /></a>
                </div>
                <div class={styles.pop_inner}>
                    <div class={styles.sound_bar}></div>
                    <div class={styles.sound_graph}></div>
                    <div class={styles.btn_wrap}>
                        <a href="javascript:;"><img src={require('../../../public/images/sound_icon_recod_default.png')} alt="녹음 전" /></a>
                        <a href="javascript:;" class="hide"><img src={require('../../../public/images/sound_icon_recod_start.png')} alt="녹음 중" /></a>
                        <a href="javascript:;" class="hide"><img src={require('../../../public/images/sound_icon_recod_stop.png')} alt="녹음 끝" /></a>
                    </div>
                </div>
            </div>

        </Box>
    );
};



export default MenuBar;
