import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const DocumentsWay = ({ img, name }) => (
  <li className="documents-way">
    <img src={img} alt={name} />
    <span className="documents-way__name">{name}</span>
    <Button color="purple">Подробнее</Button>
  </li>
);

DocumentsWay.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DocumentsWay;
