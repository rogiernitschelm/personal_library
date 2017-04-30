import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';


class PostNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        this.context.router.push('/');

      });
    // blog post has been created, navigate the user to the index
    // we navigate by calling this.context.router.push with the
    // new path to navigate to.
  }

  render(){
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // === const handleSubmit = this.props.handleSubmit
    // === const title = this.props.fields.title;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : '' }`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help form-control-label">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : '' }`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help form-control-label">
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : '' }`}>
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
          <div className="text-help form-control-label">
            {content.touched ? content.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values){
  const errors = {};

  if (!values.title) {
    errors.title = 'Please enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Please enter a category';
  }
  if (!values.content) {
    errors.content = 'Please enter your message';
  }

  return errors
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostNew);
