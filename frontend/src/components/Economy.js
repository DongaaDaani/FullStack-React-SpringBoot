import React, {Component} from 'react';
import meszaros from './pictures/meszaros.jpg'; 
import Image from 'react-bootstrap/Image'
import Card from "react-bootstrap/Card";
import {Button,ButtonToolbar} from 'react-bootstrap';
import {Comment} from './Comment'
import axios from 'axios';
export class Economy extends Component{

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
                        <h3>Mészáros Lőrinc lett a valaha volt leggazdagabb magyar</h3>
                    </div>
                    <div>
                        <Image src={meszaros} alt="meszaros" fluid  />
                    </div>

                    <div className="mt-5 d-flex justify-content-left ">
                        <p>
                             <b> A felcsúti vállalkozó vagyona egyetlen év alatt több mint 72 milliárddal gyarapodott.</b> 
                             <br/>
                        A Forbes előrukkolt az ötven leggazdagabb magyart felvonultató idei listájával, amelyen továbbra is Mészáros Lőrinc áll az élen.
                        A kormányközeliként emlegetett felcsúti vállalkozónak 
                        – akinek az érdekeltségében van az Opus Global, a Takarékbank, a TV2 és az MKB – 479,4 milliárd forintra nőtt a becsült vagyona 2020-ban.
                        Azt nem tudjuk, hogy a Károly Róbert korában élt, országrészeket birtokló „kiskirályoknak” mekkora volt a vagyonuk, 
                        ám amióta a mostani mérési kritériumok szerint becsülik honfitársaink tulajdonát, nem volt még magyar, akinek ekkora lett volna a vagyona.
                    </p>
  
                            </div>
                            <div>
                            <blockquote>
                    <p><b>MÉSZÁROS VAGYONÁT TAVALY ILYENKOR 407,7 MILLIÁRDRA BECSÜLTE A FORBES, AMI AZT JELENTI, HOGY TÖBB MINT 72 MILLIÁRDDAL BŐVÜLT A KASSZA.</b></p>
                    <footer>Az állami támogatású Kisfaludy-programból 17,7 milliárd forintot kapott felújításra az Opus alá tartozó Hunguest Hotels. Kevés olyan szektor van, amelyben nincs érdekeltsége Mészárosnak: a Budapest–Belgrád vasútvonal, a Paks II. építésébe is beszállt, sőt külföldön is terjeszkedik. A svájci Stadler vállalattal vasútikocsi-gyártásba kezd.

                    Mészáros vagyongyarapodását még az sem akasztotta meg, hogy 2020-ban elvált feleségétől, és a vagyonosztozkodás is lezajlott. </footer>
                     </blockquote>

                    </div>

                    <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title"> Mészárost Csányi és Veres követi a dobogón </h3>
                    </div>
                    <div class="panel-body">
                    A második helyezett Csányi Sándor agrárcége, a Bonafarm folytatta terjeszkedését, ami gyarapította az OTP-vezérigazgató és MLSZ-elnök vagyonát, amely lassan, de biztosan közelít a 400 milliárd felé (393,4).

                        A Winget, a Wallist és a Praktikert is az érdekeltségei közt tudó Veres Tibor lett a harmadik – első alkalommal –, aki szintén képes volt növelni vagyonát, amelynek becsült értéke 258,6 milliárd forint.

                        A negyedik helyre egy „újonc” futott be, Rahimkulov Timur, aki tulajdonos az OTP-ben és a MOL-ban, valamint széles ingatlanportfólióval rendelkezik. Testvérével, Ruszlannal közösen 497 milliárd forintos becsült vagyont sikerült felhalmozniuk, amellyel lenyomják Mészárost.
                    </div>
                    <div class="panel-footer">
                        <table class="table table-striped table-bordered table-hover ">
                          
                            <thead>
                                <tr class="danger">
                                    <th>Név</th>
                                    <th> <span class="glyphicon glyphicon-tag"></span>Születési év</th>
                                    <th><span class="glyphicon glyphicon-globe"></span>Vagyon</th>
                                 

                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td> Mészáros Lőrinc</td>
                                    <td>1966</td>
                                    <td>407,7 milliárd forintos vagyon </td>
                
                                </tr>

                                <tr>
                                    <td>Csányi Sándor</td>
                                    <td>1953</td>
                                    <td>307 milliárd forintos vagyon</td>
                
                                </tr>                
                            </tbody>
                        </table>
                    </div>
                </div>

                    <Comment/>
                 </div>    
          )
    }
}