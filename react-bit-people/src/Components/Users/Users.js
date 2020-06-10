import React from 'react';
import { ListUser } from '../ListUser/ListUser';
import { GridUser } from '../GridUser/GridUser';
import './Users.css';
import { Container, Row } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import { NotFound } from '../NotFound/NotFound';


class Users extends React.Component {

    render() {
        if (this.props.isLoading) {
            return <Loading />
        }
        if (!this.props.users.length) {
            return <NotFound />
        }

        return (
            <Container className="users">
                <Row>
                    {this.props.users.map((user, i) => {
                        if (this.props.isList) {
                            return (
                                <ListUser
                                    key={i}
                                    img={user.picture.thumbnail}
                                    name={user.name.first}
                                    email={user.email}
                                    dob={user.dob.date}
                                    last={user.name.last}
                                    gender={user.gender}
                                />
                            )
                        }

                        return (
                            <GridUser
                                key={i}
                                gender={user.gender}
                                img={user.picture.large}
                                name={user.name.first}
                                email={user.email}
                                dob={user.dob.date}
                                gender={user.gender}
                            />
                        )

                    })}
                </Row>
            </Container>


        )
    }
}

export { Users };