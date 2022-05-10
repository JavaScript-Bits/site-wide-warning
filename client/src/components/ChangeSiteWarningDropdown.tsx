import React, {useState} from 'react';
import {siteMappedWideWarnings, SiteWarning} from '../models/SiteWideWarning';
import {dropdownStyles2 as styles} from '../utils/Styles';

type DropdownProps = {
  onSelect: (siteWarning: SiteWarning) => void;
};

const ChangeSiteWarningDropdown = (props: DropdownProps) => {
  const [hoveredMenuItemKey, setHoveredMenuItemKey] = useState<string | null>(
    null
  );
  return (
    <div style={styles.dropdown}>
      {Object.entries(siteMappedWideWarnings).map(([key, value]) => {
        return (
          <div
            key={key}
            style={{
              ...styles.menuItem,
              backgroundColor:
                hoveredMenuItemKey === key ? '#EEEEEE' : '#FFFFFF',
            }}
            onClick={() => {
              props.onSelect(value);
            }}
            onMouseEnter={() => setHoveredMenuItemKey(key)}
            onMouseLeave={() => setHoveredMenuItemKey(null)}
          >
            {value.title} <br />
            <small style={styles.menuItemLabel}>{value.label}</small>
          </div>
        );
      })}
    </div>
  );
};

export default ChangeSiteWarningDropdown;
