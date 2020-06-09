import React from 'react';
import { fetchUsers } from '../../Data/fetch';
import { ListUser } from '../ListUser/ListUser';
import { GridUser } from '../GridUser/GridUser';
import './Users.css';


class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        fetchUsers()
            .then(data => {
                this.setState({ users: data.results })
            })
    }

    render() {
        return (
            <div className="users">
                {this.state.users.map((user, i) => {
                    if (this.props.isList) {
                        return (<ListUser
                            key={i}
                            img={user.picture.thumbnail}
                            name={user.name.first}
                            email={user.email}
                            dob={user.dob.date}
                            last={user.name.last}
                            gender={user.gender}
                        />)
                    } else {
                        return (<GridUser
                            key={i}
                            gender={user.gender}
                            img={user.picture.large}
                            name={user.name.first}
                            email={user.email}
                            dob={user.dob.date}
                        />)
                    }

                })}
            </div>
        )
    }
}

export { Users };