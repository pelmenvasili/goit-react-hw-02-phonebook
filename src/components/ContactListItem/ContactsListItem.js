import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

class ContactListItem extends Component {

  render() {
    const { id, name, number, onDeleteContact } = this.props;
    return (
      <li key={id} className={css.contact}>
        <span className={css.contactName}>{name}:</span> {number}
        <button
          onClick={() => onDeleteContact(id)}
          className={css.deleteButton}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };
