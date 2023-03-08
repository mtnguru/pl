import React from 'react'
import "./MqttDisplayActions.scss";
import Button from "../../components/ui/Button";
import SelectPretty from "../../components/ui/SelectPretty"

function MqttDisplayActions(props) {

  return (
    <div className="mqtt-display-actions">
      <div className="buttons">
        <SelectPretty onChangeH={props.actions.onPretty} />
        <Button type="push" className="clear" label="Clear" onClick={props.actions.onClearList}></Button>
      </div>
    </div>
  );
}

export default MqttDisplayActions