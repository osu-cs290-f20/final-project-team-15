import React from 'react';
import UserReview from "../components/userReview";
import Forms from "../components/Forms";
import ImageGallery from 'react-image-gallery';
import '../Home.css';

function Home()
{

    const imgs = [

        {

            original: 'https://images.freeimages.com/images/large-previews/c0a/business-meeting-1239197.jpg',
            description: 'Yes! We sell YOUR data!'

        },
        {

            original: '../DataHarvester.jpeg',
            description: 'We are an all inclusive retailer. We accept not just your data, but your friends and families as well.'

        },
        {

            original: 'https://static.wikia.nocookie.net/gtawiki/images/3/3a/PoliceComputer-GTAIV-PoliceRecord.jpg/revision/latest/top-crop/width/220/height/220?cb=20161121222936',
            description: 'Get dirt on anybody! *For a small price'

        },
        {

            original: 'https://proxy.spigotmc.org/0795791b099e16577a3125ec70cce9b2bee223f1?url=https%3A%2F%2Fwww.spawnchunk.com%2Fauctionhouse%2Fimages%2Fauctionhouse1.png',
            description: 'Never seen before data auctionhouse mechanic.'

        },

    ]

    return (

        <div>
            <ImageGallery items={imgs} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} />

            <UserReview />
        </div>

    )

}

export default Home;