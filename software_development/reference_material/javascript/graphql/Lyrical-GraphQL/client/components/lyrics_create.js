import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricsCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: { content: this.state.content, songId: this.props.songId }
    })
    .then(this.setState({ content: '' }));
  }


  render() {
    return (
      <form onSubmit={::this.onSubmit}>
        <label htmlFor="add-lyric">Add a lyric</label>
        <input
          id="add-lyric"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricsCreate);
