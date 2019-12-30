import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import { green, amber } from '@material-ui/core/colors';
import clsx from 'clsx';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var DialogTitle = function (props) {
    var classes = useDialogTitleStyles();
    var children = props.children, onClose = props.onClose;
    return (React.createElement(MuiDialogTitle, { disableTypography: true, className: classes.root },
        React.createElement(Typography, { variant: "h6" }, children),
        onClose ? (React.createElement(IconButton, { "aria-label": "close", className: classes.closeButton, onClick: onClose },
            React.createElement(CloseIcon, null))) : null));
};
var DialogActions = function (props) {
    var isCloseButton = props.isCloseButton, closeButtonText = props.closeButtonText, actionsChildren = props.actionsChildren, onClose = props.onClose;
    return (React.createElement(MuiDialogActions, null,
        (actionsChildren) && actionsChildren,
        (isCloseButton && !actionsChildren) &&
            (React.createElement(Button, { color: "primary", onClick: function () { onClose && onClose(); } }, (closeButtonText) ? closeButtonText : 'Close'))));
};
var AppDialog = function (props) {
    var title = props.title, handleClose = props.handleClose, children = props.children, _a = props.maxWidth, maxWidth = _a === void 0 ? "sm" : _a, contentProps = props.contentProps, _b = props.isActionCloseButton, isActionCloseButton = _b === void 0 ? true : _b, closeButtonText = props.closeButtonText, actionsChildren = props.actionsChildren, rest = __rest(props, ["title", "handleClose", "children", "maxWidth", "contentProps", "isActionCloseButton", "closeButtonText", "actionsChildren"]);
    console.log('Rest props', rest);
    var handleDialogClose = function () {
        handleClose();
    };
    return (React.createElement(Dialog, __assign({ onClose: handleDialogClose, fullWidth: true, maxWidth: maxWidth }, rest),
        React.createElement(DialogTitle, { onClose: handleDialogClose }, title),
        React.createElement(MuiDialogContent, __assign({}, contentProps), children),
        (isActionCloseButton || actionsChildren) &&
            (React.createElement(DialogActions, { isCloseButton: isActionCloseButton, closeButtonText: closeButtonText, actionsChildren: actionsChildren, onClose: handleDialogClose }))));
};
var useDialogTitleStyles = makeStyles(function (theme) {
    return (createStyles({
        root: {},
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        }
    }));
});

var variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};
var defaultProps = {
    anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
    },
    autoHideDuration: 6000
};
var ToastInit = function (initProps) {
    defaultProps = __assign(__assign({}, defaultProps), initProps);
};
var ToastMessageContent = function (props) {
    var classes = useStyles1();
    var className = props.className, message = props.message, onClose = props.onClose, variant = props.variant, other = __rest(props, ["className", "message", "onClose", "variant"]);
    var Icon = variantIcon[variant];
    return (React.createElement(SnackbarContent, __assign({ className: clsx(classes[variant], className), "aria-describedby": "client-snackbar", message: React.createElement("span", { className: classes.message },
            React.createElement(Icon, { className: clsx(classes.icon, classes.iconVariant) }),
            message), action: [
            React.createElement(IconButton, { key: "close", "aria-label": "close", color: "inherit", onClick: onClose },
                React.createElement(CloseIcon, { className: classes.icon })),
        ] }, other)));
};
var ToastMessage = function (props) {
    var className = props.className, variant = props.variant, other = __rest(props, ["className", "variant"]);
    var snackBarProps = __assign(__assign({}, defaultProps), other);
    return (React.createElement(Snackbar, __assign({}, snackBarProps),
        React.createElement(ToastMessageContent, __assign({}, props))));
};
var useStyles1 = makeStyles(function (theme) { return ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}); });

export { AppDialog, DialogTitle, ToastInit, ToastMessage, ToastMessageContent };
//# sourceMappingURL=index.es.js.map
