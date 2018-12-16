import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment';

const App = () => {
    return (
        <div className="ui container comments">
          <Comment author="Sammy boi" timeSince="Today at 4:00PM" commentText="Yo nice post!" avatar={faker.image.avatar()}/>
          <Comment author="Prince zess" timeSince="Today at 8:32PM" commentText="Welp this is awkward..." avatar={faker.image.avatar()} />
          <Comment author="Yo Mama" timeSince="Yesterday at 8:00AM" commentText="First Comment!!!!" avatar={faker.image.avatar()} />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));