import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactApexChart from 'react-apexcharts'
import { SET_AUTH } from '../../constants/actionTypes';
import "./wallet.css"
import HDP from "../../assets/images/HDP.png"
import BTC from "../../assets/images/BTC.png"
import ETH from "../../assets/images/ETH.png"
import USDT from "../../assets/images/USDT.png"
import EUR from "../../assets/images/EUR.png"
import USD from "../../assets/images/USD.png"
import GBP from "../../assets/images/GBP.png"
import CAD from "../../assets/images/CAD.png"
import refresh from "../../assets/images/refresh.svg"
import increase from "../../assets/images/increase.png"

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw
    }};
  
const mapDispatchToProps = dispatch => ({
    setAuth: (data) => dispatch({ type: SET_AUTH, data })  
});

class wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        series: [{
            name: 'Wallet total($)',
            data: [4000, 3200, 10000, 900, 290, 1900, 2200, 90, 12000, 700, 190, 5000, 1300, 9000, 170, 200, 700, 5000]
        }],
        options: {
            chart: {
            height: 350,
            type: 'line',
            },
            forecastDataPoints: {
            count: 7
            },
            stroke: {
            width: 5,
            curve: 'smooth'
            },
            xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
            tickAmount: 12,
            labels: {
                formatter: function(value, timestamp, opts) {
                return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                }
            }
            },
            title: {
            text: '',
            align: 'left',
            style: {
                fontSize: "16px",
                color: '#2DCCD3'
            }
            },
            fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: [ '#2DCCD3'],
                shadeIntensity: 2,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [100, 100, 100, 100]
            },
            },
            yaxis: {
            min: 0,
            max: 15000
            }
        },
        };
    }
    componentWillMount(){
        if(!this.props.email){
            this.props.history.push('/logIn');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        else
            window.scrollTo({top: 0, behavior: 'smooth'});
    }
    render() {
        return (
            <div style={{ marginTop: "170px" }} className="footer_padding">
                <div className='wallet_div'>
                    <p className='wallet_left_title'>Wallet total</p>
                    <div className='wallet_right_title'>
                        <p className='wallet_amount'>11,139.46 USD</p>
                        <p className='wallet_updated_date'>Last updated June 14, 2021, 12:00</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-3 padding_left_none'>
                            <div className='wallet_hdp'>
                                <div className='wallet_left_div'>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={HDP} alt="HDP" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>9,768.60 Hdp.ф</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>3,597.70 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" /> 1 Hdp = 0,2137 USD</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mobile_padding_left'>
                            <div className='wallet_btc'>
                                <div className='wallet_left_div'>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={BTC} alt="BTC" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>0,060 BTC</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>2,445.01 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" />1 BTC = 0,0407 USD</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mobile_padding_left'>
                            <div className='wallet_eth'>
                                <div className='wallet_left_div'>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={ETH} alt="ETH" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>1.00 ETH</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>2,559.34 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" />1 ETH = 2,5685 USD</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 padding_right_none mobile_padding_left mobile_padding_right'>
                            <div className='wallet_usdt'>
                                <div className='wallet_left_div'>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={USDT} alt="USDT" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>560.00 USDT</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>560.36 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" />1 USDT = 1,0012 USD</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{ marginTop: "24px" }}>
                        <div className='col-md-3 padding_left_none mobile_padding_left'>
                            <div className='wallet_hdp'>
                                <div className='wallet_left_div'>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={EUR} alt="EUR" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>250 EUR</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>301.79 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" />1 EUR = 0,8245 USD</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mobile_padding_left'>
                            <div className='wallet_btc'>
                                <div className='wallet_left_div'>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={USD} alt="USD" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>550.00 USD</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>3,597.70 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" />1 USD = 0,0037 Hdp</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mobile_padding_left'>
                            <div className='wallet_eth'>
                                <div className='wallet_left_div'>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={GBP} alt="GBP" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>800 GBP</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>1,125.26 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" />1 GBP = 0,7083 USD</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 padding_right_none mobile_padding_left mobile_padding_right'>
                            <div className='wallet_usdt'>
                                <div className='wallet_left_div'>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={CAD} alt="HDP" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>900 CAD</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>3,597.70 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" /> 1 CAD = 0,2137 USD</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='chart_div'>
                        <div className='chart_head'>
                        <p className='chart_title'>Show the chart</p>
                        <p className='chart_title chart_title_wallet'>Wallet total</p>
                        </div>
                        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(wallet);