import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import news from './pictures/news.jpg'; 
import Image from 'react-bootstrap/Image'
export class Home extends Component{
    render(){
        return(
            <div>
            <div className="mt-5 d-flex justify-content-left ">
                <h5>Welcome to my News portal. Here, you can find all important informations aboute the word.</h5>
            </div>
              <div>
              <Image src={news} alt="news" fluid  />
          </div>
          </div>
        )
    }
}