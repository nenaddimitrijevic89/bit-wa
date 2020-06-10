import React from 'react';
import './App.css';
import { fetchUsers } from './Data/fetch';
import { Header } from './Components/Header/Header';
import { Users } from './Components/Users/Users';
import { Footer } from './Components/Footer/Footer';
import { Search } from './Components/Search/Search';
import { Loading } from './Components/Loading/Loading';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.state = {
      isListView: true,
      users: [],
      filteredUsers: [],
      inputValue: "",
      isLoading: false
    }
  }

  componentDidMount() {
    const savedUsers = localStorage.getItem("users");
    const viewMode = localStorage.getItem("isListView");
    if (!savedUsers) {
      this.getUsers()
    } else {
      this.setState({
        users: JSON.parse(savedUsers),
        filteredUsers: JSON.parse(savedUsers)
      })
      this.setState({ isListView: JSON.parse(viewMode) })
    }

  }

  getUsers = () => {
    this.setState({ isLoading: true });

    fetchUsers()
      .then(data => {
        this.setState({ users: data.results, filteredUsers: data.results, inputValue: '' },
          () => {
            localStorage.setItem("users", JSON.stringify(data.results))
          })
      })
      .finally(() => this.setState({ isLoading: false }));
  }
  searchedUsers = (textInput) => {
    const newUsers = this.state.users.filter(user => {
      return user.name.first.toLowerCase().includes(textInput.toLowerCase()) || user.name.last.toLowerCase().includes(textInput.toLowerCase())
    });
    this.setState({
      inputValue: textInput,
      filteredUsers: newUsers
    })
  }

  onLayoutChange() {
    this.setState({ isListView: !this.state.isListView },
      () => {
        localStorage.setItem("isListView", JSON.stringify(this.state.isListView))
      })
  }

  render() {

    return (
      <div>
        <Header isList={this.state.isListView} onLayoutChange={this.onLayoutChange} updateUsers={() => this.getUsers()} />
        <Search searchedUsers={this.searchedUsers} users={this.state.users} inputValue={this.state.inputValue} />
        <Users isList={this.state.isListView} users={this.state.filteredUsers} isLoading={this.state.isLoading} />
        <Footer />
      </div >
    );
  }
}

export default App;
