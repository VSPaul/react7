import React from 'react';



class LifeCycle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textglobalTitle: 'globalTitle'
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        this.setState({
            textglobalTitle: 'My form'
        })
    }

    componentDidMount() {
        console.log('Rendered Form')
        // alert('Rendered Form !');
      }

    componentDidUpdate() {
        console.log('Title changed !')
    }
      
    

    render() {

        return (

            <div className="FormEmployee">
                <h1> React 8</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend><h2>{this.state.textglobalTitle}</h2></legend>

                        <div className="form-data">
                            <label htmlFor="title"><h4>Title</h4></label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                onChange={this.onChange}
                                value={this.state.title}
                                
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input className='btn' type="submit" value="OK" />
                        </div>
                    </fieldset>
                </form>
            </div>

        )
    }
}

export default LifeCycle;