import React from 'react';
import { 
    Bar,
    Line,
    Pie,
} from "react-chartjs-2";
import {
    MDBContainer,
} from "mdbreact";
import "../AboutUs.css";
import { withRouter } from 'react-router-dom';

class AboutUs extends React.Component {

    // The bar graph setup
    Barstate = {
        dataBarGraph: {
          labels: ["Quarter 4 Y2020", "Quarter 3 Y2020", "Quarter 2 Y2020", "Quarter 1 Y2020"],
            datasets: [
                {
                label: "Quarterly Revenue",
                data: [119, 93, 80, 72],
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
                label: "Millions of Dollars",
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

    // The Line Graph Setup
    LineState = {
      dataLine: {
        labels: ["Janurary", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              // Google
              label: "Google's Data Usage",
              fill: true,
              lineTension: 0.3, 
              backgroundColor: "rgba(255, 206, 68, .3)",
              borderColor: "#FFDEAD",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgb(255, 255, 255)",
              poitnBackgroundColor: "rgb(255, 255, 255)",
              pointBorderWdith: 10,
              pointHoverRadius: 5, 
              pointHoverBackgroundColor: "rgb(66, 133, 244)",
              pointHoverBackgroundColor: "rgba(220, 220, 220, 1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [1423, 1993, 963, 1160, 1000, 983, 1497]
            },
            {
              // Facebook
              label: "Facebook's Data Usage",
              fill: true,
              lineTension: 0.3, 
              backgroundColor: "rgba(66, 133, 244, .3)",
              borderColor: "rgb(66, 133, 244)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgb(255, 255, 255)",
              poitnBackgroundColor: "rgb(255, 255, 255)",
              pointBorderWdith: 10,
              pointHoverRadius: 5, 
              pointHoverBackgroundColor: "rgb(66, 133, 244)",
              pointHoverBackgroundColor: "rgba(220, 220, 220, 1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [1650, 1590, 1800, 1810, 1560, 1550, 1400]
            },
            {
              // Apple
              label: "Apple's Data Usage",
              fill: true,
              lineTension: 0.3, 
              backgroundColor: "rgba(242, 242, 242, .3)",
              borderColor: "rgb(242, 242, 242)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgb(255, 255, 255)",
              poitnBackgroundColor: "rgb(255, 255, 255)",
              pointBorderWdith: 10,
              pointHoverRadius: 5, 
              pointHoverBackgroundColor: "rgb(66, 133, 244)",
              pointHoverBackgroundColor: "rgba(220, 220, 220, 1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [1280, 1480, 1400, 1190, 1860, 1270, 1900]
            }
          ]
      }
    }

    // Pie Chart Setup
    PieState = {
      dataPie: {
        labels: ["Energy", "Real Estate", "Automotive", "Tech", "Entertainment"],
        datasets: [
          {
            data: [300, 50, 95, 650, 320],
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              "#4D5360",
              "#AC64AD"
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774",
              "#DA92DB"
            ]
          }
        ]
      }
    }
    
    // render page
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
                        <Bar data={this.Barstate.dataBarGraph} options={this.Barstate.barChartOptions} className="data-text"/>
                    </MDBContainer>
                </div>
                <br />
                <header className="about-header">Our Partners</header>
                <div>
                  <MDBContainer className="data-text">
                    <h3 className="dataTable">
                      Data Usage in Terabytes
                    </h3>
                    <Line data={this.LineState.dataLine} options={{ responsive: true }} />
                  </MDBContainer>
                </div>
                <br />
                <header className="about-header">Support Sector</header>
                <div>
                  <MDBContainer className="data-text">
                      <h3 className="mt-5">Global Sector Support</h3>
                      <Pie data={this.PieState.dataPie} options={{ responsive: true }}/>
                  </MDBContainer>
                </div>
            </div>
        );
    }
}


export default AboutUs;