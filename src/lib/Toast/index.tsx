import React, { FC } from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Snackbar, { SnackbarProps } from '@material-ui/core/Snackbar';
import SnackbarContent, { SnackbarContentProps } from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from '@material-ui/icons/Close';
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
    onClose?: () => void
    variant?: keyof typeof variantIcon;
}

export interface ToastContentProps extends SnackbarContentProps {
    className?: string
    onClose?: () => void
    message?: string
    variantClassName?: keyof typeof variantIcon;
}

export const ToastMessageContent: FC<ToastContentProps> = props => {
    const classes = useStyles1();
    const { className, message, onClose, variantClassName, ...other } = props;
    const Icon = (variantClassName) ? variantIcon[variantClassName] : '';
    const variantClass = (variantClassName) ? classes[variantClassName] : '';

    return (
        <SnackbarContent
            className={clsx(variantClass, className)}
            aria-describedby="client-snackbar"
            message={
                <span className={classes.message}>
                    {
                        (Icon) && (<Icon className={clsx(classes.icon, classes.iconVariant)} />)
                    }
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
    const { className, variant, TransitionComponent, autoHideDuration, anchorOrigin, open, onClose } = props;
    const snackBarProps = { ...defaultProps, TransitionComponent, autoHideDuration, anchorOrigin, open, onClose };
    return (
        <Snackbar {...snackBarProps}>
            <ToastMessageContent
                {...props.ContentProps}
                onClose={props.onClose}
                message={props.message}
                variantClassName={variant}
                className={className}
            />
        </Snackbar >
    )
}


const useStyles1 = makeStyles((theme: Theme) => ({
    success: {
        backgroundColor: theme.palette.success.main,
    },
    error: {
        backgroundColor: theme.palette.error.main,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: theme.palette.warning.main,
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

