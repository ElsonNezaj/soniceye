import styles from "./styles.module.scss";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import CloseIcon from "@mui/icons-material/Close";
import { toggleOrderDialog } from "../../../redux/appSlice/appSlice";

export default function OrderDialog() {
  const dispatch = useAppDispatch();
  const orderId = useAppSelector((state) => state.app.selectedOrderKey);
  const order = useAppSelector((state) => state.app.selectedOrder);
  const isOrderDialogOpen = useAppSelector(
    (state) => state.app.isOrderDialogOpen
  );

  const handleClose = () => {
    dispatch(toggleOrderDialog(false));
  };

  return (
    <Dialog
      open={isOrderDialogOpen}
      onClose={() => handleClose()}
      maxWidth="md"
      fullWidth
      PaperProps={{ className: styles.dialogPaper }}
    >
      <DialogTitle className={styles.dialogHeader}>
        <Typography className={styles.title}>
          Order Number: <span>{orderId.split("-")[0]}</span>
        </Typography>
        <div className={styles.closeIcon}>
          <CloseIcon />
        </div>
      </DialogTitle>
    </Dialog>
  );
}
