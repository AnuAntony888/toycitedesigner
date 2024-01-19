import React from "react";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import { useTheme } from "@mui/material/styles";
import CancelIcon from "@mui/icons-material/Cancel";
import useMediaQuery from "@mui/material/useMediaQuery";
import Contactus from "./Contact/Contactus";
import { usePoPupContext } from "./PopupContext";

function Popups() {
  const theme = useTheme();
  const desktopview = useMediaQuery(theme.breakpoints.up("xs"));
  const laptop = useMediaQuery(theme.breakpoints.up("sm"));

  const { openpopup, setopenpopup } = usePoPupContext();
  console.log(openpopup, "openpopup");
  return (
    <div>
      <Dialog
        open={Boolean(openpopup)}
        onClose={  () => setopenpopup(false)}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": desktopview
              ? {
                  maxWidth: "900px",
                  overflowY: "unset",
                  borderRadius: "15px",

                
                }
              : { overflowY: "unset", borderRadius: "12px" },
          },
        }}
      >
        {/* <DialogContent
          // sx={{
          //   "&.MuiDialogContent-root": laptop
          //     ? {
          //         padding: props.padding,
          //       }
          //     : "",
          // }}
        > */}
          <CancelIcon
            className="cancelicon"
            onClick={
      
              () => setopenpopup(false)
            }
            sx={{
              position: "absolute",
              backgroundColor: "transparent",

              right: "0px",
              zIndex: 1000,

              top: "1px",
            }}
          ></CancelIcon>

          <Contactus setopenpopup={setopenpopup} />
        {/* </DialogContent> */}
      </Dialog>
    </div>
  );
}

export default Popups;
