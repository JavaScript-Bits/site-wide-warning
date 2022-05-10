import React from 'react';

export const styles: {[key: string]: React.CSSProperties} = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    left: '0',
    top: '0',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(8px)',
  },
  modal: {
    width: '500px',
    height: '300px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#414141',
    boxShadow:
      '0px 6px 20px 0px rgba(176, 190, 197, 0.32), 0px 2px 4px 0px rgba(176, 190, 197, 0.32)',
  },
  dropdownButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#C6C6C6',
    borderRadius: '5px',
    borderStyle: 'solid',
    borderWidth: '1px',
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '450px',
    height: '60px',
  },
  rotate180: {
    transform: 'rotate(180deg)',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '450px',
    padding: '20px',
    fontWeight: 600,
  },
  cancelButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    width: '140px',
    height: '50px',
    borderRadius: '5px',
    marginRight: '15px',
    cursor: 'default',
  },
  changeUserButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ABEFEB',
    width: '140px',
    height: '50px',
    borderRadius: '5px',
    cursor: 'default',
    border: 'none',
  },

  startWarningButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F47564',
    width: '140px',
    height: '50px',
    borderRadius: '5px',
    cursor: 'default',
    marginLeft: '15px',
    border: 'none',
  },

  dismissWarningButtonDisabled: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#414141',
    width: '110px',
    height: '40px',
    borderRadius: '5px',
    cursor: 'default',
    color: '#fff',
    border: 'none',
  },
};

export const alertStyles: {[key: string]: React.CSSProperties} = {
  alert: {
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
    justifyContent: 'space-between',
    textAlign: 'left',
    backgroundColor: '#F47564',
    zIndex: 1,
    padding: '5px',
    color: '#fff',
  },
};

export const dropdownStyles: {[key: string]: React.CSSProperties} = {
  dropdown: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: '450px',
    justifyContent: 'flex-start',
    textAlign: 'left',
    alignItems: 'stretch',
    borderRadius: '5px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#C6C6C6',
    padding: '10px',
    marginTop: '220px',
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },
  menuItem: {
    padding: '2px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'default',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
  },
};

export const dropdownStyles2: {[key: string]: React.CSSProperties} = {
  dropdown: {
    position: 'absolute',
    width: '450px',
    justifyContent: 'flex-start',
    textAlign: 'left',
    alignItems: 'stretch',
    borderRadius: '5px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#C6C6C6',
    padding: '10px',
    marginTop: '220px',
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },
  menuItem: {
    padding: '2px 2px 7px 2px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'default',
    flex: 1,
  },

  menuItemLabel: {
    padding: '2px 2px 4px 2px',
    fontSize: '12px',
    fontWeight: 'normal',
    cursor: 'default',
    flex: 1,
  },
};