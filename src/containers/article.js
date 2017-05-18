import React from 'react';

class article extends React.Component {

  componentDidMount() {
    // @todo: Call api
  }

  render() {

    const slug = this.props.match.params.slug;

    return (
      <h3>{slug}</h3>
    )
  }
}

export default article;
