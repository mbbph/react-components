class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      fonteight: this.state.done ? 'bold' : 'none'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <GroceryListItem todo={todo} />
    )}
  </ul>
);

var App = () => (
  <div>
    <GroceryList todos={['Milk', 'Tea']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
