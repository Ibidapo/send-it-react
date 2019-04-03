import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { addParcel } from '../../../redux/actions/parcels';
import toastOptions from '../../../utils/toastOptions';

class Order extends Component {
  state = {
    fromAddress: '',
    toAddress: '',
    weight: '',
    phone: ''
  }

  onFromAddressChange = ({ target: { value } }) => this.setState({ fromAddress: value });
  onToAddressChange = ({ target: { value } }) => this.setState({ toAddress: value });
  onWeightChange = ({ target: { value } }) => this.setState({ weight: value });
  onPhoneChange = ({ target: { value } }) => this.setState({ phone: value });

  onSubmit = async (e) => {
    e.preventDefault();
    const { 
      state: { fromAddress, toAddress, weight, phone }, props: { history, addParcel } 
    } = this;
    const phoneRegex = /^\d{11}$/;
    const weightRegex = /^\d+\.?\d*$/;

    if (!fromAddress || !toAddress ) return toast.error('Address cannot be empty', toastOptions);
    if (!phoneRegex.test(phone)) return toast.error('Phone number must be 11 digits', toastOptions);
    if (!weightRegex.test(weight)) return toast.error('Weight must be number or decimal', toastOptions);

    const quote = (weight * 300) + 320; 
    const { error, success } = await addParcel({ 
      origin: fromAddress, 
      destination: toAddress, 
      parcelKg: weight,
      toPhone: phone,
      quote: quote.toString()
    });

    if (error) return toast.error(error, toastOptions);
    history.push('/dashboard/view-pending'); 
    toast.success(success, toastOptions);
  }

  render() {
    const {
      state: { fromAddress, toAddress, weight, phone }, onSubmit,
      onFromAddressChange, onToAddressChange, onPhoneChange, onWeightChange 
    } = this;

    return (
      <div className='box'>
        <form className="mx-auto" onSubmit={onSubmit}>
          <div><h3>From</h3></div>
          <div className="d-flex space-between">
            <div className="w-60">
              <label htmlFor="from-address">Address</label>
              <input 
                id="from-address" 
                type="text"
                value={fromAddress}
                onChange={onFromAddressChange}
              />
            </div>
            <div className="w-30">
              <label htmlFor="parcel-kg">Parcel Weight</label>
              <input 
                id="parcel-kg" 
                type="number"
                value={weight}  
                onChange={onWeightChange}
              />
            </div>
          </div>
          <div><h3>To</h3></div>
          <div className="d-flex space-between">
            <div className="w-60">
              <label htmlFor="to-address">Address</label>
              <input
                id="to-address" 
                type="text" 
                value={toAddress}  
                onChange={onToAddressChange}
              />
            </div>
            <div className="w-30">
              <label htmlFor="to-phone">Phone Number</label>
              <input 
                id="to-phone" 
                type="number" 
                value={phone}
                onChange={onPhoneChange}
              />
            </div>
          </div>
          <div className="text-center my-1">
            <button>Create Order</button>
          </div>
        </form>
      </div>
    )
  }
}

Order.propTypes = {
  history: PropTypes.object,
  addParcel: PropTypes.func
}

const mapDispatchToProps = ({ addParcel });

export default connect(null, mapDispatchToProps)(Order);