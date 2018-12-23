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
import VideoDetail from './Proj4/VideoDetail';
import SongList from './Components/SongList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import SongDetail from './Components/SongDetail';
import PostList from './Components/PostList';

class App extends React.Component {
    state = {
        images: [],
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onTermSubmit('huskys');
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
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
    return (
        <div style={{background: 'aquamarine'}}>
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
        <div style={{height: '100vh', background:'rgb(50,50,50)', paddingTop: '20px', marginTop: '70px' }}>
            <SearchBar2 onFormSubmit={this.onTermSubmit} style={{marginTop: '50px'}}/>
            <div className="ui grid">
            <div className="ui row" style={{margin: '0px 54px'}}>
            <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} /> 
            </div>
            <div className="five wide column">
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
            </div>
            </div>
        </div>
        {/* Fifth Project */}
        <h1 style={{textAlign: 'center'}}>Redux Practice</h1>
        <div className="ui container grid" style={{marginTop: '30px'}}>
            <div className="ui row">
                <div className="column eight wide">
                     <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
        {/* Sixth Project */}
        <div className="ui container" style={{width:'100%', height: '50vh', background: 'rgb(66,66,66)'}}>
            <PostList />
        </div>
        </div>
    )
}

}

ReactDOM.render(
<Provider store={createStore(reducers)}>
<App />
</Provider>, 
document.querySelector('#root')
);