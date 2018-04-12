class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data:''
        };

        this.Title = "Hello World!";
        this.Description = "This page has been rendered using React";

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
    }

    handleChange = (id, value) => {
        this.setState(prevState => {
            return {
                data: value
            };
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: "",
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(this.state.data),
            success: (data) => { console.log(data) }
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="alert alert-danger">Oops .. Something went wrong</div>
            );
        }

        return (
            <div>
                <div className="text-center page-header">
                    <h1>{this.Title}</h1>
                    <p>{this.Description}</p>
                </div>
                <div className="container">
                    <form className="form-vertical" onSubmit={this.handleSubmit}>
                        <input type="text" name="yourName" />
                        <button className="btn btn-primary btn-lg" type="submit">
                            Submit
                           </button>
                    </form>
                </div>
            </div>
        );

    }
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById('container')
);