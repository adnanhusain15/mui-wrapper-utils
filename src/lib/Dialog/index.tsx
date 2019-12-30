
import React, { FC } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Dialog, { DialogProps as parentDialogProps } from '@material-ui/core/Dialog/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent, { DialogContentProps } from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

interface DialogProps extends parentDialogProps {
    handleClose: Function,
    title: string,
    contentProps?: DialogContentProps,
    isActionCloseButton?: boolean,
    closeButtonText?: string,
    actionsChildren?: React.ReactNode;
}

export interface DialogTitleProps {
    children: React.ReactNode;
    onClose: () => void;
}

export const DialogTitle: FC<DialogTitleProps> = props => {
    const classes = useDialogTitleStyles();
    const { children, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
}

export interface DialogActionProps {
    isCloseButton?: boolean,
    closeButtonText?: string,
    actionsChildren?: React.ReactNode,
    onClose?: Function
}

const DialogActions: FC<DialogActionProps> = props => {
    const { isCloseButton, closeButtonText, actionsChildren, onClose } = props;
    return (
        <MuiDialogActions>
            {
                (actionsChildren) && actionsChildren
            }
            {
                (isCloseButton && !actionsChildren) &&
                (
                    <Button color="primary" onClick={() => { onClose && onClose() }}>
                        {
                            (closeButtonText) ? closeButtonText : 'Close'
                        }
                    </Button>
                )
            }
        </MuiDialogActions>
    )
}


export const AppDialog: FC<DialogProps> = (props) => {
    const { title, handleClose, children, maxWidth = "sm", contentProps, isActionCloseButton = true, closeButtonText, actionsChildren, ...rest } = props;
    console.log('Rest props', rest);
    const handleDialogClose = () => {
        handleClose();
    }
    return (
        <Dialog onClose={handleDialogClose}
            fullWidth={true}
            maxWidth={maxWidth}
            {...rest}
        >
            <DialogTitle onClose={handleDialogClose}>
                {title}
            </DialogTitle>
            <MuiDialogContent {...contentProps}>{children}</MuiDialogContent>
            {
                (isActionCloseButton || actionsChildren) &&
                (
                    <DialogActions isCloseButton={isActionCloseButton}
                        closeButtonText={closeButtonText}
                        actionsChildren={actionsChildren}
                        onClose={handleDialogClose}
                    />
                )
            }

        </Dialog>
    )
}


const useDialogTitleStyles = makeStyles<Theme>((theme) => {
    return (createStyles({
        root: {},
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        }
    }))
})

export default AppDialog;