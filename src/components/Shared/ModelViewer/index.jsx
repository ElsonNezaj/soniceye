import styles from "./styles.module.scss";
import { Dialog, DialogTitle } from "@mui/material";
import { Typography } from "antd";
import ModelView from "./model";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutline from "@mui/icons-material/HelpOutline";
import { useWindowSize } from "../../../services/utils";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleModelViewer } from "../../../redux/appSlice/appSlice";

export default function ModelViewer() {
  const [width] = useWindowSize();
  const dispatch = useAppDispatch();
  const isModelPreviewOpen = useAppSelector(
    (state) => state.app.isModelViewOpen
  );

  const handleClose = () => {
    dispatch(toggleModelViewer(false));
  };

  return (
    <Dialog
      open={isModelPreviewOpen}
      maxWidth="lg"
      fullScreen={width > 500 ? false : true}
      onClose={() => handleClose()}
      className={styles.modelDialog}
      PaperProps={{ className: styles.modelPaper }}
    >
      <DialogTitle className={styles.header}>
        <Typography className={styles.quickMessage}>
          <HelpOutline /> Drag to rotate the model
        </Typography>
        <div onClick={() => handleClose()} className={styles.close}>
          <CloseIcon />
        </div>
      </DialogTitle>
      <ModelView />
    </Dialog>
  );
}
