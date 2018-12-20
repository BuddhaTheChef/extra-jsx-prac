import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment';
import Card from './Card';
import Seasons from './Seasons';
import SearchBar from './SearchBar';
import Unsplash from '../src/api/Unsplash'
import ImageList from './ImageList';
import SearchBar2 from './Proj4/SearchBar2';
import Youtube from './api/Youtube';
import VideoList from './Proj4/VideoList';

class App extends React.Component {
    state = {
        images: [],
        videos: []
    }

    onSearchSubmit = async (term) => {
        
    const response = await Unsplash.get('/search/photos',{
        params: { query: term}
    })
        console.log(response.data.results)
        this.setState({images: response.data.results})
    }

    onTermSubmit =  async (term) => {
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({videos: response.data.items})
    }

    render() {
    return (
        <div>
            {/* First Project */}
        <div className="ui container comments" style={{margin: 0, padding: '20px',display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', background: '#07a4ff', height: '100vh'}}>
        <h1>Comment's Template</h1>
          <Card>
            <Comment author="Sammy boi" timeSince="Today at 4:00PM" commentText="Yo nice post!" avatar={faker.image.avatar()}/>
          </Card>
          <Card>
            <Comment author="Prince zess" timeSince="Today at 8:32PM" commentText="Welp this is awkward..." avatar={faker.image.avatar()} />
          </Card>
          <Card>
             <Comment author="Yo Mama" timeSince="Yesterday at 8:00AM" commentText="First Comment!!!!" avatar={faker.image.avatar()} />
         </Card>
         <Card>
             <div>
               <h3>WARNING!!</h3>
               Are you Sure you Want to do this?
             </div>
         </Card>
        </div>
        {/* Second Proj */}
        <Seasons />
        {/* Third Proj  */}
        <div className="ui container" style={{marginTop: '10px', background: 'lightgrey'}}>
        <SearchBar  onParentSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
        </div>
        {/* Fourth Project */}
        <div style={{height: '100vh', background:'rgb(50,50,50)', color: 'whitesmoke', marginTop: '70px' }}>
            <SearchBar2 onFormSubmit={this.onTermSubmit}/>
            <VideoList videos={this.state.videos} />
        </div>
        </div>
    )
}

}

ReactDOM.render(<App />, document.querySelector('#root'));