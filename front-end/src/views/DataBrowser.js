import React from 'react';
import Filter from '../components/Filter';
import Post from '../components/Post';
import "../DataBrowser.css"

function DataBrowser()
{

    return (
        <div myClass="DataBrowserPage">  
          <Filter />
          <Post />
        </div>

    )

}

export default DataBrowser;