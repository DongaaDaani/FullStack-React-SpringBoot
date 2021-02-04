import React, {Component} from 'react';

import sport from './pictures/sport.jpg'; 
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {Comment} from './Comment'

export class Sport extends Component{

    componentDidMount(){
        const config={
            headers:{
                Authorization:'Bearer ' + localStorage.getItem('token')
            }
        };


        axios.get('user',config).then(
            res=>{
                this.setState({
                    user:res.data
                });
            },
            err=>{
                console.log(err)
            }
        )
    }



    render(){
        return(
            
            <div>
                <div className="mt-5 d-flex justify-content-left ">
                    <h3>Az MTK legyőzte és megelőzte a Kisvárdát</h3>
                </div>
                <div className="mt-5 d-flex justify-content-left ">
                        <p>
                             <b> Az MTK Budapest 2-0-ra nyert a Kisvárda vendégeként a labdarúgó OTP Bank Liga 19. fordulójának keddi nyitómérkőzésén.</b> 
                             <br/>
                             Aktívabb és határozottabb volt az első félidőben a Kisvárda, többet próbálkozott támadásvezetéssel, de nem tudott komoly helyzetet kialakítani. Az MTK időnként beszorult a saját kapuja elé, ugyanakkor amint esélye nyílt rá, igyekezett kontrákat vezetni. 
                    </p>
                    </div>
                    <div className="mt-5 d-flex justify-content-left ">
                <b> NEM VOLT SOK ILYEN LEHETŐSÉGE, DE AZ EGYETLEN KOMOLY HELYZETÉT GÓLRA VÁLTOTTA VARGA ROLAND ELFUTÁSÁT ÉS PONTOS PASSZÁT KÖVETŐEN SCHÖN SZABOLCS JÓVOLTÁBÓL.</b> 
                </div>

                <div>
                    <Image src={sport} alt="MTK" fluid  />
                </div>

                <div className="mt-5 d-flex justify-content-left ">
                        <p>
                          
                             Jó volt az iram és kemény a küzdelem, akadtak ötletes, szép megoldások, így a kevés gólveszély ellenére nem volt unalmas az első 45 perc. <br/>

                    A szünet után rögtön büntetőhöz jutott az MTK, 

                    </p>
                    </div>
               
                    <div className="mt-5 d-flex justify-content-left ">
                <b>DE DOMBÓ DÁVID KIVÉDTE BOJAN MIOVSKINAK A KAPU BAL OLDALÁBA TARTÓ LÖVÉSÉT.</b> 
                </div>


                <div class="panel panel-primary">
                <div class="panel-heading">
                    <h5 class="panel-title">VARGA HELYZETFELISMERÉSÉNEK ÉS HATÁROZOTT FEJESÉNEK KÖSZÖNHETŐEN, EZZEL NEHÉZ HELYZETBE KERÜLT A KISVÁRDA.</h5>
                </div>
                <div class="panel-body">
                A hazai csapat komoly energiát mozgósított a gólszerzés érdekében, emiatt azonban az MTK előtt nagy területek adódtak, könnyebben jutott el az ellenfél kapujáig, sokkal több és veszélyesebb kontrát vezetett, miközben taktikusan őrizte előnyét. A fővárosiak határozottabbak és pontosabbak voltak a kapu előtt, ennek köszönhetően gyűjtötték be a három pontot. 

                    A hazaiaknak idén ez volt a negyedik bajnoki mérkőzésük, és most kaptak ki először úgy, 

                 </div>
                 
            </div>

            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h5 class="panel-title">HOGY ELŐZŐLEG A MÁSODIK HELYEZETT MOL FEHÉRVÁRT LEGYŐZTÉK, AZ ÉLLOVAS FERENCVÁROS ELLEN PEDIG PONTOT SZEREZTEK A FŐVÁROSBAN.</h5>
                </div>
                <div class="panel-body">
                Az MTK ugyanakkor egy-egy döntetlen és vereség után először nyert, melynek köszönhetően az ötödikről feljött a harmadik helyre, éppen a Kisvárda elé.

                 </div>
                 
            </div>
                
            <Comment/>
             </div>    
      )
    }
}