import React, {Component} from 'react';

import szputnyik from './pictures/szputnyik.jpg'; 
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {Comment} from './Comment'

export class Abroad extends Component{


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
                    <h3>A német kormány keres gyártót a Szputnyik V-nek Európában</h3>
                </div>

                
                <div className="mt-5 d-flex justify-content-left ">
                    <p>
                    Bátorítóak az új típusú koronavírus (SARS-CoV-2) ellen Oroszországban kifejlesztett Szputnyik V oltóanyag hatékonyságáról szóló adatok, amelyeket azonban be is kell nyújtani az Európai Gyógyszerügynökséghez (EMA) ahhoz, hogy a terméket használhassák az Európai Unióban (EU) - mondta a német szövetségi egészségügyi miniszter szerdán Berlinben.

                    Jens Spahn az Europe 2021 című nemzetközi fórumon elmondta, hogy az EU gyógyszerfelügyeleti hatóságának szerepét betöltő EMA-nál lefolytatandó engedélyeztetési eljárásban kell megítélni, pontosan mennyire biztonságos és hatékony az orosz fejlesztésű vakcina.

Kifejtette, hogy a Szputnyik V gyártása "sokkal összetettebb" folyamat, mint a már forgalmazási engedéllyel rendelkező vakcináké. Ismertette, hogy Oroszországból felkérték a német kormányt, vizsgálja meg, van-e Németországban vagy máshol az EU-ban a termék gyártására alkalmas kapacitás. A kormány "közvetítőként" tevékenykedik az ügyben - mondta.
                </p>


             

                </div>
                <div>
                    <Image src={szputnyik} alt="Szputnyik" fluid  />
                </div>

                <div className="mt-5 d-flex justify-content-left ">
                    <p>
                    A Kereszténydemokrata Unió (CDU) politikusa Handelsblatt című üzleti lap, a Wirtschaftswoche című gazdasági hetilap, a Die Zeit című politikai hetilap és a Der Tagesspiegel című politikai napilap közös online fórumán arról is szólt, hogy szerinte külpolitikai törekvéseket lehet kimutatni a Szputnyik V EU-s gyártására és piaci bevezetésére irányuló moszkvai kezdeményezés mögött. Mint mondta, a Kreml "nagyon intenzíven" használja külpolitikájában a hazai fejlesztésű vakcinát, holott még nem gondoskodott arról, hogy az egész orosz lakosság lehetőséget kapjon a SARS-CoV-2 elleni védőoltás megszerzésére.

A Szputnyik V-t Németországban az IDT Biologika nevű társaság gyárthatja, amely a Szász-Anhalt tartományi Dessauban működtet oltóanyaggyártó üzemet. Reiner Haseloff tartományi miniszterelnök egy keddi nyilatkozatában meg is erősítette, hogy a vakcina fejlesztői felvették a kapcsolatot a céggel. Mint mondta, a kormány nyitottan, "tabuk nélkül" közelíti meg az ügyet, mert azt vallja, hogy mindent támogatni kell, ami segít a járvány legyőzésében.

Jürgen Betzing, az oltóanyaggyártás globális piacán a legfontosabb szereplők között számon tartott IDT Biologika ügyvezető igazgatója a Mitteldeutsche Zeitung című térségi lapnak elmondta, hogy legalább négy-öt hónapig tartana a Szputnyik V gyártásának előkészítése. Kiemelte, hogy a társaság szaktudása és kapacitása iránt igen komoly a kereslet. Ezt jelzi a többi között, hogy részt vesznek az AstraZeneca amerikai gyógyszeripari óriásvállalat SARS-CoV-2 elleni vakcinájának gyártásában és csomagolásában. Az első nyolcmillió adag oltóanyagot már ki is szállították a dessaui üzemből.
                </p>


                </div>

            




                
                <Comment/>
             </div>    
      )
    }
}