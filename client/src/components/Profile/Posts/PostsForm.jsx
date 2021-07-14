import React from 'react';
import { Field, Form } from 'react-final-form';
import { TextArea } from '../../common/FormsControls/FormsControls';


class PostForm extends React.Component {
  render() {
    return (
      <>
        <Form
          initialValues={{
          }}
          onSubmit={values => {
            console.log(values);
            this.props.addPost(values.postText);

          }}
        >{({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                component={TextArea}
                name="postText"
                cols="30"
                rows="5"
                placeholder={this.props.postCurrentText}
              />
            </div>
            <button>Добавить пост</button>
          </form>
        )}
        </Form>
      </>
    )
  }
}

export default PostForm;