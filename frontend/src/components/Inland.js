import React, {Component} from 'react';

import ader from './pictures/ader.jpg'; 
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {Comment} from './Comment'

export class Inland extends Component{


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
                    <h3>Áder János ellenőrizte a magyar haderőt, elégedett volt az eredménnyel</h3>
                </div>  
                <div className="mt-5 d-flex justify-content-left ">
                    <p>
                    Áder János köztársasági elnök mint a honvédség főparancsnoka szerdán hivatalában fogadta Korom Ferencet, a Magyar Honvédség parancsnokát. <br/>

                        A mintegy másfél órán át tartó megbeszélésüket követően a Sándor-palota Tükör-termében tartott sajtótájékoztatón Korom Ferenc azt mondta: <br/> a köztársasági elnök felkérésére adott helyzetjelentést a Magyar Honvédség helyzetéről, a honvédelmi és haderőfejlesztési programról, valamint a katonák pandémiás helyzettel összefüggésben végrehajtott feladatairól.

                        A vezérezredes ismertette, az államfőnek tett jelentés három részből állt. Az első részben beszámolt a Magyar Honvédség honvédelmi törvényben meghatározott feladatairól, azok végrehajtásáról, amellyel a katonák biztosítják a magyar emberek biztonságát.
                </p>

                </div>
                <div>
                    <Image src={ader} alt="Ader Janos" fluid  />
                </div>

                <div className="mt-5 d-flex justify-content-left ">
                    <p>
                    A vezérezredes jelentése harmadik részében azt fejtette ki, hogy a jelenlegi pandémiás helyzetben milyen feladatokat lát el a Magyar Honvédség. A kiemelt feladatok között említette, hogy a katonák a Belügyminisztérium erőivel együttműködésben részt vesznek a korridorszakaszokon a tranzitjárművek ellenőrzésében. Emellett több helyen átvették, másutt a rendőrökkel közösen látják el a határátkelők zárását is. Szintén a rendőrökkel közösen járőrözési feladatokat is ellátnak a katonák, ellenőrzik a korlátozó rendszabályok betartását.
                </p>

                </div>

                <div class="panel panel-primary">
                <div class="panel-heading">
                    <h5 class="panel-title"> EZEK MELLETT 1380 EMBERREL 89 EGÉSZSÉGÜGYI INTÉZMÉNYBEN TÁMOGATJÁK AZ EGÉSZSÉGÜGYI DOLGOZÓK MUNKÁJÁT, LOGISZTIKAI, ADMINISZTRATÍV FELADATOK ELLÁTÁSÁVAL. </h5>
                </div>
                <div class="panel-body">
                A déli határszakaszon pedig mintegy 1200 katona teljesít szolgálatot, őrzik Magyarország, a magyar emberek biztonságát, segítve az illegális migráció okozta válsághelyzet kezelését - fejtette ki a parancsnok.

                Korom Ferenc megtiszteltetésnek nevezte, hogy Áder János a hadsereg főparancsnokaként lehetőséget adott neki jelentése megtételére. Azt mondta, az államfő érdeklődő volt, több témában több kérdést is feltett.

                A vezérezredes sajtótájékoztatója végén kérdésre válaszolva kiemelte: 2020-ban a Magyar Honvédség minden tervezett és pluszban kapott feladatot sikeresen teljesített. Sikerük egyik legfontosabb fokmérőjeként a társadalom visszajelzését hangsúlyozta. Korom Ferenc azt mondta: a katonák 2020-ban és az idei év eddig eltelt időszakában végzett munkáiról csak pozitív visszajelzéseket kapott a magyar emberektől.
                <br/>

                 </div>
                 
            </div>

            
        <ul class="list-group">
            <li class="list-group-item">

                <dl class="dl-horizontal ">
                    <dt><span class="badge danger"> <h5> Magyar Honvédség </h5> </span></dt>
                    <dd>A Magyar Honvédség (rövidítve MH) polgári irányítás alatt álló, függelmi rendszerben működő és centrálisan vezetett fegyveres állami szervezet, békében az önkéntességen, megelőző védelmi helyzetben és rendkívüli állapotban az általános hadkötelezettségen alapuló haderő. Egyes szervei jogszabályokban meghatározott katonai igazgatási feladatokat is ellátnak.</dd>
                </dl>
            </li>
        </ul>
            
      <Comment/>

     </div>    
      )
    }
}