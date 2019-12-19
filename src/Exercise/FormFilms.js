import React from 'react';


const url = "https://post-a-form.herokuapp.com/api/movies/";


class FormFilms extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          poster: '',
          comment: '',
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
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
          };
        

        fetch(url, config)
      .then(res => res.json())
        .then(res => {
          if (res.error) {
            alert(res.error);
          } else {
            alert(`Added employee with the ID ${res}!`);
          }
        }).catch(e => {
          console.error(e);
          alert('Error during the employee addition');
        });
      }


    render(){
        
        return(

<div className="FormEmployee">
  <h1> Films’s entry</h1>

  <form onSubmit={this.submitForm}>
    <fieldset>
      <legend>Information</legend>
      <div className="form-data">
        <label htmlFor="title">Film Name</label>
        <input
          type="text"
          id="filmname"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
        />
      </div>

      <div className="form-data">
        <label htmlFor="url">Url</label>
        <input
          type="url"
          id="url"
          name="poster"
          onChange={this.onChange}
          value={this.state.poster}
        />
      </div>

      <div className="form-data">
      <textarea placeholder='Why do you like this film?' rows="4" cols="40" style={{width:"386px"}}
        type="text"
        id="comment"
        name="comment"
        onChange={this.onChange}
        value={this.state.comment}/>
        

      </div>
      <hr />
      <div className="form-data">
        <input className='btn' type="submit" value="Send" />
      </div>
    </fieldset>
  </form>
</div>

        )
    }
}

export default FormFilms;