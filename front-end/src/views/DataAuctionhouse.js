import "../DataAuctionhouse.css";
import React, {Components, useState} from 'react';
import {
    MDBContainer,
    MDBAnimation
} from 'mdbreact';
import Gallery from 'react-photo-gallery';
import mockData from "../mockdata.json";

const row1 = [
  {
    src: 'https://images.hdqwalls.com/download/ciri-cyberpunk-2077-tv-1920x1080.jpg',
    width: 5,
    height: 3
  },
  {
    src: 'https://danbooru.donmai.us/data/__keqing_genshin_impact_drawn_by_ildy__2eea69de67dda6fe50da3ae16f044d5c.png',
    width: 1,
    height: 2,
  },
  {
    src: 'https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507da8795.jpg',
    width: 1,
    height: 2
  },
  {
    src: 'https://www.meme-arsenal.com/memes/8da21b55bbdc8815b9325894b45eab6d.jpg',
    width: 1,
    height: 1
  }

];

const row2 = [
    {
        src: "https://i.pinimg.com/originals/c0/4f/8b/c04f8b31f30a6d031db192654b77e208.jpg",
        width: 2,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1503541517233-120571491cf3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
        width: 1,
        height: 2
    },
    {
        src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        width: 3,
        height: 2
    }
];

const row3 = [
    {
        src: "https://i.ytimg.com/vi/if-2M3K1tqk/maxresdefault.jpg",
        width: 3,
        height: 2
    },
    {
        src: "https://memegenerator.net/img/instances/84132766/omae-wa-mou-shindeiru-nani.jpg",
        width: 3,
        height: 2
    },
    {
        src: "https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/smudge-the-viral-cat.jpg",
        width: 3,
        height: 2
    },
];

class DataAuctionhouse extends React.Component {
    componentDidMount() {
        fetch("http://localhost:8000/harvester/", {
            method: "GET",
        })
        .then((response) => response.json())
        .then((resJson) => {
            this.setState({ newData: resJson });
        })
        .catch((e) => {
            console.log(e);
        });
    }

    constructor () {
        super();
        this.state = {
            newData:null
        };
    };

    render() {
        
        return (
            <div>
                <header className="auction-header">Data Auction House</header>
                <div className="gallery"> 
               
                    <Gallery photos={row1} />
                    <Gallery photos={row2} />
                    <Gallery photos={row3} />
                        {/* 3x3 gallery */}
                        {/* Table for inventory */}

                    <br/>
                </div>
                <header className="auction-header">Database</header>

                <div className="table-display">
                    <table id="tablePreview" class="table" cellpadding="0" cellspacing="0" border="0">
                        <div className="div-table">
                            <thead className="div-table">
                                <tr>
                                <th className="" scope="row">#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Blood Type</th>
                                <th>Gender</th>
                                <th>Credit Card</th>
                                <th>Phone Number</th>
                                <th>Race</th>
                            
                                </tr>
                            </thead>
                        </div>  
                        </table>
                        <table id="tablePreview" class="table" cellpadding="0" cellspacing="0" border="0">
                        <tbody class="div-table">
                            {this.state.newData
                            ? this.state.newData.map((data) => {
                                return (
                                    <div className="">
                                        <tr>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.first_name}</td>
                                        <td className="last-name-push">{data.last_name}</td>
                                        <td>{data.age}</td>
                                        <td>{data.blood_type}</td>
                                        <td>{data.gender}</td>
                                        <td>{data.credit_card}</td>
                                        <td>{data.phone_number}</td>
                                        <td>{data.race}</td>
                                        </tr>
                                    </div>
                                    );
                                })
                            : "LOADING"}
                        </tbody>
                        
                    </table>
                </div>
            </div>
        );
        
    }
}


export default DataAuctionhouse;