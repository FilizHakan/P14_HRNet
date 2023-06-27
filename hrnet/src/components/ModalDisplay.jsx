import React from "react";
import { useSelector } from "react-redux";

import store from "../redux/store";
import { employeeCreatedAction } from "../redux/employeeCreated";
import { EmployeeCreatedSelector } from "../redux/selector";

import Modal from "hrnet_universal_modal/dist/Modal";
import "hrnet_universal_modal/dist/Modal.css";

/**
 * @name ModalDisplay
 * @description create modal component by using the "HRNet_universal_modal" react component
 * @returns {JSX.Element}
 */

export default function ModalDisplay(isVisible) 
{

  function hideBigModal() 
  {
    store.dispatch(employeeCreatedAction(false));
  }
  const isBigModalVisible = useSelector(EmployeeCreatedSelector).data;

  return (
    <div>
      <Modal
        isVisible={isBigModalVisible} 
        hide={hideBigModal} 
        title="New employee" 
        size="big"
      >
        <div className="modalBody">
          You have successfully created your new employee's record.
        </div>
      </Modal>
    </div>
    
  )
}