import React, { FC } from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Snackbar, { SnackbarProps } from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';



const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

export interface DefaultProps extends Pick<SnackbarProps, 'anchorOrigin' | 'autoHideDuration' | 'resumeHideDuration' | 'TransitionComponent' | 'transitionDuration' | 'TransitionProps'> { }

let defaultProps: DefaultProps = {
    anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
    },
    autoHideDuration: 6000
}

export const ToastInit = (initProps: DefaultProps) => {
    defaultProps = { ...defaultProps, ...initProps };
}

export interface ToastProps extends SnackbarProps {
    className?: string;
    message?: string;
    onClose?: () => void;
    variant: keyof typeof variantIcon;
}

export const ToastMessageContent: FC<ToastProps> = props => {
    const classes = useStyles1();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    )
}

export const ToastMessage: FC<ToastProps> = props => {
    const { className, variant, ...other } = props;
    const snackBarProps = { ...defaultProps, ...other };
    return (
        <Snackbar {...snackBarProps}>
            <ToastMessageContent {...props} />
        </Snackbar >
    )
}




const useStyles1 = makeStyles((theme: Theme) => ({
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
}));

