import React from 'react';
import UserReview from "../components/UserReview";
import Forms from "../components/Forms";
import ImageGallery from 'react-image-gallery';
import '../Home.css';
import MessageBox from "../components/MessageBox";

function Home()
{

    const imgs = [

        {

            original: 'https://images.freeimages.com/images/large-previews/c0a/business-meeting-1239197.jpg',
            description: 'Yes! We sell YOUR data!'

        },
        {

            original: 'https://raw.githubusercontent.com/osu-cs290-f20/final-project-team-15/master/front-end/src/DataHarvester.jpeg?token=AKQJOARBLLABYPNZHTCYYGK73GW2A',
            description: 'We are an all inclusive retailer. We accept not just your data, but your friends and families as well.'

        },
        {

            original: 'https://i.imgur.com/lIslWHB.png',
            description: 'Track down anybody for a small price!'

        },
        {

            original: 'https://proxy.spigotmc.org/0795791b099e16577a3125ec70cce9b2bee223f1?url=https%3A%2F%2Fwww.spawnchunk.com%2Fauctionhouse%2Fimages%2Fauctionhouse1.png',
            description: 'Avid Mineplex player? You\'ll be quite well acquainted with our Data Auctionhouse!'

        },

    ]

    return (

        <div>
            <ImageGallery items={imgs} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} autoPlay={true} />
            <br />
            <MessageBox />
            <UserReview />
        </div>

    )

}

export default Home;