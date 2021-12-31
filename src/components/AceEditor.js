import { Component } from 'react'

const Editor = props => {
  if (typeof window !== 'undefined') {
    const Ace = require('react-ace').default
    require('brace/mode/javascript')
    require('brace/theme/ambiance')

    return <Ace {...props} />
  }

  return null
}

class IsomorphicEditor extends Component {
  state = { mounted: false }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  render = () =>
    this.state.mounted ? (
      <Editor showGutter={this.props.showGutter !== true ? false : true} {...this.props} />
    ) : null
}

export default IsomorphicEditor
