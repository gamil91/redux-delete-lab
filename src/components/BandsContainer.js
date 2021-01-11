import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'
import { addBand, deleteBand } from '../actions/bands'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBand = () => this.props.bands.map(band => { return <Band key={band.id} band={band} deleteBand={this.props.deleteBand}/>})
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBand()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

// const mapDispatchToProps = dispatch => ({
//   addBand: name => dispatch({ type: "ADD_BAND", name }),
//   deleteBand: id => dispatch({ type: "DELETE_BAND", id})
// })

export default connect(mapStateToProps, {addBand, deleteBand})(BandsContainer)
// export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)