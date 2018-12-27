import React, {Component} from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {

    render() {
        const { user } = this.props;

        if(!user) {return null}
        return (
            <div>
                <div className="header" style={{color: '#1489ff', marginTop: '50px', marginLeft:'50px'}}>{user.name}</div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find((user) => user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps)(UserHeader);