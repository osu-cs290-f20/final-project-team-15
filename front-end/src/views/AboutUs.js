import React from 'react';
import { 
    Bar,
} from "react-chartjs-2";
import {
    MDBContainer,
} from "mdbreact";
import "../AboutUs.css";
import { withRouter } from 'react-router-dom';

class AboutUs extends React.Component {

    // The bar graph setup
    state = {
        dataBarGraph: {
          labels: ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"],
            datasets: [
                {
                label: "Quarters Are In Millions",
                data: [53, 58, 80, 119],
                backgroundColor: [
                    "rgba(255, 134,159,0.4)",
                    "rgba(98,  182, 239,0.4)",
                    "rgba(255, 218, 128,0.4)",
                    "rgba(113, 205, 205,0.4)",
                ],
                borderWidth: 2,
                borderColor: [
                    "rgba(255, 134, 159, 1)",
                    "rgba(98,  182, 239, 1)",
                    "rgba(255, 218, 128, 1)",
                    "rgba(113, 205, 205, 1)",
                ]
                }
            ]
        },
        barChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                barPercentage: 1,
                gridLines: {
                  display: true,
                  color: "rgba(255,255,255, 0.3)"
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                },
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      }
    
    render() {

        return (

            <div>
                <header className="about-header">About Us</header>
                <div className="ParaContainer">
                    <p id="ParaStyle">
                        Founded just a few days ago, Data Harvester 9000 provides consumers with an innovative way to share their personal data with the world. With more than 100 awards, 10 sponsors and 900 million users worldwide, Data Harvester 9000 is a recognized and trusted industry leader in distributing and collecting personal data.
                        First created by four creative and enthusiastic programmers, the team is now composed of a group of highly-skilled young talents who commit themselves to provide better data gathering and selling services for users.
                    </p>
                    <p id="ParaStyle">
                        Our Data Harvester 9000 team strives to create easy-to-use and powerful solutions to easily sell your, your mom's, your friends, and your coworker's data efficiently and safely. Our award-winning service - Data Browser is used and trusted by over 600 million users in 220 Countries and Regions Worldwide;
                        Data Browser enables easy access to any and everybody's personal data, anytime, anywhere.
                        We are improving our technology and expanding our services to address the needs of users worldwide. Whether you're sharing your private information with the world, or you want to do your
                        friends and families dirty by sharing theirs, we've got you covered.
                    </p>
                </div>
                <header className="about-header">Our Company</header>

                <div>
                    <MDBContainer className="data-text">
                        <h3 className="dataTable">
                            Quarterly Revenue
                        </h3>
                        <Bar data={this.state.dataBarGraph} options={this.state.barChartOptions} className="data-text"/>
                    </MDBContainer>
                </div>
            </div>
        );
    }
}


export default AboutUs;