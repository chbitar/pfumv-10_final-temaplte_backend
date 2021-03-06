import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { Alert, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const InscriptionsMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="user-edit" name="Inscription" id="entity-menu">
    <Alert variant="primary">Licence</Alert>
    <MenuItem icon="asterisk" to="/entity/etudiants-licence/new">
      Nouvelle inscription
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/etudiants-licence">
      Recherche étudiant
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/etudiants-licence">
      Etats
    </MenuItem>
    <Alert variant="success">Master</Alert>
    <MenuItem icon="asterisk" to="/entity/etudiants-master/new">
      Nouvelle inscription
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/etudiants-master">
      Recherche étudiant
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/etudiants-master">
      Etats
    </MenuItem>
    <Alert variant="warning">Master executif</Alert>
    <MenuItem icon="asterisk" to="/entity/etudiants-executif/new">
      Nouvelle inscription
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/etudiants-executif">
      Recherche étudiant
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/etudiants-executif">
      Etats
    </MenuItem>
  </NavDropdown>
);
