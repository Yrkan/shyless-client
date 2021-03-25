import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import { removeAlert } from "../actions/alert";

const Alerts = ({ alerts, removeAlert }) => {
  /*const closeAlert = (id) => {
    removeAlert(id);
  };
  */

  const makeAlerts = ({ id, msg, alertType }) => {
    return (
      <Alert key={id} severity={alertType} onClose={() => removeAlert(id)}>
        {msg}
      </Alert>
    );
  };

  return (
    <Fragment>
      {alerts !== null && alerts.length > 0 && alerts.map((a) => makeAlerts(a))}
    </Fragment>
  );
};
Alerts.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, { removeAlert })(Alerts);
