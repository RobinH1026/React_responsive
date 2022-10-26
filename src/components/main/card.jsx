import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import {crypto_currency} from "./components/crypto_currency"
import "./card.css"
import cardImg from "../../assets/images/card.png"
import lock_open from "../../assets/images/lock_open.png"
import question from "../../assets/images/quez.svg"
import ellipsis from "../../assets/images/ellipsis.png"

class card extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected:[
                {
                    key: 'HDP - Hdp.ф',
                    text: 'HDP - Hdp.ф',
                    value: 'HDP - Hdp.ф',
                    image: { avatar: true, src: "currency/HDP.png" },
                }
            ],
            transfer:"wallet"
        }
    }
    componentWillMount(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    handleTransfer = (key) =>{
        this.setState({ transfer:key });
    }
    render() {
        return (
            <div style={{ marginTop: "170px" }} className="footer_padding cards_div">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card_btns'>
                            <button style={{ marginLeft:'20px' }} className={this.state.transfer==="wallet"?'add_funds_btn active_add_funds_btn':"add_funds_btn"} onClick={()=>this.handleTransfer("wallet")}>↓ Transfer funds from your wallet</button>
                            <button style={{ marginLeft:'20px' }} className={this.state.transfer==="card"?'add_funds_btn transfer_btn active_add_funds_btn mobile_add_funds':"add_funds_btn transfer_btn mobile_add_funds"} onClick={()=>this.handleTransfer("card")}>↑ Transfer funds between cards</button>
                        </div>
                        {this.state.transfer==="wallet"?
                        <div className='card_input'>
                            <p className='loginTitle' style={{ marginTop:"30px", color: "#002554" }}>Your wallet *</p>
                            <Dropdown style={{ marginRight:"0px" }}
                                placeholder='Select Currency'
                                fluid
                                selection
                                options={crypto_currency}
                                defaultValue={this.state.selected}
                            />
                            <p className='loginTitle' style={{ marginTop:"70px", color: "#002554" }}>To your card *</p>
                            <Dropdown style={{ marginRight:"0px" }}
                                placeholder='Select Currency'
                                fluid
                                selection
                                options={crypto_currency}
                                defaultValue={this.state.selected}
                            />
                            <p className='loginTitle' style={{ marginTop:"75px", color: "#002554" }}>Amount *</p>
                            <input className='inputStyle' type="text" name="amount" placeholder='Between the amount' />
                            <p style={{ color:"#999999", marginTop:"25px" }}><span>Price</span><span style={{ float:"right" }}>1 HDP = 48777.03 USD</span></p>
                            <p style={{ color:"#002554", marginTop:"10px" }}><span>Total price</span><span style={{ float:"right" }}>0.01344832 HDP</span></p>
                            <p style={{ color:"#002554", marginTop:"10px" }}><span>Receive</span><span style={{ float:"right" }}>640 USD</span></p>
                            <button className='singInButton activeButton' style={{ marginTop:"40px" }}>Submit</button>
                        </div>
                        :
                        <div className='card_input'>
                            <p className='loginTitle' style={{ marginTop:"30px", color: "#002554" }}>From your card *</p>
                            <Dropdown style={{ marginRight:"0px" }}
                                placeholder='Select Currency'
                                fluid
                                selection
                                options={crypto_currency}
                                defaultValue={this.state.selected}
                            />
                            <p className='loginTitle' style={{ marginTop:"70px", color: "#002554" }}>To your card *</p>
                            <Dropdown style={{ marginRight:"0px" }}
                                placeholder='Select Currency'
                                fluid
                                selection
                                options={crypto_currency}
                                defaultValue={this.state.selected}
                            />
                            <p className='loginTitle' style={{ marginTop:"75px", color: "#002554" }}>Amount *</p>
                            <input className='inputStyle' type="text" name="amount" placeholder='Between the amount' />
                            <button className='singInButton activeButton' style={{ marginTop:"40px" }}>Submit</button>
                        </div>
                        }
                    </div>
                    <div className='col-md-6'>
                        <div className='card_summary_div'>
                            <p className='page_title' style={{ fontSize:"16px", marginTop:"13px" }}>Card summary</p>
                            <div className='row'>
                                <div className='col-md-7 col-sm-7 col-7' style={{ marginTop: "45px" }}>
                                    <img className='mobile_card_img' src={cardImg} style={{ width:'60%' }} alt="card" />
                                </div>
                                <div className='col-md-5 col-sm-5 col-5' style={{ marginTop:"45px" }}>
                                    <p className='mobile_card0' style={{ color:"#696B6C", fontSize:"16px" }}>Hedpay Card</p>
                                    <p className='mobile_card1' style={{ color: "#002554", fontSize:"22px", fontWeight:"600", marginTop: "50px" }}>250,62 USD</p>
                                    <p className='mobile_card2' style={{ color:"#696B6C", fontSize:"16px", marginTop:"-20px" }}>Available funds</p>
                                    <p className='mobile_card3' style={{ color: "#002554", fontSize:"18px", fontWeight:"600", marginTop: "50px" }}>0,00 HDP</p>
                                    <p className='mobile_card4' style={{ color:"#696B6C", fontSize:"16px", marginTop:"-20px" }}>Rewards earned</p>
                                    <img className='lock_open mobile_card_img1' src={lock_open} alt="lock_open" />
                                    <p className='mobile_card5' style={{ marginTop:"15px" }}><img src={question} alt="question" /> &nbsp; &nbsp; <span>Block the card</span></p>
                                    <img className='ellipsis mobile_card_img2' src={ellipsis} alt="ellipsis" />
                                    <p className='mobile_card6' style={{ marginTop:"15px" }}><img src={question} alt="question" /> &nbsp; &nbsp; <span>Card PIN</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='operation_div' style={{ marginTop:"90px" }}>
                    <p className='page_title' style={{ fontSize:"16px" }}>Latest operations - Card name</p>
                    <div className='show_and_search'>
                    <div className='selected_div'>
                        <span className='show_title'>Show&nbsp;&nbsp;&nbsp;</span>
                        <select className='select_ele' name="pageItems">
                        <option value="6">6</option>
                        <option value="6">12</option>
                        <option value="6">18</option>
                        <option value="6">24</option>
                        </select>
                    </div>
                    <input type="search" style={{ marginTop:'-38px' }} name="search" className="search_input" placeholder='Search' />
                    </div>
                    <div className='table_responsive'>
                    <table className='table text-center'>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Deposit</th>
                            <th>Coin/token</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>05/05/2021</td>
                            <td>900</td>
                            <td>HDP.Ф</td>
                            <td></td>
                            <td></td>
                            <td>HDP.Ф</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <Stack spacing={2}>
                        <Pagination count={20} defaultPage={1} siblingCount={2} boundaryCount={2} shape="rounded" />
                    </Stack>
                </div>
            </div>
        );
    }
}

export default card;