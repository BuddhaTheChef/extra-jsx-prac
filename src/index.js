import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment';
import Card from './Card';
import Seasons from './Seasons';

class App extends React.Component {
    render() {
    return (
        <div>
        <div className="ui container comments" style={{margin: 0, padding: '20px',display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', background: '#07a4ff'}}>
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
        <Seasons />
        </div>
    )
}

}

ReactDOM.render(<App />, document.querySelector('#root'));