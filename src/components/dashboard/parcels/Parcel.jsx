import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faTimes, faPencilAlt, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

class Parcel extends Component {
  state = {
    viewToggle: false,
    editToggle: false,
    destination: this.props.destination,
    location: this.props.present_location,
    status: this.props.status
  }

  onViewToggle = () => this.setState((prevState) => ({ 
    viewToggle: !prevState.viewToggle,
    editToggle: false
  }));
  onEditToggle = () => this.setState((prevState) => ({ 
    editToggle: !prevState.editToggle,
    viewToggle: false 
  }));
  onDestinationChange = ({ target: { value } }) => this.setState({ destination: value });
  onLocationChange = ({ target: { value } }) => this.setState({ location: value });

  editParcel = () => {
    
  }

  render() {
    const { 
      state: { viewToggle, editToggle, destination, location, status },
      props: { is_admin, parcel_id, origin, parcel_kg, quote, recipient_phone, created_on },
      onDestinationChange, onLocationChange, onEditToggle, onViewToggle, editParcel
    } = this;

    return (
      <div className="box py-1 my-1">
        <div className="parcel-box d-flex space-evenly mx-auto">
          <div className="w-20">Order: # {parcel_id}</div>
          <div className="w-20">Status: {status}</div>
          <div className="w-20">Quote: &#8358; {quote}</div>
          <div className="w-20"> {created_on}</div>
          <div className="w-20 d-flex space-between">
            <button 
              title="Deliver Order" 
              className={`icon ${is_admin ? 'active' : ''}`}
            >
              <FontAwesomeIcon icon={faCheckSquare} color='#ffc107' />
            </button>
            <button 
              title="Cancel Order" 
              className={`icon ${!is_admin ? 'active' : ''}`}
            >
              <FontAwesomeIcon icon={faTimes} color='#ff0000' />
            </button>
            <button 
              title="Edit Order" 
              className="icon active"
              onClick={onEditToggle}
            >
              <FontAwesomeIcon icon={faPencilAlt} color='#0000ff' />
            </button>
            <button 
              title="View Order" 
              className="icon active"
              onClick={onViewToggle}
            >
              <FontAwesomeIcon icon={faCaretDown} color='#008000' />
            </button>
          </div>
          <div className={`w-100 parcel-info text-left ${viewToggle || editToggle ? 'active' : ''}`}>
            <div className="w-100 d-flex space-between">
              <div className="w-100"><h4 className="my-0">From</h4></div>
              <div className="w-60 mt-05">Address: {origin}</div>
              <div className="w-30 mt-05">Weight: {parcel_kg}</div>
            </div>
            <div className="w-100 d-flex space-between">
              <div className="w-100"><h4 className="mt-1 mb-0">To</h4></div>
              <div className="w-60 mt-05">
                Address: {
                  editToggle && !is_admin ?
                  (
                    <input 
                      type="text" 
                      value={destination}
                      onChange={onDestinationChange}
                    />
                  ) : destination
                }
              </div>
              <div className="w-30 mt-05">Mobile: {recipient_phone}</div>
            </div>
            <div className="w-100">
              <div className="w-60 mt-05">
                Present Location: {
                  editToggle && is_admin ?
                  (
                    <input
                      type="text"
                      value={location}
                      onChange={onLocationChange}
                    />
                  ) : location
                }  
              </div>
              {editToggle && (
                <div className="w-100 mt-1 text-center">
                  <button className='form-button' onClick={editParcel}>save</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Parcel.propTypes = {
  parcel_id: PropTypes.number,
  destination: PropTypes.string,
  present_location: PropTypes.string,
  status: PropTypes.string,
  is_admin: PropTypes.bool,
  origin: PropTypes.string, 
  parcel_kg: PropTypes.string, 
  quote: PropTypes.number,
  recipient_phone: PropTypes.string,
  created_on: PropTypes.string
}

const mapStateToProps = ({ profile: { is_admin } }) => ({ is_admin })
const mapDispatchToProps = ({  });

export default connect(mapStateToProps, mapDispatchToProps)(Parcel);