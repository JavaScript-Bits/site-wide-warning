import React, {useState} from 'react';
import {User} from '../models/User';
import {dropdownStyles} from '../utils/Styles';

type DropdownProps = {
  users: User[];
  onSelect: (user: User) => void;
};

const ChangeUserDropdown = (props: DropdownProps) => {
  const [hoveredMenuItemKey, setHoveredMenuItemKey] = useState<string | null>(
    null
  );
  return (
    <div style={dropdownStyles.dropdown}>
      {props.users.length > 0 ? (
        props.users.map((user: User) => {
          return (
            <div
              key={user.id}
              style={{
                ...dropdownStyles.menuItem,
                backgroundColor:
                  hoveredMenuItemKey === user.id ? '#EEEEEE' : '#FFFFFF',
              }}
              onClick={() => {
                props.onSelect(user);
              }}
              onMouseEnter={() => setHoveredMenuItemKey(user.id)}
              onMouseLeave={() => setHoveredMenuItemKey(null)}
            >
              {user.firstName + ' ' + user.lastName}
            </div>
          );
        })
      ) : (
        <div style={dropdownStyles.menuItem}>No Users Available</div>
      )}
    </div>
  );
};

export default ChangeUserDropdown;
